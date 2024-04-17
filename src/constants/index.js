import {
  aiml,
  signal,
  iot,
  embedded,
  cn,
  viceChair,
  secr,
  cosec,
  designhead,
  editorialhead,
  financehead,
  projecthead,
  publicityhead,
  technicalhead,
  chairperson,
  facultycoord,
  i,
  i10,
  i11,
  i3,
  i5,
  i6,
  i4,
  i7,
  i9,
} from "../assets";

export const navLinks = [
];const services = [];const technologies = [];

const experiences = [
  {
    title: "Signal Processing",
    icon: signal,
    iconBg: "#383E56",
    points: [
      "Signal processing involves analysis, manipulation, and synthesis of signals using digital techniques.",
      "Digital Signal Processing (DSP) finds applications in audio, image processing, and communication systems.",
      "Statistical Signal Processing uses estimation and analysis with statistical models for signal processing.",
      "Machine Learning techniques are applied for signal processing, including deep learning and neural networks.",
    ],
  },
  {
    title: "Internet of Things",
    icon: iot,
    iconBg: "#E6DEDD",
    points: [
      "IoT enables interconnected devices for seamless data exchange and automation in various applications.",
      "It merges hardware, software, and connectivity to enhance efficiency, productivity, and decision-making processes.",
      "IoT facilitates smart environments through sensors and actuators for real-time monitoring and control systems.",
      "It addresses challenges like security, privacy, and scalability in a networked ecosystem of smart devices.",
    ],
  },
  {
    title: "Embeded Systems",
    icon: embedded,
    iconBg: "#383E56",
    points: [
      "Embedded Systems enable real-time computing for devices like IoT sensors and automotive electronics.",
      "They optimize performance by integrating hardware and software for specific tasks.",
      "Embedded Systems ensure reliability and efficiency in medical devices and industrial automation.",
      "They support diverse applications including consumer electronics and smart home technology.",
    ],
  },
  {
    title: "AI/ML",
    icon: aiml,
    iconBg: "#383E56",
    points: [
      "AI/ML enhances decision-making through data analysis and pattern recognition.",
      "Automation powered by AI/ML optimizes processes for efficiency and productivity gains.",
      "AI/ML drives innovation in healthcare, finance, and smart technologies.",
      "Deep learning algorithms in AI/ML enable advanced image and speech recognition applications.",
    ],
  },
  {
    title: "Communication Networks",
    icon: cn,
    iconBg: "white",
    points: [
      "Communication Networks facilitate global connectivity through data transmission and exchange across diverse platforms.",
      "They enable seamless voice, video, and data communication, supporting real-time interactions worldwide.",
      "Communication Networks employ advanced protocols like TCP/IP to ensure efficient and secure data delivery.",
      "Emerging technologies like 5G and IoT are revolutionizing Communication Networks, enhancing speed, capacity, and connectivity.",
    ],
  },
];

const testimonials = [
  {
    image: i,
  },
  {
    image: i10,
  },
  {
    image: i11,
  },
  {
    image: i4,
  },
  {
    image: i9,
  },
  {
    image: i7,
  },
  {
    image: i5,
  },
  {
    image: i9,
  },
  {
    image: i6,
  },
];

const projectsS = [
  
  {
    name: "Mahadevan Syam",
    tags: [
      {
        name: "Chairperson",
        color: "blue-text-gradient",
      },
    ],
    image: chairperson,
    source_code_link: "https://www.linkedin.com/in/mahadevan-syam-b3651423b/",
  },
  {
    name: "Sudarshan JR",
    tags: [
      {
        name: "Secretary",
        color: "pink-text-gradient",
      },
    ],
    image: secr,
    source_code_link: "https://www.linkedin.com/in/sudarshan-jr-1a79a8228/",
  }
  
]
const projectsF = [
  
  {
    name: "Dr. Saranya KC",
    tags: [
      {
        name: "Faculty Coordinator",
        color: "orange-text-gradient",
      },
    ],
    image: facultycoord,
    source_code_link: "https://www.linkedin.com/company/ieee-sps-vit/",
  },{
    name: "Dr. Vaegae N Kumar",
    tags: [
      {
        name: "Faculty Coordinator",
        color: "orange-text-gradient",
      },
    ],
    image: facultycoord,
    source_code_link: "https://www.linkedin.com/in/dr-naveen-kumar-vaegae-14a26523/",
  },
]

const projectsSec = [
  {
    name: "Vidhi Vidushi",
    tags: [
      {
        name: "Vice-Chairperson",
        color: "green-text-gradient",
      },
    ],
    image: viceChair,
    source_code_link: "https://www.linkedin.com/in/vidhi-vidushi-91b432249/",
  },
  {
    name: "Kanak Roy",
    tags: [
      {
        name: "Co-Secretary",
        color: "green-text-gradient",
      },
    ],
    image: cosec,
    source_code_link: "https://www.linkedin.com/in/kanak-roy-0a5097260/",
  }
]

const projects = [
  
  
  {
    name: "Soumya S Dwibedy",
    tags: [
      {
        name: "Project Head",
        color: "blue-text-gradient",
      },
    ],
    image: projecthead,
    source_code_link: "https://www.linkedin.com/in/soumya-dwibedy-ba6327275/",
  },
  {
    name: "Dhruv Akar",
    tags: [
      {
        name: "Technical Head",
        color: "pink-text-gradient",
      },
    ],
    image: technicalhead,
    source_code_link: "https://www.linkedin.com/in/dhruv-akar-2aa785230/",
  },
  
  {
    name: "Riddhi Dutta",
    tags: [
      {
        name: "Finance Head",
        color: "green-text-gradient",
      },
    ],
    image: financehead,
    source_code_link: "https://www.linkedin.com/in/riddhi-dutta-a54568270/",
  },

  {
    name: "Logadarshana",
    tags: [
      {
        name: "Editorial Head",
        color: "blue-text-gradient",
      },
    ],
    image: editorialhead,
    source_code_link: "https://www.linkedin.com/in/logadarshana-kandasamy-98684a21b/",
  },{
    name: "Darsh Jain",
    tags: [
      {
        name: "Publicity Head",
        color: "orange-text-gradient",
      },
    ],
    image: publicityhead,
    source_code_link: "https://www.linkedin.com/in/dorsoncrack/",
  },
  {
    name: "Anish Rout",
    tags: [
      {
        name: "Design Head",
        color: "pink-text-gradient",
      },
    ],
    image: designhead,
    source_code_link: "https://www.linkedin.com/in/anish-rout-9bb048288/",
  }
  
];

export { services, technologies, experiences, testimonials, projects, projectsF, projectsS, projectsSec};
