const translations = {
  en: {
    "nav.about": "About",
    "nav.publications": "Publications",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.kicker": "M.S. Student · University of Science and Technology of China",
    "hero.title": "Natural language processing, reasoning systems, and biomedical AI.",
    "hero.lead": "I study large language model reasoning, multi-agent systems, knowledge-enhanced AI, and their applications in medicine and scientific discovery.",
    "links.cv": "CV",
    "links.email": "Email",
    "about.title": "About",
    "about.p1": "I am a master's student in computer science at the University of Science and Technology of China. My research focuses on reliable reasoning over complex evidence, collaboration among specialized AI agents, and knowledge-intensive biomedical applications.",
    "about.p2": "My current interests include multi-hop question answering, retrieval-augmented generation, knowledge graphs, clinical decision support, and autonomous biological experimentation.",
    "tag.nlp": "Natural Language Processing",
    "tag.reasoning": "LLM Reasoning",
    "tag.agents": "Multi-Agent Systems",
    "tag.rag": "Retrieval-Augmented Generation",
    "tag.biomedical": "Biomedical AI",
    "publications.title": "Publications",
    "status.accepted": "Accepted",
    "status.review": "Under Review",
    "status.published": "Published",
    "pub.thor.meta": "ACL 2026 Main Conference · First Author",
    "pub.prismatic.meta": "EMNLP 2026 · First Author",
    "pub.biomedreason.meta": "EMNLP 2026 · First Author",
    "pub.biomars.meta": "Nature 2026",
    "projects.title": "Projects",
    "project.organoid": "Interactive organoid data exploration, literature retrieval, analysis, question answering, and knowledge graph integration.",
    "project.prismatic": "A multi-agent prescription review and clinical decision-support system for medication safety.",
    "project.theta": "A hierarchical oscillatory reasoning implementation for evidence coordination in multi-hop QA.",
    "project.ad.name": "AD Screening System",
    "project.ad": "An AI-assisted Alzheimer's disease screening platform developed with the First Affiliated Hospital of USTC.",
    "project.subhealth": "A multi-agent system for subhealth simulation and collaborative decision-making.",
    "education.title": "Education",
    "education.ustc": "University of Science and Technology of China",
    "education.ustc.degree": "M.S. Student · Computer Science · Hefei, China",
    "education.ccnu": "Central China Normal University",
    "education.ccnu.degree": "Bachelor's Degree · Wuhan, China",
    "contact.title": "Contact",
    "contact.text": "I am open to research internships and collaborations in NLP, agentic AI, biomedical AI, and large language model reasoning.",
    "footer.top": "Back to top ↑"
  },
  zh: {
    "nav.about": "关于我",
    "nav.publications": "论文",
    "nav.projects": "项目",
    "nav.contact": "联系",
    "hero.kicker": "中国科学技术大学 · 计算机科学硕士研究生",
    "hero.title": "自然语言处理、推理系统与生物医学人工智能。",
    "hero.lead": "我的研究聚焦于大语言模型推理、多智能体系统、知识增强人工智能，以及这些技术在医学与科学发现中的应用。",
    "links.cv": "英文简历",
    "links.email": "邮箱",
    "about.title": "关于我",
    "about.p1": "我是中国科学技术大学计算机科学专业硕士研究生。我的研究关注复杂证据上的可靠推理、专门化智能体之间的协作，以及知识密集型生物医学应用。",
    "about.p2": "目前主要研究兴趣包括多跳问答、检索增强生成、知识图谱、临床决策支持和自主生物实验。",
    "tag.nlp": "自然语言处理",
    "tag.reasoning": "大语言模型推理",
    "tag.agents": "多智能体系统",
    "tag.rag": "检索增强生成",
    "tag.biomedical": "生物医学人工智能",
    "publications.title": "论文",
    "status.accepted": "已接收",
    "status.review": "审稿中",
    "status.published": "已发表",
    "pub.thor.meta": "ACL 2026 主会 · 第一作者",
    "pub.prismatic.meta": "EMNLP 2026 · 第一作者",
    "pub.biomedreason.meta": "EMNLP 2026 · 第一作者",
    "pub.biomars.meta": "Nature 2026",
    "projects.title": "项目",
    "project.organoid": "面向类器官研究的交互式数据探索、文献检索、分析、智能问答与知识图谱集成平台。",
    "project.prismatic": "面向用药安全的多智能体处方审查与临床决策支持系统。",
    "project.theta": "用于多跳问答证据协调的层次化振荡推理实现。",
    "project.ad.name": "阿尔茨海默病筛查系统",
    "project.ad": "与中国科学技术大学附属第一医院合作开发的人工智能辅助阿尔茨海默病筛查平台。",
    "project.subhealth": "用于亚健康模拟与协同决策的多智能体系统。",
    "education.title": "教育经历",
    "education.ustc": "中国科学技术大学",
    "education.ustc.degree": "计算机科学硕士研究生 · 中国合肥",
    "education.ccnu": "华中师范大学",
    "education.ccnu.degree": "学士 · 中国武汉",
    "contact.title": "联系",
    "contact.text": "欢迎围绕自然语言处理、智能体人工智能、生物医学人工智能和大语言模型推理开展研究实习与学术合作。",
    "footer.top": "返回顶部 ↑"
  }
};

const button = document.getElementById("language-toggle");
const metaDescription = document.querySelector('meta[name="description"]');

function setLanguage(language) {
  const dictionary = translations[language];

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = language === "zh" ? "凌子扬 | 个人学术主页" : "Ziyang Ling";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  if (language === "zh") {
    button.textContent = "EN";
    button.setAttribute("aria-label", "Switch to English");
    metaDescription.content = "凌子扬的个人学术主页，研究方向包括自然语言处理、大语言模型推理、多智能体系统和生物医学人工智能。";
  } else {
    button.textContent = "中文";
    button.setAttribute("aria-label", "切换到中文");
    metaDescription.content = "Academic homepage of Ziyang Ling, an M.S. student at USTC working on NLP, LLM reasoning, multi-agent systems, and biomedical AI.";
  }

  localStorage.setItem("preferred-language", language);
}

button.addEventListener("click", () => {
  const nextLanguage = document.documentElement.lang.startsWith("zh") ? "en" : "zh";
  setLanguage(nextLanguage);
});

document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(localStorage.getItem("preferred-language") || "en");
