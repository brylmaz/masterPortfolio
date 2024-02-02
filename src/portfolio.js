/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Barış Yılmaz",
  description:
  "Software Engineer",
    //"3 yıllık PHP tabanlı full-stack geliştirme deneyimine sahip, Symfony, Laravel, CodeIgniter gibi frameworklerle entegre projeler ve web siteleri geliştirmiş yazılım geliştirici. PHP, MySQL, PostgreSQL, HTML, CSS, JavaScript konularında güçlü bilgi birikimine ek olarak, Docker, Jenkins gibi araçları etkili bir şekilde kullanma becerisiyle projelere değer katıyorum.",
  og: {
    title: "Barış YILMAZ Portfolio",
    type: "website",
    url: "https://brylmaz.xyz/",
  },
};

//Home Page
const greeting = {
  title: "Barış YILMAZ",
  logo_name: "Baris Yilmaz",
  nickname: "brylmaz",
  subTitle:
  "Software Engineer / Back End Developer",  
  //"3 yıllık PHP tabanlı full-stack geliştirme deneyimine sahip, Symfony, Laravel, CodeIgniter gibi frameworklerle entegre projeler ve web siteleri geliştirmiş yazılım geliştirici. PHP, MySQL, PostgreSQL, HTML, CSS, JavaScript konularında güçlü bilgi birikimine ek olarak, Docker, Jenkins gibi araçları etkili bir şekilde kullanma becerisiyle projelere değer katıyorum.",
  resumeLink:
    "",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/brylmaz",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/brylmaz",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/brylmaz/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:brylmaz52@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/brylmaz",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/brylmaz/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/brylmaz/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Back End Development",
      fileName: "DataScienceImg",
      skills: [    
          "⚡ Karmaşık uygulamaları desteklemek için güçlü backend sistemler geliştirme",
          "⚡ Sorunsuz veri yönetimi için etkili veritabanı yapıları uygulama",
          "⚡ Yüksek trafik yüklerini yönetmek üzere sunucu performansını optimize etme",
          "⚡ Frontend ve backend arasında sorunsuz iletişim için RESTful & XML & SOAP API'lar tasarlama ve uygulama",
          "⚡ Uygulama işlevselliğini artırmak için üçüncü taraf hizmetleri ve API'ları entegre etme",
          "⚡ Sürdürülebilir kod tabanı için düzenli kod incelemeleri yapma ve en iyi uygulamaları uygulama",
          "⚡ Sorunsuz işleyişi sağlamak için backend sorunlarını tespit etme ve giderme",
          "⚡ En son backend teknolojileriyle güncel kalarak projelere entegre etme ve işlevselliği artırma."
      ],
      softwareSkills: [
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          
        },
        {
          skillName: "Symfony",
          fontAwesomeClassname: "simple-icons:symfony",
          
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          
        },
        {
          skillName: "Codeigneter",
          fontAwesomeClassname: "simple-icons:codeigniter",
          
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "simple-icons:nginx",
        
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
        
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "simple-icons:rabbitmq",
        },
/*         {
          skillName: "Backend",
          imageSrc: "deeplearning_ai_logo.png",
        }, */
      ],
    },
    {
      title: "Front End Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Javascript ve Jquery kullanarak (responsive) web sitesi ön yüzü oluşturma",
        "⚡ Mobil uygulama geliştirme, Bireysel Android uygulamaları oluşturma",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Jquery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Birden fazla bulut platformunda çalışma deneyimi",
        "⚡ Sanal makine örneklerinde web sitelerini barındırma ve veritabanı entegrasyonu",
        "⚡ AWS üzerinde veritabanından sunucuya veya tersi yönde akış işlerini kurma",
        "⚡ Linux, Ubuntu üzerinde çalışma deneyimi",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Mobil ve web uygulamaları için son derece çekici kullanıcı arayüzü tasarlama",
        "⚡ Logo tasarımlarını özelleştirme ve sıfırdan logo oluşturma",
        "⚡ Uygulama işlevselliğinin akışını oluşturarak kullanıcı deneyimini optimize etme"
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
/* const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
}; */

 const competitiveSites = {
  
}; 

const degrees = {
  degrees: [
    {
      title: "Istanbul Üniversitesi",
      subtitle: "Finans Yönetimi",
      logo_path: "iu_enstitu.svg",
      alt_name: "İşletme İktisadı Enstitüsü",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://isletmeiktisadi.istanbul.edu.tr/",
    },
    {
      title: "Istanbul Esenyurt Üniversitesi",
      subtitle: "Bilgisayar Mühendisliği",
      logo_path: "iesu-logo.png",
      alt_name: "Mühendislik ve Mimarlık Fakültesi",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.esenyurt.edu.tr/",
    },
  ],
};

 const certifications = {
  certifications: [
    
  ],
}; 



// Experience Page
const experience = {
  title: "Deneyim",
  subtitle: "Çalışma ve Staj",
  description:
    "Merhaba dünya! bir yazılımcı olarak edindiğim deneyimleri sizinle paylaşmaktan heyecan duyuyorum. Birçok farklı projede çalıştım ve bu süreçte karşılaştığım sorunlar, öğrendiklerim ve projelerim hakkındaki düşüncelerimi burada bulabilirsiniz. Yazılım dünyasında geçirdiğim zaman içinde edindiğim bilgileri, sıkıntıları ve keyifli anları sizinle paylaşarak birlikte öğrenmek ve büyümek istiyorum.  ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Çalışma Hayatı",
      work: true,
      experiences: [
        {
          title: "Back End Developer",
          company: "ATG Turkey",
          company_url: "https://atgturkey.com/",
          logo_path: "atgturkey.png",
          duration: "Mayıs 2023 - ∞",
          location: "Beyoğlu, İstanbul",
          description:
            "Ana proje kapsamında projenin (havayolu, otel, araç kiralama) şirketlerine entegrasyon yapılması,(THY, Pegasus, Webbeds, Ratehawk ...) geliştirilmesi ve gerekli hataların giderilmesi ile sorumluyum. Proje kapsamında kullandığım teknolojiler; PHP(8.2), Symfony 6, Docker, Mysql, Redis, RabbitMQ, Rest API ve Soap(XML)",
          //color: "#0879bf",
        },
        {
          title: "Full Stack Developer",
          company: "Pera Group",
          company_url: "",
          logo_path: "stockcompany.jpeg",
          duration: "Aralık 2021 - Mayıs 2023 (1 yıl 6 ay)",
          location: "Şişli, İstanbul",
          description:
            "Çağrı merkezi çalışanlarının kullandığı CRM projesini ve müşterilerin kullanması için mobil uygulama geliştirme süreçlerinde yer alıyorum. Codeigniter ve Mysql kullanarak geliştirmelere devam ediyoruz.",
          //color: "#9b1578",
        },
        {
          title: "Full Stack Developer",
          company: "Kolayetic Yazılım Sistemleri Tic. LTD. ŞTİ",
          company_url: "https://kolayetic.com/",
          logo_path: "kolayetic.png",
          duration: "Mayıs 2021 - Aralık 2021 (8 Ay)",
          location: "Esenler, İstanbul",
          description:
            "Entegrasyon projesi kapsamında PHP ile MVC mimarisi kullanarak backend geliştiriyorum ve projeye katkı sağlıyorum. aynı zamanda html-css-jquery-ajax-bootstrap kullandım önyüz için, veritabanı olarak MYSQL ile çalıştım ve projenin ilerlemesinde katkı sağladım ve hataların çözümünde rol aldım.",
          //color: "#fc1f20",
        },
      ],
    },
    {
      title: "Staj",
      experiences: [
        {
          title: "Software Developer Intern",
          company: "Aynı Fikir Bilişim",
          company_url: "https://www.aynifikir.com/",
          logo_path: "aynifikir.png",
          duration: "Şubat 2021 - Nisan 2021 (2 Ay)",
          location: "Şişli, İstanbul",
          description:
            "Çeşitli firmaların web siteleri yapımında ve yine müşteri istekleri doğrultusunda sitede yapılması istenen revizeleri yaptığım ve web sitelerinin gelişimine katkı sundum. kullandığım teknolojiler ; PHP, MYSQL bootstrap, javascript",
          //color: "#000000",
        },
        {
          title: "Software Developer Intern",
          company: "Workcube Türkiye",
          company_url: "https://www.workcube.com/",
          logo_path: "W3_logo.png",
          duration: "Aralık 2020 - Şubat 2021 (2 Ay)",
          location: "Kadıköy, İstanbul",
          description:
            "Adobe Coldfusion dili kullanarak projede hata çözümleri, iyileştirmeler ve geliştirme süreçlerinde bulundum. ilişkisel veri tabanı olarak MSSQL kullanıldımAdobe",
          //color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
/*         {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        }, */
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
