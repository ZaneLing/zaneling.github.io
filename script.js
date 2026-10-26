const translations = {
  zh: {
    skip: '跳转到正文',
    'nav.about': '关于', 'nav.news': '动态', 'nav.ongoing': '在研', 'nav.research': '论文', 'nav.projects': '项目', 'nav.education': '教育', 'nav.experience': '经历', 'nav.awards': '荣誉', 'nav.beyond': '学术之外', 'nav.contact': '联系',
    'about.p1': '你好！我是<a href="https://www.ustc.edu.cn/" target="_blank" rel="noopener noreferrer">中国科学技术大学</a>计算机科学专业的硕士研究生。我的研究聚焦于大语言模型推理与多智能体系统，尤其关注生物医学和临床场景中的应用。',
    'about.p2': '我关注智能体如何检索证据、协调专门化角色，并做出更可靠的决策。目前我在字节跳动实习。',
    'about.phd': '我正在寻找北美地区医学人工智能、临床自然语言处理和医疗健康人工智能方向的博士研究机会。',
    'portrait.caption': '凌子扬 / Ziyang Ling',
    'news.title': '最新动态', 'news.date1': '2026年10月', 'news.date2': '2026年8月', 'news.date3': '2026年7月',
    'news.item1': '<strong>PRISMATIC</strong> 预印本已发布于 <a href="https://zenodo.org/records/23281340" target="_blank" rel="noopener noreferrer">Zenodo</a>。',
    'news.item2': '开始在<strong>字节跳动</strong>实习。',
    'news.item3': '<strong>THOR</strong> 论文发表于 <strong>ACL 2026</strong>。',
    'ongoing.title': '正在进行的研究',
    'ongoing.mediator': '混合动机的多学科诊疗模拟：专科智能体持有相互冲突的私人目标，在患者安全约束下协商，研究策略性讨论如何影响临床共识。',
    'ongoing.rxrsi': '面向处方开具与优化的自进化医疗智能体。',
    'ongoing.evohos': '贴近真实医院流程的基准与竞技场，用于研究医疗智能体如何在临床环境中持续进化。',
    'research.title': '代表论文', 'research.more': '全部论文', 'research.note': '精选论文与预印本',
    'research.thor.venue': '计算语言学协会年会（ACL）2026',
    'research.thor.description': '受脑节律启发的多跳问答框架，将全局规划与局部证据检索分离，并通过验证与修复提升推理可靠性。',
    'research.prismatic.venue': '预印本 · Zenodo',
    'research.prismatic.description': '由专门化智能体协作分析临床信息、完善处方，并通过反馈机制减少药物冲突、提高治疗方案一致性。',
    'research.hindsight.venue': '预印本 · arXiv，2026',
    'research.hindsight.description': '分析大语言模型在动态临床诊断中为何遗漏关键证据，追踪从证据识别到诊断更新的能力缺口。',
    'research.resemreason.venue': '预印本 · arXiv，2026',
    'research.resemreason.description': 'ReSemReason 根据问题中的关系语义检索生物医学答案及有效证据路径，避免只凭知识图谱中的可达性判断答案。',
    'research.bioprm.venue': '预印本 · arXiv，2026',
    'research.bioprm.description': '通过上下文过程奖励模型逐步核查生物实验方案，识别操作与实验目标或前后步骤不一致之处。',
    'research.fgss.venue': '预印本 · arXiv，2026',
    'research.fgss.description': 'FGSS-BO 将搜索假设与证据、测试结果相连，帮助大语言模型引导的贝叶斯优化方法在多轮搜索中修正决策。',
    'research.biomars.venue': '预印本 · arXiv，2025 · Nature 审稿中',
    'research.biomars.description': 'BioMARS 通过多智能体协作完成生物实验的规划、机器人执行与质控；我负责其中的多智能体部分。',
    'research.bionel.venue': '第六届智能计算与人机交互国际会议（ICHCI 2025），第 304–308 页',
    'research.bionel.description': '无需训练的生物医学实体链接方法：先检索候选概念，再由大语言模型结合上下文选择匹配项。',
    'research.ramp.venue': '已投稿 PNAS · 2026',
    'research.ramp.description': 'RAMP 通过人类与多智能体协作，将研究需求转化为视网膜类器官形态发生的生物物理模型；我参与了其中部分智能体模块的工作。',
    'link.paper': '论文 ↗', 'link.preprint': '预印本 ↗', 'link.code': '代码 ↗', 'link.github': 'GitHub ↗', 'link.project-site': '项目官网 ↗',
    'projects.title': '项目',
    'projects.alzheimer.title': '基于眼底图像的阿尔茨海默病早期筛查',
    'projects.alzheimer.meta': '2023–2024 · 中国科学技术大学附属第一医院、Orbis 公司',
    'projects.alzheimer.description': '开发基于眼底图像的早期筛查研究平台，参与相关研究与全栈实现。',
    'projects.segmentation.title': '小鼠视网膜类器官图像分割',
    'projects.segmentation.meta': '2025–2026 · 中国科学技术大学',
    'projects.segmentation.description': '开发基于 Segment Anything Model（SAM）的应用，用于分割小鼠视网膜类器官图像并支持后续分析。',
    'projects.organoid.meta': '2025–2026 · 中国科学技术大学',
    'projects.organoid': '为类器官研究实验室开发问答平台，面向生物医学学生提供检索、搜索与数据库关联工具。',
    'projects.data.title': '生物医学数据交互平台',
    'projects.data.meta': '2025–2026 · 中国科学技术大学',
    'projects.data.description': '构建交互式平台，帮助不同研究团队探索类器官实验、实验方案与相关数据。',
    'education.title': '教育经历', 'education.ustc.name': '中国科学技术大学', 'education.ustc.degree': '计算机科学 · 硕士', 'education.ustc.date': '2024年9月－至今',
    'education.ccnu.name': '华中师范大学', 'education.ccnu.degree': '学士', 'education.ccnu.date': '2015年9月－2019年6月',
    'experience.title': '工作经历', 'experience.bytedance.name': '字节跳动', 'experience.bytedance.role': '实习生', 'experience.bytedance.date': '2026年8月－至今',
    'experience.midea.name': '美的集团', 'experience.midea.role': '研究实习生', 'experience.midea.date': '2021–2023年',
    'awards.title': '荣誉奖励', 'awards.scholarship': '一等学业奖学金', 'awards.ustc': '中国科学技术大学',
    'beyond.title': '学术之外', 'beyond.note': '旅途与日常的一些瞬间。',
    'beyond.yuanmingyuan': '圆明园', 'beyond.lotus': '圆明园的荷叶', 'beyond.cat': '寺猫', 'beyond.suzhou': '苏州园林',
    'beyond.summer': '颐和园', 'beyond.rainier': '雷尼尔山', 'beyond.seattle': '西雅图海滨', 'beyond.ruby': '红宝石海滩',
    'beyond.credit': '摄影：凌子扬', 'beyond.more': '在 Flickr 查看更多 ↗',
    'contact.title': '联系', 'contact.text': '我正在寻找北美地区医学人工智能、临床自然语言处理和医疗健康人工智能方向的博士研究机会。'
  }
};

