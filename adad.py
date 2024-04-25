from reportlab.pdfgen import canvas
from reportlab.lib.units import inch
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, PageTemplate, Frame, Paragraph
from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics   # 注册字体
from reportlab.pdfbase.ttfonts import TTFont # 字体类
from reportlab.platypus import Table, SimpleDocTemplate, Paragraph, Image  # 报告内容相关类
from reportlab.lib.pagesizes import letter  # 页面的标志尺寸(8.5*inch, 11*inch)
from reportlab.lib.styles import getSampleStyleSheet  # 文本样式
from reportlab.graphics.charts.barcharts import VerticalBarChart  # 图表类
from reportlab.graphics.charts.legends import Legend  # 图例类
from reportlab.graphics.shapes import Drawing  # 绘图工具
from reportlab.lib.units import cm  # 单位：cm
import matplotlib.pyplot as plt
import pandas as pd
import datetime
from math import pi
import os

class ADReportGenerator:
    
    def __init__(self):

        #字体包录入
        pdfmetrics.registerFont(TTFont('Arial', 'Arial.ttf'))
        pdfmetrics.registerFont(TTFont('SimHei', 'SimHei.ttf'))
        pdfmetrics.registerFont(TTFont('YaHei', 'YaHei.ttf'))
        pdfmetrics.registerFont(TTFont('YaHeiBold', 'YaHeiBold.ttf'))

        self.page_width = 612
        self.page_height = 792
        self.title_font = "YaHeiBold"
        self.content_font = "YaHei"
        self.info_size = 15
        self.title_size = 30
        self.content_size = 20
        self.blue_color = colors.HexColor('#e5f2fe')

        """
        self.df = pd.DataFrame({
                'group': ['A'],
                '时间定向力': [4],
                '地点定向力': [5],
                '物品名回忆': [1],
                '计算能力': [3],
                '记忆能力': [5],
                '常识基础': [1]
        })
        #self.area_id = "相城区"
        """

        self.title_text = "AD筛查报告"
        self.title_text_width = pdfmetrics.stringWidth(self.title_text, self.title_font, self.title_size)
        """
        self.subtitle_text_12 = "影像所见"
        self.subtitle_text_13 = "初步印象"
        self.subtitle_text_14 = "眼底成像"
        self.subtitle_text_11 = "基本信息"

        self.subtitle_text_21 = "基本信息"
        self.subtitle_text_22 = "AD综合分析"
        self.subtitle_text_23 = "AD总体结果"
        self.subtitle_text_24 = "综合建议"

        self.chart_data_1= [["时间定向力", "4分"],
                        ["地点定向力", "5分"],
                        ["物品名回忆", "1分"],
                        ["计算能力", "3分"],
                        ["记忆能力", "5分"],
                        ["常识基础", "1分"]]
        self.chart_data_2 = [["认知功能", "认知功能障碍"],
                        ["认知功能障碍", "中等"]]
        self.info_name = "周五"
        self.info_gender = "男"
        self.info_age = "63周岁"
        self.info_id = "2024030801"
        self.info_date = "2024.04.15"
        self.info_test = "MMSE测试"
        self.info_category = "精神病科"

        self.info_left = "OD(右眼)"
        self.info_right = "OS(左眼)"
       

        self.diag_right = "糖尿病视网膜病变"
        self.diag_left = "高血压视网膜病变"

        self.impress_right = "无"
        self.impress_left = "无"
        """
        
        

    def _receive_data(self, data):
        self.patient_id_ad = data['patient_id_ad']#以这个代替总的
        self.patient_id_eye = data['patient_id_eye']

        # doctoropdiagnose是AD的
        self.ad_patient_obj = DoctorOptDiagnose.objects.get(patient_id=patient_id_ad)

        # doctordiagnose是眼底的
        self.eye_patient_obj = DoctorDiagnose.objects.get(patient_id=patient_id_eye)

        # 基本信息
        #姓名、性别、年龄、检查日期、检查单号
        self.patient_obj = PatientInfo.objects.get(pk_patient_id = patient_id_ad)
        self.patient_name = patient_obj.patient_name

        self.patient_gen = patient_obj.patient_gender
        if(patient_gen == 0):
            self.patient_gender = "男"
        else:
            self.patient_gender = "女"

        self.patient_age = patient_obj.patient_age
        
        # 眼底成像日期 AD报告日期
        self.ad_diagnose_date = ad_patient_obj.diagnose_time
        self.eye_diagnose_date = eye_patient_obj.diagnose_time

        # ad检查单号 眼底检查单号
        self.ad_check_num = ad_patient_obj.check_num
        self.eye_chech_num = eye_patient_obj.check_num

        # 眼底影像 初步印象
        self.lefteye_desc = eye_patient_obj.left_desc
        self.righteye_desc = eye_patient_obj.right_desc
        self.lefteye_diag = eye_patient_obj.left_diagnose
        self.righteye_diag = eye_patient_obj.right_diagnose

        # 雷达图数据接收
        self.mmse_score = ad_patient_obj.mmse_sroce
        self.numbers = re.findall(r'\d', mmse_score)
        self.radar_mmse_scores = [int(num) for num in numbers] #六项分数存入数组
        #print("MMSE Scores for Doctor with ID {}: {}".format(ad_patient_obj, radar_mmse_scores))
        self.radar_mmse_scores_sum = sum(radar_mmse_scores) #MMSE总分
        $print(radar_mmse_scores_sum)
        self.df = pd.DataFrame({
            'group': ['A'],
            '时间定向力': [radar_mmse_scores[0]],
            '地点定向力': [radar_mmse_scores[1]],
            '物品名回忆': [radar_mmse_scores[2]],
            '计算能力': [radar_mmse_scores[3]],
            '记忆能力': [radar_mmse_scores[4]],
            '常识基础': [radar_mmse_scores[5]]
         })

        # AD量表总分判断
        if radar_mmse_scores_sum < 30:
            self.ad_diagnose_result = "认知功能障碍"
            if radar_mmse_scores_sum >= 20:
                self.ad_diagnose_level = "轻度"
            elif radar_mmse_scores_sum >=10:
                self.ad_diagnose_level = "中度"
            else:
                self.ad_diagnose_level = "重度"

        else:
            self.ad_diagnose_result = "无障碍"
            self.ad_diagnose_level = "无"

        # AD量表表格
        self.chart_data_1= [["时间定向力", radar_mmse_scores[0]+"分"],
                        ["地点定向力", radar_mmse_scores[1]+"分"],
                        ["物品名回忆", radar_mmse_scores[2]+"分"],
                        ["计算能力", radar_mmse_scores[3]+"分"],
                        ["记忆能力", radar_mmse_scores[4]+"分"],
                        ["常识基础", radar_mmse_scores[5]+"分"]]

        self.chart_data_2 = [["认知功能", "认知功能障碍"],
                        [ad_diagnose_result, ad_diagnose_level]]

        # 医生建议
        self.sugg_text = eye_patient_obj.diagnose_advice

        # 医生签名 数据库表中不存在医生名字这一项
        # doctor_name = 

        # 打印日期
        self.current_date = datetime.datetime.now()
        self.year = current_date.year
        self.month = current_date.month
        self.day = current_date.day

        # 将年、月、日格式化为字符串
        self.print_date = f"{year}.{month}.{day}"

    # 网格虚拟操作，后期删除
    def _draw_grid(self, pdf_canvas, grid_size):
        pdf_canvas.setStrokeColorRGB(0, 0, 0)  # 设置网格线颜色为黑色
        for x in range(0, int(self.page_wid), grid_size):
            pdf_canvas.line(x, 0, x, self.page_hei)
        for y in range(0, int(self.page_hei), grid_size):
            pdf_canvas.line(0, y, self.page_wid, y)
    
    # 绘制雷达图
    def _gen_radar_chart(self, dataframe, filename):
        # 中文包
        plt.rcParams['font.family']=['Heiti TC']
        plt.rcParams['font.sans-serif'] = ['Heiti TC']

        # 变量类别
        categories = list(dataframe)[1:]
        # 变量类别个数
        N = len(categories)

        # 绘制数据的第一行
        values = dataframe.loc[0].drop('group').values.flatten().tolist()
        # 将第一个值放到最后，以封闭图形
        values += values[:1]

        # 设置每个点的角度值，六边形需要六个角度
        angles = [n / float(N) * 2 * pi + pi/6 for n in range(N)]
        angles += angles[:1]

        # 初始化极坐标网格 设为透明
        ax = plt.subplot(111, polar=True, frameon = False)
        ax.grid(False)

        # 设置x轴的标签
        plt.xticks(angles[:-1], categories, color='black', size=15, rotation = 50)

        # 设置标签显示位置12345
        ax.set_rlabel_position(0)

        # 设置y轴的标签
        plt.yticks([])
        
        ax.plot(angles, values, linewidth=1, linestyle='solid', color='blue')

        # 添加数据标签
        for i in range(len(angles)-1):
            angle_mid = angles[i]
            plt.text(angle_mid, values[i]+0.3, str(values[i]), color='blue', ha='center')

        for i in range(N):
            for j in range(1, 6):
                ax.plot([angles[i], angles[(i+1)%N]], [j, j], color='grey', linewidth=1, alpha=0.1)

        for i in range(N):
            ax.plot([angles[i], angles[(i+1)%N]], [0, 5], color='grey', linewidth=1, alpha=0.1)

        for i in range(N):
            for j in range(1,5):
                if j % 2 == 0:
                    a = [angles[i], angles[(i+1)%N], angles[(i+1)%N], angles[i]]
                    b = [j-1, j-1, j ,j]
                    ax.fill(a,b,'grey', alpha=0.3)

        #标签与x轴轴距
        ax.tick_params(axis='x', pad=25)

        plt.savefig(filename, format='png', dpi=100, bbox_inches='tight', pad_inches=0.1)
        plt.close()
    
    # 在宽度中间的位置绘制标题
    def _draw_centered_width_string(self, pdf_canvas, text, font_name, font_size, need_height):
        pdfmetrics.registerFont(TTFont(font_name, f"{font_name}.ttf"))
        pdf_canvas.setFont(font_name, font_size)
        
        text_width = pdfmetrics.stringWidth(text, font_name, font_size)

        # 计算字符串在页面中的位置
        x = (self.page_width - text_width) / 2
        pdf_canvas.drawString(x, need_height, text)
    
    # 在绘制标题后面绘制附属序号
    def _draw_title_subscript_string(self, pdf_canvas, text, font_size, title_text_width, page_wid, need_height):
        pdfmetrics.registerFont(TTFont(font_name, f"{font_name}.ttf"))
        pdf_canvas.setFont(font_name, font_size)
        
        text_width = pdfmetrics.stringWidth(text, font_name, font_size)
        
        # 计算字符串在页面中的位置
        x = title_text_width/2 + self.page_width/2 +20
        
        pdf_canvas.drawString(x, need_height, text)
    
    # 竖向关键字表格
    def _draw_table_vertical(self, c, table_data, col_widths, row_heights, x, y):
        # 定义表格数据和样式
        table = Table(table_data, colWidths=col_widths, rowHeights=row_heights)
        custom_color = colors.HexColor('#e5f2fe')

        table_style = TableStyle([('ALIGN', (0, 0), (-1, -1), 'CENTER'),
                                  ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
                                  ('FONTNAME', (0, 0), (-1, -1),'YaHei'),
                                  ('BACKGROUND', (0, 0), (0, -1), custom_color),
                                  ('GRID', (0, 0), (-1, -1), 1, 'lightgrey')])
        table.setStyle(table_style)
        table.wrapOn(c, 0, 0)
        # 将表格绘制到 Canvas 上
        table.drawOn(c, x, y)
    
    # 横向关键字表格
    def _draw_table_horizon(self, c, table_data, col_widths, row_heights, x, y):
        # 定义表格数据和样式
        table = Table(table_data, colWidths=col_widths, rowHeights=row_heights)
        custom_color = colors.HexColor('#e5f2fe')

        table_style = TableStyle([('ALIGN', (0, 0), (-1, -1), 'CENTER'),
                                  ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
                                  ('FONTNAME', (0, 0), (-1, -1),'YaHei'),
                                  ('BACKGROUND', (0, 0), (-1, 0), custom_color),
                                  ('GRID', (0, 0), (-1, -1), 1, 'lightgrey')])
        table.setStyle(table_style)
        table.wrapOn(c, 0, 0)
        # 将表格绘制到 Canvas 上
        table.drawOn(c, x, y)
    
    # 绘制副标题
    def _draw_sub_title(self, pdf_canvas, text, font_name, font_size, height, font_color):
        pdfmetrics.registerFont(TTFont(font_name, f"{font_name}.ttf"))
        pdf_canvas.setFont(font_name, font_size)
        pdf_canvas.setFillColor(font_color)  # 设置字体颜色
        text_width = pdfmetrics.stringWidth(text, font_name, font_size)
        pdf_canvas.drawString(50, height, text)
    
    # 绘制蓝色正方形
    def _draw_blue_square(self, c, x, y, size):
        blue_color = colors.HexColor('#e5f2fe')  # 自定义的蓝色
        c.setFillColor(blue_color)
        c.setStrokeColor(blue_color)  # 设置边框颜色为透明
        c.rect(x, y, size, size, fill=1)
        #c.setStrokeColor(blue_color)  # 设置边框颜色为透明

    # 绘制基本信息内容
    def _draw_info(self, pdf_canvas, text, font_name, font_size, width, height, font_color):
        pdfmetrics.registerFont(TTFont(font_name, f"{font_name}.ttf"))
        pdf_canvas.setFont(font_name, font_size)
        pdf_canvas.setFillColor(font_color)  # 设置字体颜色
        text_width = pdfmetrics.stringWidth(text, font_name, font_size)
        pdf_canvas.drawString(width, height, text)
    
    # 绘制canvas
    def generate_report(self, output_file, save_path):
        # 创建一个Canvas对象
        file_path = os.path.join(save_path, output_file)
        pdf = canvas.Canvas(file_path)

        # 执行绘制操作
        # 雷达图
        self._gen_radar_chart(self.df, 'radar_chart.png')

        #AD报告
        self._draw_centered_width_string(pdf, self.title_text, self.title_font, self.title_size, self.page_height)

        #绘制 基本信息
        self._draw_blue_square(pdf, 25, 750, 20)
        self._draw_sub_title(pdf, "基本信息", self.content_font, self.content_size, 750, 'black')
        self._draw_info(pdf,"姓名："+self.patient_name, self.content_font, self.info_size, 50, 680, 'black')
        self._draw_info(pdf,"性别："+self.patient_gender, self.content_font, self.info_size, 250, 680, 'black')
        self._draw_info(pdf,"年龄："+self.patient_age, self.content_font, self.info_size, 400, 680, 'black')

        #绘制 眼底成像
        self._draw_blue_square(pdf, 25, 620, 20)
        self._draw_sub_title(pdf, "眼底成像", self.content_font, self.content_size, 620, 'black')
        self._draw_info(pdf, "OD(右眼)", self.content_font, self.info_size, 130, 590, font_color='black')
        self._draw_info(pdf, "OS(左眼)", self.content_font, self.info_size, 400, 590, 'black')
        pdf.drawImage('righteye.png', 70, 400, width=180, height=180)
        pdf.drawImage('lefteye.png', 350, 400, width=180, height=180)
        self._draw_info(pdf,"检查日期："+self.eye_diagnose_date, self.content_font, self.info_size, 400, 380, 'black')
        self._draw_info(pdf,"检查单号："+self.eye_chech_num, self.content_font, self.info_size, 400, 360, 'black')

        #绘制 影像所见
        self._draw_blue_square(pdf, 25, 00, 20)
        self._draw_sub_title(pdf, "影像所见", self.content_font, self.content_size, 300, 'black')
        self._draw_info(pdf, "右眼："+self.righteye_desc, self.content_font, self.info_size, 50, 270, 'black')
        self._draw_info(pdf, "左眼："+self.lefteye_desc, self.content_font, self.info_size, 50, 250, 'black')
            
        #绘制 初步印象
        self._draw_blue_square(pdf, 25, 190, 20)
        self._draw_sub_title(pdf, "初步印象", self.content_font, self.content_size, 190, 'black')
        self._draw_info(pdf, "右眼："+self.righteye_diag, self.content_font, self.info_size, 50, 160, 'black')
        self._draw_info(pdf, "左眼："+self.lefteye_diag, self.content_font, self.info_size, 50, 140, 'black')

        # 新的一页
        pdf.showPage()

        #绘制 综合分析 chart1 radar
        self._draw_blue_square(pdf, 25, 750, 20)
        self._draw_sub_title(pdf, f"AD综合分析（共{self.radar_mmse_score_sum}/30分）", self.content_font, self.content_size, 750, 'black')
            #chart1
        self._draw_table_vertical(pdf, self.chart_data_1, 75, 40, 50, 490)
            #雷达图
        pdf.drawImage('radar_chart.png', 250, 460, width=300, height=280)
        self._draw_info(pdf,"测试日期："+self.ad_diagnose_date, self.content_font, self.info_size, 400, 440, 'black')
        self._draw_info(pdf,"检查单号："+self.ad_chech_num, self.content_font, self.info_size, 400, 420, 'black')

        #绘制 总体结果 chart2
        self._draw_blue_square(pdf, 25, 380, 20)
        self._draw_sub_title(pdf, "AD总体结果", self.content_font, self.content_size, 380, 'black')
            #chart2
        self._draw_table_horizon(pdf, self.chart_data_2, 250, 50, 50, 260)

        #绘制 综合建议
        self._draw_blue_square(pdf, 25, 200, 20)
        self._draw_sub_title(pdf, "综合建议", self.content_font, self.content_size, 200, 'black')
        self._draw_info(pdf, self.sugg_text, self.content_font, self.info_size, 50, 160, 'black')

        #结尾 医生签字 日期
        self._draw_info(pdf,"医生签字：", self.content_font, self.info_size, 430, 80, 'black')
        self._draw_info(pdf,"日期："+self.print_date, self.content_font, self.info_size, 430, 50, 'black')
        
        # 结束绘制
        pdf.save()

        return file_path


# 实例化类
report_generator = ADReportGenerator()
# 生成报告
pdf_file_path = report_generator.generate_report("AD筛查报告.pdf", "/Users/lingziyang/ad_backend/media")