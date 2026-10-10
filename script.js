const copy = {
  en: {
    skip: 'Skip to content', 'nav.about': 'About', 'nav.work': 'Work', 'nav.contact': 'Contact',
    'hero.eyebrow': 'Researcher · USTC', 'hero.greeting': "Hello, I'm", 'hero.name': 'Ziyang Ling.',
    'hero.description': 'I work on language model reasoning and multi-agent systems, with a focus on applications in biomedicine.',
    'hero.contact': 'Get in touch', 'hero.work': 'Explore my work', 'hero.connect': 'Find me online',
    'about.title': 'About', 'about.statement': "I am a master's student at the University of Science and Technology of China. I study how AI systems can reason across complex evidence and collaborate on scientific and medical tasks.",
    'about.detail': 'My interests include multi-hop question answering, retrieval-augmented generation, knowledge graphs, and biomedical AI.',
    'about.location.label': 'Based in', 'about.location': 'Hefei, China', 'about.education.label': 'Education', 'about.education': 'M.S. · USTC', 'about.focus.label': 'Focus', 'about.focus': 'NLP · Agents · Bio AI',
    'work.title': 'Selected work', 'work.thor': 'A hierarchical reasoning framework for multi-hop question answering that coordinates evidence and checks errors along the way.',
    'work.organoid': 'An interactive workspace for organoid research, combining literature retrieval, data exploration, question answering, and knowledge graphs.',
    'work.prismatic': 'A multi-agent system for reviewing prescriptions and supporting medication safety decisions.',
    'work.paper': 'Paper', 'work.code': 'Code', 'work.project': 'Project', 'work.repository': 'Repository', 'work.more': 'More publications on Google Scholar',
    'contact.title': "Let's connect", 'contact.lead': "Interested in research collaborations or internships? I'd be glad to hear from you.", 'footer.top': 'Back to top ↑'
  },
  zh: {
    skip: '跳转到正文', 'nav.about': '关于', 'nav.work': '研究', 'nav.contact': '联系',
    'hero.eyebrow': '研究者 · 中国科学技术大学', 'hero.greeting': '你好，我是', 'hero.name': '凌子扬。',
    'hero.description': '我研究大语言模型推理与多智能体系统，关注其在生物医学领域的应用。',
    'hero.contact': '联系我', 'hero.work': '查看研究', 'hero.connect': '学术与社交主页',
    'about.title': '关于我', 'about.statement': '我是中国科学技术大学的硕士研究生，关注人工智能如何整合复杂证据进行推理，以及如何协作完成科学与医学任务。',
    'about.detail': '我的研究兴趣包括多跳问答、检索增强生成、知识图谱和生物医学人工智能。',
    'about.location.label': '所在地', 'about.location': '中国 · 合肥', 'about.education.label': '教育', 'about.education': '中国科学技术大学 · 硕士', 'about.focus.label': '研究方向', 'about.focus': '自然语言处理 · 智能体 · 生物医学 AI',
    'work.title': '代表工作', 'work.thor': '面向多跳问答的层次化推理框架，协调跨文档证据，并在推理过程中识别与修正错误。',
    'work.organoid': '面向类器官研究的交互平台，结合文献检索、数据探索、智能问答与知识图谱。',
    'work.prismatic': '用于处方审查与用药安全决策支持的多智能体系统。',
    'work.paper': '论文', 'work.code': '代码', 'work.project': '项目', 'work.repository': '项目仓库', 'work.more': '在 Google Scholar 查看更多论文',
    'contact.title': '保持联系', 'contact.lead': '欢迎就研究合作或实习机会与我交流。', 'footer.top': '返回顶部 ↑'
  }
};

const toggle = document.getElementById('language-toggle');
const description = document.querySelector('meta[name="description"]');

function applyLanguage(language) {
  const current = language === 'zh' ? 'zh' : 'en';
  document.documentElement.lang = current === 'zh' ? 'zh-CN' : 'en';
  document.title = current === 'zh' ? '凌子扬 · 个人主页' : 'Ziyang Ling · Researcher';
  description.content = current === 'zh'
    ? '凌子扬的个人主页。中国科学技术大学硕士研究生，研究大语言模型推理、多智能体系统和生物医学人工智能。'
    : "Ziyang Ling is a master's student at USTC researching language model reasoning, multi-agent systems, and biomedical AI.";
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const translation = copy[current][element.dataset.i18n];
    if (translation) element.textContent = translation;
  });
  toggle.innerHTML = current === 'zh' ? 'EN <span aria-hidden="true">↗</span>' : '中文 <span aria-hidden="true">↗</span>';
  toggle.setAttribute('aria-label', current === 'zh' ? 'Switch to English' : '切换到中文');
  try { localStorage.setItem('preferred-language', current); } catch (_) { /* Storage may be unavailable. */ }
}

toggle.addEventListener('click', () => applyLanguage(document.documentElement.lang.startsWith('zh') ? 'en' : 'zh'));
document.getElementById('year').textContent = new Date().getFullYear();
let savedLanguage;
try { savedLanguage = localStorage.getItem('preferred-language'); } catch (_) { /* Storage may be unavailable. */ }
applyLanguage(savedLanguage || (navigator.language?.startsWith('zh') ? 'zh' : 'en'));