const translatable = [...document.querySelectorAll('[data-i18n], [data-i18n-html]')];
const originalCopy = new Map(translatable.map((element) => [element, element.hasAttribute('data-i18n-html') ? element.innerHTML : element.textContent]));
const toggle = document.getElementById('language-toggle');
const detail = document.getElementById('other-language');
const detailLabel = document.getElementById('other-language-label');
const detailContent = document.getElementById('other-language-content');
const englishIntro = "I am a master's student in Computer Science at the University of Science and Technology of China. I study language model reasoning, multi-agent systems, and their biomedical applications. I am currently an intern at ByteDance and am seeking PhD opportunities in North America in medical AI, clinical NLP, and AI for healthcare.";
const chineseIntro = '我是中国科学技术大学计算机科学专业的硕士研究生，研究大语言模型推理、多智能体系统及其在生物医学和临床场景中的应用。目前我在字节跳动实习，并正在寻找北美地区医学人工智能、临床自然语言处理和医疗健康人工智能方向的博士研究机会。';

function setLanguage(language) {
  const current = language === 'zh' ? 'zh' : 'en';
  for (const element of translatable) {
    const key = element.dataset.i18n || element.dataset.i18nHtml;
    const value = current === 'zh' ? translations.zh[key] : originalCopy.get(element);
    if (value === undefined) continue;
    if (element.hasAttribute('data-i18n-html')) element.innerHTML = value;
    else element.textContent = value;
  }
  document.documentElement.lang = current === 'zh' ? 'zh-CN' : 'en';
  document.title = current === 'zh' ? '凌子扬 | Ziyang Ling' : 'Ziyang Ling | 凌子扬';
  document.querySelector('meta[name="description"]').content = current === 'zh'
    ? '凌子扬的个人主页。中国科学技术大学硕士研究生，正在寻找北美地区医学人工智能、临床自然语言处理和医疗健康人工智能方向的博士研究机会。'
    : "Ziyang Ling is a master's student at USTC seeking PhD opportunities in North America in medical AI, clinical NLP, and AI for healthcare.";
  toggle.textContent = current === 'zh' ? 'English' : '中文';
  toggle.setAttribute('aria-label', current === 'zh' ? 'Switch to English' : '切换到中文');
  detail.open = false;
  detailLabel.textContent = current === 'zh' ? 'English introduction' : '中文简介';
  detailContent.textContent = current === 'zh' ? englishIntro : chineseIntro;
  document.getElementById('quote-translation').hidden = current !== 'zh';
  document.querySelector('.profile-portrait img').alt = current === 'zh' ? '凌子扬在水边的照片' : 'Portrait of Ziyang Ling standing beside the water';
  document.querySelectorAll('.paper-figure').forEach((button) => {
    const subject = button.dataset.caption.split(' ')[0];
    button.setAttribute('aria-label', current === 'zh' ? `放大${subject}研究图` : `Enlarge ${button.dataset.caption} figure`);
  });
  document.querySelector('.dialog-close').setAttribute('aria-label', current === 'zh' ? '关闭图片' : 'Close figure');
  document.getElementById('photo-gallery').setAttribute('aria-label', current === 'zh' ? '凌子扬的摄影作品' : 'Photos by Ziyang Ling');
  document.querySelector('.gallery-controls').setAttribute('aria-label', current === 'zh' ? '照片滚动控制' : 'Photo gallery controls');
  document.querySelector('.gallery-arrow[data-direction="-1"]').setAttribute('aria-label', current === 'zh' ? '向左滚动照片' : 'Scroll photos left');
  document.querySelector('.gallery-arrow[data-direction="1"]').setAttribute('aria-label', current === 'zh' ? '向右滚动照片' : 'Scroll photos right');
  try { localStorage.setItem('preferred-language', current); } catch (_) { /* Continue without storage. */ }
}

