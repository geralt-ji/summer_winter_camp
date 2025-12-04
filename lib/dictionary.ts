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
    hero: {
      badge: "冬令营·正在招生",
      heading: "用编程与实践掌握未来",
      headingHighlight: "助力科学梦想起航",
      description: "由国内外顶尖导师指导，专为初高中生设计的AI与编程实践课程。学生通过制作树莓派智能小车，学习Python编程、机器学习和深度学习等前沿技术。",
      viewPrograms: "查看课程项目",
      meetInstructors: "了解导师团队",
      stats: {
        students: "优秀学员",
        instructors: "顶尖导师",
        satisfaction: "满意度"
      }
    },
    features: {
      title: "全面培养未来科技人才",
      subtitle: "从编程技能到工程思维，从硬件实战到国际视野，打造完整的数据科学能力体系",
      items: [
        {
          title: "理论与实践结合",
          description: "从Python基础到机器学习，从理论讲解到树莓派实战，全方位掌握数据科学技能"
        },
        {
          title: "Python编程能力",
          description: "系统学习Python编程，掌握数据处理、可视化和算法实现的核心技能"
        },
        {
          title: "硬件实战项目",
          description: "通过树莓派小车项目学习硬件组装、算法优化、图像识别等前沿技术"
        },
        {
          title: "AI与机器学习",
          description: "深入学习机器学习算法、深度学习框架，培养AI时代的核心竞争力"
        },
        {
          title: "团队协作能力",
          description: "通过小组项目培养团队协作精神，提升沟通能力和项目管理经验"
        },
        {
          title: "国际化展示",
          description: "英文汇报训练和成果展示，培养国际化沟通能力和演讲技巧"
        }
      ]
    },
    programs: {
      title: "选择最适合你的成长路径",
      subtitle: "我们为中学生量身打造全方位的数据科学课程，涵盖线下密集营与线上系统课，匹配不同学习节奏与目标，助你从小接触前沿科技，赢在人工智能时代起跑线。",
      duration: "课程时长：",
      location: "授课方式：",
      capacity: "班级规模：",
      highlights: "课程亮点",
      items: {
        summer: {
          title: "数据科学夏令营",
          season: "暂未开放",
          description: "两周密集式学习体验，专为中学生设计的基础入门课程，从Python编程到机器学习基础，结合树莓派智能小车项目，在动手实践中开启AI第一课。",
          duration: "2周（暑期）",
          location: "线下沉浸式学习",
          capacity: "40–50人/班",
          highlights: [
            "顶尖高校导师亲自指导",
            "树莓派智能车实战项目，学以致用",
            "小组协作完成课题，锻炼团队能力",
            "全英文项目展示，提升学术表达能力"
          ],
          cta: "立即了解夏令营详情"
        },
        winter: {
          title: "数据科学冬令营",
          season: "正在招生",
          description: "冬季课程带领高中生从大语言模型的原理出发，了解AI驱动蛋白质设计的前沿应用，通过直观的数学讲解与动手实践，构建跨学科工程化思维。",
          duration: "4天（寒假）",
          location: "线上集中授课",
          capacity: "30–40人/班",
          highlights: [
            "数学原理与算法直观可视化",
            "前沿AI在蛋白质设计的应用",
            "贯穿全程的动手实验活动",
            "培养计算与生物跨学科视野"
          ],
          cta: "立即了解冬令营详情"
        },
        online: {
          cta: "立即了解线上课程详情"
        }
      }
    },
    testimonials: {
      badge: "学员真实反馈",
      title: "听听学员们怎么说",
      subtitle: "200+学员的真实学习体验，98%的满意度是对我们最大的认可",
      items: [
        {
          content: "夏令营让我对AI有了全新的认识，不仅学到了实用的编程技能，更重要是培养了解决问题的思维方式。",
          author: "张同学",
          role: "2025夏令营学员"
        },
        {
          content: "导师们都很专业，课程安排也很合理，特别是实战项目的经历对我申请大学很有帮助。",
          author: "李同学",
          role: "2025夏令营学员"
        },
        {
          content: "人都超级好！我真的好喜欢好爱，帅哥老师还有美女姐姐老师人都很好相处，很耐心地回答问题！互动式的教学真的很有效很喜欢！",
          author: "王同学",
          role: "2025线上课程学员"
        },
        {
          content: "充实的~能够获得足够的情绪价值的，能学到真正知识的，不搞任何形式主义的，是一个提升自己的好的机会。老师认真辅导，帮助同学理解问题，这次真的很满意！",
          author: "陈同学",
          role: "2025线上课程学员"
        },
        {
          content: "非常好，课程形式特别喜欢，认识了好棒的老师，结交了朋友，依依不舍。",
          author: "刘同学",
          role: "2024夏令营学员"
        },
        {
          content: "老师和助教们都很友善亲切，教学方式让我们很放松，保持很好的学习状态，激发我们的学习兴趣，有点难，但总体很好。",
          author: "赵同学",
          role: "2024夏令营学员"
        }
      ]
    },
    cta: {
      title: "开启你的数据科学之旅",
      description: "无论你想参加夏令营、冬令营，还是线上课程，我们都随时欢迎你的加入。现在就联系我们，获取详细课程信息和报名指导。",
      apply: "立即报名",
      contact: "联系我们",
      email: "课程咨询：请通过邮件联系"
    },
    instructors: {
      title: "课程导师阵容",
      description: "我们的导师团队由多位世界名校的教授及业界资深工程师组成，拥有丰富的教学经验和实践背景，致力于为学生提供前沿、优质的教育指导与科研支持。",
      director: {
        title: "CELEHS 主任",
        name: "蔡天西教授",
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
          name: "刘默雷教授",
          title: "哥伦比亚大学公共卫生学院生物统计学助理教授<br/>哈佛大学陈曾熙公共卫生学院生物统计学博士研究生<br/>电子医疗病例和基因数据"
        },
        doudou: {
          name: "周豆豆博士",
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
      description: "<strong class=\"text-xl block mb-2\">课程导览：开启生成式AI探索之旅</strong>本次四天线上课程面向高中生，系统介绍生成式AI的核心原理与前沿应用。<br/><br/><strong class=\"text-xl block mb-2\">自然语言处理与大语言模型解析</strong>课程前半部分深入解析自然语言处理与大语言模型，涵盖从概率基础、词向量到Transformer架构的关键概念。通过实践活动揭示ChatGPT等工具的工作机制。<br/><br/><strong class=\"text-xl block mb-2\">生成式AI × 生物医药前沿应用</strong>课程后半部分聚焦生成式AI在生物医药领域的突破性应用，重点讲解其如何驱动蛋白质设计与药物发现。<br/><br/><strong class=\"text-xl block mb-2\">培养跨学科AI工程思维</strong>课程融合了直观的数学解释与动手演示，帮助学生建立跨学科的AI工程思维。旨在培养学生的科学素养与创新视野。"
    },
    summerCampPage: {
      title: "夏令营课程介绍",
      description: "<strong class=\"text-xl block mb-2\">课程导览：系统融合数据科学与硬件实战</strong>本次两周夏令营面向高中生，系统融合数据科学理论与自动驾驶硬件实战。<br/><br/><strong class=\"text-xl block mb-2\">数据科学与机器学习核心构建</strong>课程前半部分深入解析数据科学基础，涵盖从数据可视化、统计学习到线性与逻辑回归的关键概念。通过编程实践建立扎实的机器学习理论框架。<br/><br/><strong class=\"text-xl block mb-2\">深度学习 × 自动驾驶实战应用</strong>课程后半部分聚焦深度学习在计算机视觉领域的突破性应用，重点讲解卷积神经网络（CNN）与强化学习如何驱动树莓派小车实现自动驾驶与物体检测。<br/><br/><strong class=\"text-xl block mb-2\">培养软硬结合的AI工程思维</strong>课程融合了严谨的数学原理与趣味硬件项目，帮助学生建立软硬结合的AI工程思维。旨在培养学生的科学素养与解决复杂工程问题的能力。"
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
    hero: {
      badge: "Winter Camp · Enrollment Open",
      heading: "Master the Future with Coding and Practice",
      headingHighlight: "Fuel Your Scientific Dreams",
      description: "Guided by top domestic and international instructors, our AI and programming practice course is designed for middle and high school students. Learn Python programming, machine learning, and deep learning through building Raspberry Pi smart cars.",
      viewPrograms: "View Programs",
      meetInstructors: "Meet Our Instructors",
      stats: {
        students: "Graduates",
        instructors: "Top Instructors",
        satisfaction: "Satisfaction"
      }
    },
    features: {
      title: "Comprehensive Development for Future Tech Talent",
      subtitle: "From programming skills to engineering thinking, from hardware practice to global vision, building a complete data science capability system.",
      items: [
        {
          title: "Theory & Practice",
          description: "Master data science skills from Python basics to machine learning, from theory to Raspberry Pi practice."
        },
        {
          title: "Python Programming",
          description: "Systematically learn Python programming, mastering core skills in data processing, visualization, and algorithm implementation."
        },
        {
          title: "Hardware Projects",
          description: "Learn cutting-edge technologies like hardware assembly, algorithm optimization, and image recognition through Raspberry Pi car projects."
        },
        {
          title: "AI & Machine Learning",
          description: "Deep dive into machine learning algorithms and deep learning frameworks to cultivate core competitiveness in the AI era."
        },
        {
          title: "Team Collaboration",
          description: "Cultivate team spirit through group projects, improving communication skills and project management experience."
        },
        {
          title: "Global Presentation",
          description: "English presentation training and results showcase to cultivate international communication skills and public speaking."
        }
      ]
    },
    programs: {
      title: "Choose the Path That Suits You Best",
      subtitle: "We tailor comprehensive data science courses for middle school students, covering offline intensive camps and online systematic courses, matching different learning rhythms and goals to help you get in touch with cutting-edge technology and win at the starting line of the AI era.",
      duration: "Duration: ",
      location: "Format: ",
      capacity: "Class Size: ",
      highlights: "Highlights",
      items: {
        summer: {
          title: "Data Science Summer Camp",
          season: "Closed",
          description: "A two-week intensive learning experience designed for middle school students as an introductory course. From Python programming to machine learning basics, combined with Raspberry Pi smart car projects, start your first AI lesson with hands-on practice.",
          duration: "2 Weeks (Summer)",
          location: "Offline Immersive Learning",
          capacity: "40–50 Students/Class",
          highlights: [
            "Guided by top university instructors",
            "Raspberry Pi smart car project, learning by doing",
            "Group collaboration on projects, exercising team skills",
            "All-English project presentation, improving academic expression"
          ],
          cta: "Learn More About Summer Camp"
        },
        winter: {
          title: "Data Science Winter Camp",
          season: "Enrollment Open",
          description: "The winter course leads high school students from the principles of large language models to understand the frontier applications of AI in protein design. Through intuitive mathematical explanations and hands-on practice, build interdisciplinary engineering thinking.",
          duration: "4 Days (Winter Break)",
          location: "Online Intensive Course",
          capacity: "30–40 Students/Class",
          highlights: [
            "Intuitive visualization of mathematical principles and algorithms",
            "Frontier applications of AI in protein design",
            "Hands-on experimental activities throughout the course",
            "Cultivate interdisciplinary vision of computation and biology"
          ],
          cta: "Learn More About Winter Camp"
        },
        online: {
          cta: "Learn More About Online Courses"
        }
      }
    },
    testimonials: {
      badge: "Student Reviews",
      title: "Hear From Our Students",
      subtitle: "Real learning experiences from 200+ students, 98% satisfaction is our greatest recognition.",
      items: [
        {
          content: "The summer camp gave me a brand new understanding of AI. I not only learned practical programming skills but, more importantly, developed a problem-solving mindset.",
          author: "Student Zhang",
          role: "2025 Summer Camp"
        },
        {
          content: "The instructors are very professional, and the curriculum is well-organized. The practical project experience was especially helpful for my college application.",
          author: "Student Li",
          role: "2025 Summer Camp"
        },
        {
          content: "Everyone is super nice! I really love it. The teachers are very easy to get along with and answer questions patiently! Interactive teaching is really effective and I love it!",
          author: "Student Wang",
          role: "2025 Online Course"
        },
        {
          content: "Fulfilling~ Able to get enough emotional value, learn real knowledge, no formalism. It is a good opportunity to improve oneself. Teachers tutor seriously and help students understand problems. I am really satisfied this time!",
          author: "Student Chen",
          role: "2025 Online Course"
        },
        {
          content: "Very good, I especially like the course format. I met great teachers and made friends. I am reluctant to leave.",
          author: "Student Liu",
          role: "2024 Summer Camp"
        },
        {
          content: "The teachers and teaching assistants are very friendly and kind. The teaching method relaxes us and keeps us in a good learning state, stimulating our interest in learning. It's a bit difficult, but overall very good.",
          author: "Student Zhao",
          role: "2024 Summer Camp"
        }
      ]
    },
    cta: {
      title: "Start Your Data Science Journey",
      description: "Whether you want to join the summer camp, winter camp, or online courses, we welcome you at any time. Contact us now for detailed course information and enrollment guidance.",
      apply: "Apply Now",
      contact: "Contact Us",
      email: "Course Consultation: Please contact via email"
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
      description: "<strong class=\"text-xl block mb-2\">Course Overview: Embark on a Journey into Generative AI</strong>This four-day online course is designed for high school students, offering a systematic introduction to the core principles and cutting-edge applications of generative AI.<br/><br/><strong class=\"text-xl block mb-2\">Natural Language Processing and Large Language Models Explained</strong>The first half of the course delves into natural language processing and large language models, covering key concepts from probability basics and word vectors to the Transformer architecture. Hands-on activities will reveal how tools like ChatGPT work.<br/><br/><strong class=\"text-xl block mb-2\">Generative AI × Frontier Applications in Biomedicine</strong>The second half of the course focuses on the groundbreaking applications of generative AI in biomedicine, with an emphasis on how it drives protein design and drug discovery.<br/><br/><strong class=\"text-xl block mb-2\">Developing Interdisciplinary AI Engineering Thinking</strong>The course combines intuitive mathematical explanations with practical demonstrations to help students build interdisciplinary AI engineering thinking. It aims to cultivate students' scientific literacy and innovative vision."
    },
    summerCampPage: {
      title: "Summer Camp Course Introduction",
      description: "<strong class=\"text-xl block mb-2\">Course Overview: Data Science Theory & Hardware Practice</strong>This two-week summer camp is designed for high school students, systematically integrating data science theory with hands-on autonomous driving hardware projects.<br/><br/><strong class=\"text-xl block mb-2\">Foundations of Data Science & Machine Learning</strong>The first half of the course delves into the fundamentals of data science, covering key concepts from data visualization and statistical learning to linear and logistic regression. Through programming practice, students build a solid theoretical framework for machine learning.<br/><br/><strong class=\"text-xl block mb-2\">Deep Learning × Autonomous Driving Applications</strong>The second half focuses on breakthrough applications of deep learning in computer vision, highlighting how Convolutional Neural Networks (CNNs) and Reinforcement Learning drive Raspberry Pi cars to achieve autonomous driving and object detection.<br/><br/><strong class=\"text-xl block mb-2\">Cultivating Hardware-Software Integrated AI Engineering Mindset</strong>The course blends rigorous mathematical principles with engaging hardware projects, helping students establish an AI engineering mindset that combines software and hardware. It aims to cultivate students' scientific literacy and ability to solve complex engineering problems."
    }
  }
};
