export const navItems = [
  { name: "Home", link: "#home" },
  { name: "Project", link: "#projects" },
  { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Raffa Danendra Pramono",
    description: "Backend Developer & Software Engineering Student",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/laptop.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Partner Project Experience",
    description: "CRUD APIs & Database Design",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Building Scalable Backend Solutions",
    description: "RESTful APIs with best practices",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Designed and managed relational databases",
    description: "MySQL, PostgreSQL",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/db.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Manika Brownies",
    des: "Developed backend services using Laravel to handle application logic, database management, and RESTful APIs.",
    img: "/manika.jpg",
    iconLists: ["/laravel.svg", "/tail.svg", "/postgresql.svg", , "/postman.svg"],
    link: "https://github.com/KARUNONIH/manika-brownies",
    keyFeatures: [
      "RESTful API development with Laravel",
      "PostgreSQL database design and optimization",
      "Authentication and authorization system",
      "Order management system",
      "Payment gateway integration",
    ],
  },
  {
    id: 2,
    title: "Warung Sate Beber",
    des: "Implemented backend services and RESTful APIs using Spring Boot to handle application logic and data management.",
    img: "/warungsatebeber.png",
    iconLists: ["/next.svg", "/tail.svg", "/mysql.svg", "/springboot.svg", "/postman.svg"],
    link: "https://sate-beber.vercel.app/",
    keyFeatures: [
      "Spring Boot RESTful API development",
      "MySQL database design and management",
      "Menu and order management system",
      "Real-time order tracking",
      "Responsive frontend with Next.js",
    ],
  },
  {
    id: 3,
    title: "Iquarium",
    des: "Implemented RESTful APIs using laravel to connect the backend with the Kotlin-based mobile application.",
    img: "/iquarium.png",
    iconLists: ["/laravel.svg", "/tail.svg","/kotlin.svg", "/mysql.svg", "/postman.svg"],
    link: "https://github.com/denmaidenn/anomali",
    keyFeatures: [
      "Laravel backend API for mobile app",
      "Kotlin mobile application development",
      "User authentication and profile management",
      "Aquarium data management system",
      "Cross-platform mobile compatibility",
    ],
  },
  {
    id: 4,
    title: "PT. Mitra Jasa Power",
    des: "Developed and implemented RESTful APIs backend services using Laravel to serve data to the Next.js",
    img: "mitrajasapower.png",
    iconLists: ["/laravel.svg", "/next.svg", "/tail.svg", "/mysql.svg", "/postman.svg"],
    link: "https://github.com/denmaidenn/backend-mitrajasapower",
    keyFeatures: [
      "Laravel backend API development",
      "Next.js frontend integration",
      "Company profile and service management",
      "Contact and inquiry system",
      "SEO optimized web application",
    ],
  },
  {
    id: 5,
    title: "Pesantren Al Ihsan Bekasi",
    des: "Managed database integration data, and develop backend services using Node.js and Express.js to support PPDB online system.",
    img: "/pesantren.png",
    iconLists: ["/re.svg", "/tail.svg", "/nodejs.svg", "/mysql.svg", "/postman.svg"],
    link: "https://pesantrenalihsanbekasi.or.id/",
    keyFeatures: [
      "Node.js and Express.js backend development",
      "PPDB (Student Registration) online system",
      "Student data management",
      "Document upload and management",
      "Payment processing integration",
    ],
  },
  {
    id: 6,
    title: "Sistem Analisis Tren Saham",
    des: "Built a stock trend analysis system using Deep Learning (LSTM) to predict bullish/bearish price movements.",
    img: "/stock.png",
    iconLists: ["/python.png", "/keras.png", "/googlecollabs.png"],
    link: "https://colab.research.google.com/drive/1F6jqp7qX7pbt_Sf_-FsBVmiAcbE6KuEo?usp=sharing",
    keyFeatures: [
      "Deep Learning LSTM model for trend prediction",
      "Time series preprocessing and feature engineering",
      "Technical indicators: MA and RSI",
      "Backend integration for trading signal generation",
    ],
  },
  {
    id: 7,
    title: "Laboratorium Vokasi OCR System",
    des: "Developed a FastAPI backend for student data validation and PaddleOCR extraction from KTM documents.",
    img: "/labvokasi.png",
    iconLists: ["/fastapi.png", "/mysql.svg", "/paddleocr.png", "/yolov8.png"],
    link: "https://github.com/rhnzaldi/smartlab-scanner",
    keyFeatures: [
      "FastAPI-based validation API for student data",
      "PaddleOCR extraction for KTM documents",
      "OCR parsing and database validation workflows",
      "Performance optimization for OCR accuracy",
    ],
  },
  {
    id: 8,
    title: "Face Recognition Absensi",
    des: "Developed a Flask backend for face recognition attendance and managed face data storage and attendance history.",
    img: "/facerecognition.png",
    iconLists: ["/flask.png", "/mysql.svg"],
    link: "https://github.com/MrafialexanderP/Face_recognition",
    keyFeatures: [
      "Face recognition attendance system with Flask",
      "API design for face detection model integration",
      "Face data storage and attendance history management",
      "User attendance validation and reporting",
    ],
  }
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Backend Developer - Partner Project",
    desc: "Developed CRUD functionalities and designed RESTful APIs. Managed database architecture and implemented data validation for e-commerce platform.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Laravel & Express.js Developer",
    desc: "Built backend services using Laravel and Node.js/Express. Implemented authentication, authorization, and API endpoints with proper error handling.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Database Administrator",
    desc: "Designed and optimized MySQL & PostgreSQL databases. Created complex queries, indexing strategies, and performed data modeling for scalable applications.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full Stack Coordinator",
    desc: "Collaborated with frontend developers using Next.js. Integrated REST APIs with modern frontend frameworks and maintained codebase on GitHub.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/denmaidenn",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/raffadanendraa/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/raffadanendraa/",
  },
];
