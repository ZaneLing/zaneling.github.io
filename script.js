const translations = {
  zh: {
    skip: '跳转到正文',
    'nav.about': '关于', 'nav.news': '动态', 'nav.research': '论文', 'nav.projects': '项目', 'nav.education': '教育', 'nav.experience': '经历', 'nav.contact': '联系',
    'about.p1': '你好！我是<a href="https://www.ustc.edu.cn/" target="_blank" rel="noopener noreferrer">中国科学技术大学</a>计算机科学专业的硕士研究生。我的研究聚焦于大语言模型推理与多智能体系统，尤其关注生物医学和临床场景中的应用。',
    'about.p2': '我关注智能体如何检索证据、协调专门化角色，并做出更可靠的决策。目前我在字节跳动实习。',
    'about.phd': '我正在寻找北美地区医学人工智能、临床自然语言处理和医疗健康人工智能方向的博士研究机会。',
    'portrait.caption': '凌子扬 / Ziyang Ling',
    'news.title': '最新动态', 'news.date1': '2026年10月', 'news.date2': '2026年8月', 'news.date3': '2026年7月',
    'news.item1': '<strong>PRISMATIC</strong> 预印本已发布于 <a href="https://zenodo.org/records/23281340" target="_blank" rel="noopener noreferrer">Zenodo</a>。',
    'news.item2': '开始在<strong>字节跳动</strong>实习。',
    'news.item3': '<strong>THOR</strong> 论文发表于 <strong>ACL 2026</strong>。',
    'research.title': '代表论文', 'research.more': '全部论文', 'research.note': '精选论文与预印本',
    'research.thor.venue': '计算语言学协会年会（ACL）2026',
    'research.thor.description': '受脑节律启发的多跳问答框架，将全局规划与局部证据检索分离，并通过验证与修复提升推理可靠性。',
    'research.prismatic.venue': '预印本 · Zenodo',
    'research.prismatic.description': '由专门化智能体协作分析临床信息、完善处方，并通过反馈机制减少药物冲突、提高治疗方案一致性。',
    'research.hindsight.venue': '预印本 · arXiv，2026',
    'research.hindsight.description': '分析大语言模型在动态临床诊断中为何遗漏关键证据，追踪从证据识别到诊断更新的能力缺口。',
    'research.bioprm.venue': '预印本 · arXiv，2026',
    'research.bioprm.description': '通过上下文过程奖励模型逐步核查生物实验方案，识别操作与实验目标或前后步骤不一致之处。',
    'research.bionel.venue': '已录用 · IEEE Xplore，2026',
    'research.bionel.description': '无需训练的生物医学实体链接方法：先检索候选概念，再由大语言模型结合上下文选择匹配项。',
    'link.paper': '论文 ↗', 'link.preprint': '预印本 ↗', 'link.code': '代码 ↗', 'link.github': 'GitHub ↗',
    'projects.title': '项目',
    'projects.brick': '用于浏览 LDraw 模型、查看单个积木零件和跟随动画拼搭说明的桌面工作台。',
    'projects.organoid': '面向类器官研究的数据探索、文献检索、智能问答与知识图谱平台，采用 Vue 和 Django 构建。',
    'education.title': '教育经历', 'education.ustc.name': '中国科学技术大学', 'education.ustc.degree': '计算机科学 · 硕士', 'education.ustc.date': '2024年9月－至今',
    'education.ccnu.name': '华中师范大学', 'education.ccnu.degree': '学士', 'education.ccnu.date': '2015年9月－2019年6月',
    'experience.title': '工作经历', 'experience.bytedance.name': '字节跳动', 'experience.bytedance.role': '实习生', 'experience.bytedance.date': '2026年8月－至今',
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
  document.querySelector('.profile-portrait img').alt = current === 'zh' ? '凌子扬在水边的照片' : 'Portrait of Ziyang Ling standing beside the water';
  document.querySelectorAll('.paper-figure').forEach((button) => {
    const subject = button.dataset.caption.split(' ')[0];
    button.setAttribute('aria-label', current === 'zh' ? `放大${subject}研究图` : `Enlarge ${button.dataset.caption} figure`);
  });
  document.querySelector('.dialog-close').setAttribute('aria-label', current === 'zh' ? '关闭图片' : 'Close figure');
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
