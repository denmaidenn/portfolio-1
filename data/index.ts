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
    des: "Developed Manika Brownies, an e-commerce website for selling brownies and bakery products online. Built using Laravel featuring product catalogs, online ordering, and customer purchase management.",
    img: "/manika.jpg",
    iconLists: ["/laravel.svg", "/tail.svg", "/postgresql.svg", , "/postman.svg"],
    link: "https://github.com/KARUNONIH/manika-brownies",
    role: "Backend Developer",
    type: "E-commerce API",
    year: "2024",
    impact: "Built reliable backend foundations for catalog, order, and payment workflows.",
    documentation: [
      { title: "Project cover", image: "/manika.jpg" }
    ],
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
    des: "Developed a web-based ordering system for Warung Sate Beber as a backend developer using Spring Boot, integrated with Next.js on the frontend. The system features a shopping cart functionality for seamless order management before checkout.",
    img: "/warungsatebeber.png",
    iconLists: ["/next.svg", "/tail.svg", "/mysql.svg", "/springboot.svg", "/postman.svg"],
    link: "https://sate-beber.vercel.app/",
    role: "Backend Developer",
    type: "Restaurant Ordering Platform",
    year: "2024",
    impact: "Connected customer-facing menus with structured order management and tracking.",
    documentation: [
      { title: "Live interface", image: "/warungsatebeber.png" }
    ],
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
    des: "Developed iQuarium, an e-commerce platform for buying and selling ornamental fish equipment. Built with Laravel for the backend and a Kotlin-based mobile application, featuring product listings, purchasing functionality, and order management.",
    img: "/iquarium.png",
    iconLists: ["/laravel.svg", "/tail.svg","/kotlin.svg", "/mysql.svg", "/postman.svg"],
    link: "https://github.com/denmaidenn/anomali",
    role: "Backend Developer",
    type: "Mobile App API",
    year: "2024",
    impact: "Delivered API services for mobile aquarium data workflows and user account flows.",
    documentation: [
      { title: "Mobile app preview", image: "/iquarium.png" }
    ],
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
    des: "Developed a web-based company profile for PT Mitra Jasa Power, a logistics company specializing in large-scale transportation across Indonesia. Built using Laravel for the backend and Next.js for the frontend, featuring service information, contact inquiries, and an admin dashboard for content management.",
    img: "mitrajasapower.png",
    iconLists: ["/laravel.svg", "/next.svg", "/tail.svg", "/mysql.svg", "/postman.svg"],
    link: "https://github.com/denmaidenn/backend-mitrajasapower",
    role: "Backend Developer",
    type: "Company Profile CMS",
    year: "2024",
    impact: "Provided backend services for company content, services, and inquiry management.",
    documentation: [
      { title: "Company website", image: "/mitrajasapower.png" }
    ],
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
    des: "Developed a web-based PPDB system and company profile for Pesantren Al-Ihsan Bekasi. Built with Next.js for the frontend and Express.js for the backend to automate student registration and strengthen the institution's digital presence.",
    img: "/pesantren.png",
    iconLists: ["/re.svg", "/tail.svg", "/nodejs.svg", "/mysql.svg", "/postman.svg"],
    link: "https://pesantrenalihsanbekasi.or.id/",
    role: "Backend Developer",
    type: "PPDB Online System",
    year: "2025",
    impact: "Supported student registration flows with data validation, uploads, and payment processes.",
    documentation: [
      { title: "Registration system", image: "/pesantren.png" }
    ],
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
    des: "Developed a stock trend analysis system using deep learning with an LSTM model implemented in Google Colab. The system analyzes historical stock data and predicts price movement direction based on time series patterns, utilizing Python and libraries such as TensorFlow, Keras, and Pandas for data processing and model development.",
    img: "/stock.png",
    iconLists: ["/python.png", "/keras.png", "/googlecollabs.png"],
    link: "https://colab.research.google.com/drive/1F6jqp7qX7pbt_Sf_-FsBVmiAcbE6KuEo?usp=sharing",
    role: "Machine Learning Developer",
    type: "Stock Trend Analysis",
    year: "2026",
    impact: "Created a learning pipeline to classify bullish and bearish movement from time-series signals.",
    documentation: [
      { title: "Model notebook", image: "/stock.png" }
    ],
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
    des: "Developed an AI-powered laboratory borrowing system that automates student verification by scanning Student ID cards (KTM). Built using FastAPI for the backend, YOLOv8 for object detection, PaddleOCR for text extraction, and Next.js for the frontend interface, enabling automatic identification and efficient laboratory booking management.",
    img: "/labvokasi.png",
    iconLists: ["/fastapi.png", "/mysql.svg", "/paddleocr.png", "/yolov8.png"],
    link: "https://github.com/rhnzaldi/smartlab-scanner",
    role: "Backend & OCR Developer",
    type: "Document Validation System",
    year: "2025",
    impact: "Automated KTM document extraction and validation for lab administration workflows.",
    documentation: [
      { title: "Scanner workflow", image: "/labvoks_verifktm.png" },
      { title: "OCR processing", image: "/labvoks.png" },
      { title: "Validation database", image: "/labvoks_login.png" },
    ],
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
    des: "Developed a face recognition-based attendance system using Flask for the backend, implementing HOG and CNN algorithms for facial detection and recognition to automatically record user attendance.",
    img: "/facerecognition.png",
    iconLists: ["/flask.png", "/mysql.svg", "/HOG.png", "/CNN.png"],
    link: "https://github.com/MrafialexanderP/Face_recognition",
    role: "Backend Developer",
    type: "Attendance System",
    year: "2025",
    impact: "Managed face data storage, attendance validation, and historical reporting flows.",
    documentation: [
      { title: "Recognition dashboard", image: "/facerecognition.png" }
    ],
    keyFeatures: [
      "Face recognition attendance system with Flask",
      "API design for face detection model integration",
      "Face data storage and attendance history management",
      "User attendance validation and reporting",
    ],
  },
  {
    id: 9,
    title: "KosFlow",
    des: "Developed a face-recognition-powered attendance and security management system for student housing, streamlining tenant verification and automated record reporting.",
    img: "/kosflow.png", // Atau gunakan /facerecognition.png jika itu halaman utama
    iconLists: ["/nextjs.png", "/mysql.svg", "/nodejs.png", "/express.png", "/python.svg"], // Menambahkan Python karena ada Flask
    link: "https://kosabah-fe-app-20260513224156.azurewebsites.net/login",
    role: "Quality Assurance",
    type: "Smart Tenant Management System",
    year: "2026",
    impact: "Validated face data storage integrity, verified attendance detection accuracy, and audited automated historical reporting workflows.",
    documentation: [
      { title: "Recognition dashboard", image: "/kosflow.png" },
      { title: "Detection process", image: "/login.png" },
      { title: "Attendance records", image: "/kosflow.png" },
    ],
    keyFeatures: [
      "AI-powered face recognition attendance system integrated via Flask",
      "API testing and validation for seamless face detection model deployment",
      "Secure face data storage and real-time attendance history management",
      "Automated user attendance verification and structured reporting",
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

export const organizationExperience = [
  {
    id: 1,
    organization: "Software Engineering Cabinet",
    role: "Staff of Public Relations Division",
    period: "2025 - 2026",
    description:
      "Managed digital communication channels, supported technical documentation, and drove student community engagement through collaborative leadership.",
    tags: ["Leadership", "Documentation", "Public Relations", "Technical Operations"],
    accent: "blue",
  }
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
