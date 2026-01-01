export const personalInfo = {
  name: "Leander M. Maben",
  email: "lmaben@andrew.cmu.edu",
  phone: "(412) 844-1338",
  linkedin: "https://www.linkedin.com/in/leander-maben",
  github: "https://www.github.com/leandermaben",
  scholar: "https://scholar.google.com/citations?hl=en&user=WgU_s9gAAAAJ",
  tagline: "ML Researcher & Full Stack Engineer",
  bio: "MS in Machine Learning and NLP at Carnegie Mellon University, focusing on LLM Post-Training, Agentic Systems, and Long-Context Reasoning. Passionate about building intelligent systems that solve real-world problems.",
  focus: [
    "LLM Post-Training (SFT / RL)",
    "Agentic Systems and Evaluation",
    "Long-Context Reasoning",
    "Full Stack Development"
  ]
};

export const education = [
  {
    institution: "Carnegie Mellon University",
    school: "School of Computer Science, Language Technologies Institute",
    degree: "M.S. in Machine Learning and Natural Language Processing",
    location: "Pittsburgh, PA",
    endDate: "May 2026",
    gpa: "4.24 / 4.33",
    coursework: [
      "Advanced Natural Language Processing",
      "Inference Algorithms for LLMs",
      "Multimodal Machine Learning"
    ]
  },
  {
    institution: "Manipal Institute of Technology",
    degree: "B.Tech in Computer Science and Engineering",
    location: "Manipal, India",
    endDate: "Jul 2022",
    rank: "3rd out of 244",
    gpa: "9.75 / 10"
  }
];

export const featuredPublications = [
  {
    title: "TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks",
    authors: "Prof. Graham Neubig",
    venue: "NeurIPS 2025",
    stars: "580+",
    citations: "100+",
    description: "Benchmarked LLM agents on real-world tasks using production-like services (chat apps, cloud storage, GitLab, SDLC tools, LLM-powered coworkers). Deployed each task in Dockerized environments for full reproducibility. Demonstrated that even state-of-the-art agents solve only ~33% of real-world tasks.",
    highlights: [
      "580+ GitHub stars and 100+ paper citations",
      "Production-like service integration",
      "Dockerized task environments",
      "33% SOTA agent success rate"
    ],
    link: "https://github.com/TheAgentCompany/TheAgentCompany"
  },
  {
    title: "AURA: Voice Agent for Understanding, Reasoning, and Automated Tool Use",
    authors: "Prof. Shinji Watanabe",
    venue: "ASRU 2025",
    award: "Shortlisted for top-3 best demo papers",
    description: "Built the first open-source, speech-native conversational assistant supporting full speech-to-speech, multi-turn dialogue with dynamic tool use. Supported tasks including calendar booking, web search, and email.",
    highlights: [
      "92.75% on VoiceBench-OpenBookQA (near GPT-4o at 92.97%)",
      "90% task success on multi-turn speech tasks",
      "First open-source speech-native assistant",
      "Shortlisted for top-3 best demo papers"
    ]
  },
  {
    title: "Device and Method for Detecting Cervical Cancer Abnormality",
    authors: "Indian Patent Office",
    venue: "Patent",
    status: "Deployed for field testing at Kasturba Hospital, Manipal",
    description: "Built an on-device lightweight CNN using a modified MobileNetV2 architecture with interpretability via Grad-CAM visualizations.",
    highlights: [
      "92.31% accuracy and 98.24% sensitivity",
      "On-device lightweight CNN",
      "Modified MobileNetV2 architecture",
      "Grad-CAM interpretability"
    ]
  },
  {
    title: "OpenHands — LLM-Based Code Editor",
    authors: "Prof. Graham Neubig",
    stars: "64k",
    description: "Developed an efficient LLM-based code editing tool for the CodeAct agent. Fine-tuned code editing LLMs via distributed multi-GPU training and multi-step synthetic data generation.",
    highlights: [
      "64k GitHub stars",
      "8.3% improvement on SWE-Bench Lite",
      "Distributed multi-GPU training",
      "Synthetic data generation"
    ],
    link: "https://github.com/All-Hands-AI/OpenHands"
  }
];

export const additionalPublications = [
  "Study of Generative Adversarial Networks for Noisy Speech Simulation from Clean Speech — APSIPA 2023",
  "Protecting Your Online Persona: A Preferential Selective Encryption Approach — IEEE Access",
  "Dynamic Twitter Friend Grouping Based on Similarity, Interaction, and Trust — IET Communications"
];

export const workExperience = [
  {
    company: "Deutsche Bank",
    position: "Software Development Engineer (Senior Analyst)",
    location: "Pune, India",
    startDate: "Jul 2022",
    endDate: "May 2024",
    description: [
      "Engineered trade pre-clearance and approval workflows in a microservices-based compliance platform",
      "Tech stack: Spring Boot, Angular, SQL, automated testing, Agile workflows",
      "Authored production data-fix and migration scripts to remediate incidents and maintain data integrity",
      "Improved test reliability by building mock servers to decouple unstable third-party systems",
      "Promoted from Graduate Analyst to Senior Analyst in 15 months"
    ]
  },
  {
    company: "Deutsche Bank",
    position: "Technology, Data and Innovation Intern",
    location: "(Remote) Pune, India",
    startDate: "May 2021",
    endDate: "Jul 2021",
    description: [
      "Designed a multi-layer bi-directional LSTM time-series model in TensorFlow to predict cash flows",
      "Built a MERN-stack web application on GCP to serve models and generate shareable analysis reports"
    ]
  }
];

export const researchExperience = [
  {
    institution: "Carnegie Mellon University — Zanette Lab",
    position: "Research Intern",
    location: "Pittsburgh, PA",
    startDate: "May 2025",
    endDate: "Aug 2025",
    description: [
      "Built a framework for reasoning LLMs over extremely long contexts via compression of reasoning traces",
      "Used selective deletion and replacement with sufficient statistics to reduce memory and compute costs",
      "Implemented synthetic data generation, supervised fine-tuning (adapted LLaMA-Factory), rejection sampling, and reinforcement learning",
      "Implemented multi-turn agent trajectory GRPO in VeRL"
    ]
  },
  {
    institution: "Nanyang Technological University — Speech Lab",
    position: "Research Intern",
    location: "(Remote) Singapore",
    startDate: "Jan 2022",
    endDate: "Jun 2022",
    description: [
      "Improved adaptive speech enhancement by 39% (PESQ) using GAN-based noise simulation",
      "Applied GAN augmentation for robust downstream speech and audio modeling tasks"
    ]
  }
];

export const skills = {
  "Programming Languages": [
    "Python",
    "Java",
    "C",
    "C++",
    "JavaScript"
  ],
  "ML & AI": [
    "PyTorch",
    "TensorFlow",
    "VeRL",
    "HuggingFace",
    "torchtune",
    "LLaMA-Factory",
    "Large Language Models",
    "Multimodal ML",
    "LLM Agents",
    "GANs"
  ],
  "Full Stack Development": [
    "Spring Boot",
    "ReactJS",
    "ExpressJS",
    "NodeJS",
    "Angular",
    "SQL",
    "NoSQL",
    "MongoDB"
  ],
  "Tools & Infrastructure": [
    "Docker",
    "Git",
    "GCP",
    "Linux",
    "Bash/Shell",
    "NumPy",
    "IntelliJ",
    "JIRA",
    "Scrum/Agile"
  ]
};
