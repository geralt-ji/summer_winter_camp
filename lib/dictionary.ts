export type Locale = 'zh' | 'en';

export const dictionary = {
  zh: {
    header: {
      slogan: "数据科学教育",
      home: "首页",
      pastReviews: "往期回顾",
      summerCamp: "夏令营",
      winterCamp: "冬令营",
      onlineCourses: "线上课程",
      apply: "报名选拔",
      usCamp: "美国夏令营",
      toggle: "English"
    },
    instructors: {
      title: "课程导师阵容",
      description: "我们的导师团队由多位世界名校的教授及业界资深工程师组成，拥有丰富的教学经验和实践背景，致力于为学生提供前沿、优质的教育指导与科研支持。",
      director: {
        title: "CELEHS 主任",
        name: "蔡天西",
        role1: "主任",
        desc1: "学习型医疗系统转化数据科学中心 (CELEHS)",
        role2: "John Rock 讲席教授",
        desc2: "哈佛大学陈曾熙公共卫生学院人口与转化数据科学",
        role3: "教授",
        desc3: "哈佛医学院生物医学信息学"
      },
      collaborators: {
        title: "核心合作导师",
        note: "注：按姓氏字母顺序排列。将鼠标悬停在头像上可查看详情。",
        molei: {
          name: "刘默雷",
          title: "哥伦比亚大学公共卫生学院生物统计学助理教授<br/>哈佛大学陈曾熙公共卫生学院生物统计学博士研究生<br/>电子医疗病例和基因数据"
        },
        doudou: {
          name: "周豆豆",
          title: "新加坡国立大学统计与数据科学系助理教授<br/>美国加州大学戴维斯分校统计学博士<br/>曾在哈佛大学陈曾熙公共卫生学院从事博士后研究工作"
        },
        chuan: {
          name: "洪川",
          title: "杜克大学生物统计与生物信息学助理教授（自2021年8月）<br/>哈佛医学院生物医学信息学博士后研究员、讲师<br/>数据科学、生物统计学与生物医学信息学交叉领域，专注于开发统计与机器学习方法用于精准医疗"
        }
      }
    },
    winterCampPage: {
      title: "冬令营课程介绍",
      description: "本次四天线上课程面向高中生，系统介绍生成式AI的核心原理与前沿应用。课程前半部分深入解析自然语言处理与大语言模型，涵盖从概率基础、词向量到Transformer架构的关键概念，并通过实践活动揭示ChatGPT等工具的工作机制。后半部分聚焦生成式AI在生物医药领域的突破性应用，重点讲解其如何驱动蛋白质设计与药物发现，帮助学生建立跨学科的AI工程思维。课程融合了直观的数学解释与动手演示，旨在培养学生的科学素养与创新视野。"
    }
  },
  en: {
    header: {
      slogan: "Data Science Education",
      home: "Home",
      pastReviews: "Past Reviews",
      summerCamp: "Summer Camp",
      winterCamp: "Winter Camp",
      onlineCourses: "Online Courses",
      apply: "Apply Now",
      usCamp: "US Camp",
      toggle: "中文"
    },
    instructors: {
      title: "Research Team",
      description: "We believe in team science. CELEHS research team is highly interdisciplinary, consisting of researchers from many fields related to biomedical data science. We have collaborators from many institutions including Harvard, MIT, Stanford, Rand Corporation, Veteran Affairs (VA), Partner's Healthcare, and Tsinghua University.",
      director: {
        title: "CELEHS Director",
        name: "Tianxi Cai",
        role1: "Director",
        desc1: "Translational Data Science Center for a Learning Health System (CELEHS)",
        role2: "John Rock Professor",
        desc2: "Population and Translational Data Sciences, Harvard T.H. Chan School of Public Health",
        role3: "Professor",
        desc3: "Biomedical Informatics, Harvard Medical School"
      },
      collaborators: {
        title: "Key Collaborators",
        note: "Note: the names are sorted by last name in alphabetical order. Hover over the avatar to see details.",
        molei: {
          name: "Molei Liu",
          title: "Assistant Professor of Biostatistics, Columbia University Mailman School of Public Health<br/>PhD in Biostatistics, Harvard T.H. Chan School of Public Health<br/>Electronic Health Records and Genomics Data"
        },
        doudou: {
          name: "Doudou Zhou",
          title: "Assistant Professor, Department of Statistics and Data Science, National University of Singapore<br/>PhD in Statistics, University of California, Davis<br/>Former Postdoctoral Research Fellow, Harvard T.H. Chan School of Public Health"
        },
        chuan: {
          name: "Chuan Hong",
          title: "Assistant Professor of Biostatistics and Bioinformatics, Duke University (since Aug 2021)<br/>Instructor in Biomedical Informatics, Harvard Medical School<br/>Intersection of Data Science, Biostatistics, and Biomedical Informatics, focusing on statistical and machine learning methods for precision medicine"
        }
      }
    },
    winterCampPage: {
      title: "Winter Camp Course Introduction",
      description: "This four-day online course introduces high school students to the core principles and cutting-edge applications of generative AI. The first half delves into natural language processing and large language models, covering foundational concepts from probability and word vectors to the Transformer architecture, with hands-on activities demystifying the workings of tools like ChatGPT. The second half focuses on breakthrough applications in biomedicine, explaining how generative AI is powering protein design and drug discovery, helping students develop interdisciplinary AI engineering thinking. The course blends intuitive mathematical explanations with practical demonstrations, aiming to cultivate students' scientific literacy and innovative vision."
    }
  }
};