toggle.addEventListener('click', () => setLanguage(document.documentElement.lang.startsWith('zh') ? 'en' : 'zh'));
document.getElementById('year').textContent = new Date().getFullYear();
let savedLanguage;
try { savedLanguage = localStorage.getItem('preferred-language'); } catch (_) { /* Continue without storage. */ }
setLanguage(savedLanguage || (navigator.language?.startsWith('zh') ? 'zh' : 'en'));

const sections = [...document.querySelectorAll('main > section[id]')];
const navLinks = [...document.querySelectorAll('.nav-link')];
let updatePending = false;
function updateActiveSection() {
  const position = window.scrollY + Math.min(window.innerHeight * 0.38, 280);
  let active = sections[0].id;
  for (const section of sections) if (section.offsetTop <= position) active = section.id;
  navLinks.forEach((link) => {
    const selected = link.getAttribute('href') === `#${active}`;
    link.classList.toggle('is-active', selected);
    if (selected) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  updatePending = false;
}
window.addEventListener('scroll', () => {
  if (!updatePending) { updatePending = true; requestAnimationFrame(updateActiveSection); }
}, {passive:true});
window.addEventListener('resize', updateActiveSection);
updateActiveSection();

const photoGallery = document.getElementById('photo-gallery');
const galleryArrows = [...document.querySelectorAll('.gallery-arrow')];
function updateGalleryArrows() {
  const maxScroll = photoGallery.scrollWidth - photoGallery.clientWidth;
  galleryArrows[0].disabled = photoGallery.scrollLeft <= 1;
  galleryArrows[1].disabled = maxScroll <= 1 || photoGallery.scrollLeft >= maxScroll - 1;
}
galleryArrows.forEach((button) => button.addEventListener('click', () => {
  const distance = Math.max(photoGallery.clientWidth * 0.75, 260);
  photoGallery.scrollBy({left: Number(button.dataset.direction) * distance, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
}));
photoGallery.addEventListener('scroll', updateGalleryArrows, {passive:true});
window.addEventListener('resize', updateGalleryArrows);
window.addEventListener('load', updateGalleryArrows);
requestAnimationFrame(updateGalleryArrows);

const figureDialog = document.getElementById('figure-dialog');
const dialogImage = document.getElementById('dialog-image');
const dialogCaption = document.getElementById('dialog-caption');
document.querySelectorAll('.paper-figure').forEach((button) => button.addEventListener('click', () => {
  dialogImage.src = button.dataset.figure;
  dialogImage.alt = button.dataset.caption;
  dialogCaption.textContent = button.dataset.caption;
  figureDialog.showModal();
}));
figureDialog.querySelector('.dialog-close').addEventListener('click', () => figureDialog.close());
figureDialog.addEventListener('click', (event) => { if (event.target === figureDialog) figureDialog.close(); });
