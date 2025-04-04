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
    type: "Barış YILMAZ Personal Portfolio Website",
    url: "https://brylmaz.com/",
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
  portfolio_repository: "https://github.com/brylmaz",
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
          style:{
            color:"#787CB4",
          }
          
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style:{
            color:"#F34E38",
          }
        },
        {
          skillName: "Codeigneter",
          fontAwesomeClassname: "simple-icons:codeigniter",
          style:{
            color:"#E84121",
          }
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "simple-icons:nginx",
          style:{
            color:"#019237",
          }
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style:{
            color:"#F53426",
          }
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "simple-icons:rabbitmq",
          style:{
            color:"#F86201",
          }
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
          fontAwesomeClassname: "simple-icons:css3",
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
          style:{
            color: "#F7DF1E"
          }
        },
        {
          skillName: "Jquery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0769AD"
          }
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3"
          }
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
            color: "#4169E1",
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
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2496ED"
          }
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#D24939"
          }
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624"
          }
        },
      ],
    },
    /* {
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
    }, */
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
  competitiveSites: []
}; 

const degrees = {
  degrees: [
    {
      title: "Istanbul Üniversitesi (Yüksek Lisans)",
      subtitle: "Finans Yönetimi",
      logo_path: "iu_enstitu.svg",
      alt_name: "İşletme İktisadı Enstitüsü ",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ Eğitim: Finans yönetimi bölümünden aldığım eğitimle, finansal hesaplamalar, yatırım analizi, finansal raporlama gibi temel konularda geniş bir bilgi tabanına sahibim.",
        "⚡ Maliyet Muhasebesi: Maliyet muhasebesi konularında uzmanlık kazandım. Şirketlerin maliyet yapılarını analiz ederek, etkin maliyet kontrolü ve bütçe yönetimi konularında deneyim sahibiyim.",
        "⚡ Finansal Analiz: Finansal tabloları yorumlama, finansal oran analizi ve trend analizi konularında yetkinlik kazandım. Şirket performansını değerlendirme ve geleceğe dönük finansal tahminler yapabilme becerisine sahibim.",
        "⚡ Risk Yönetimi: Finansal piyasalardaki riskleri değerlendirme ve etkili bir şekilde yönetme konusunda bilgi sahibiyim. Hedge yöntemleri ve finansal türev araçları konusunda deneyimim bulunmaktadır.",
        "⚡ Portföy Yönetimi: Yatırım portföylerini oluşturma, yönetme ve optimize etme konularında bilgi ve deneyim sahibiyim. Finansal enstrümanların performansını değerlendirme ve portföy çeşitlendirmesi konularında uzmanlığa sahibim.",
        "⚡ İleri Excel Becerileri: Finansal modeller oluşturma, veri analizi ve raporlama konularında ileri düzeyde Excel becerilerine sahibim. Bu sayede finansal verileri etkili bir şekilde analiz edebilirim.",
        "⚡ Uluslararası Finans: Uluslararası finans piyasaları, döviz kurları ve uluslararası finansal yönetim konularında bilgi sahibiyim. Global ekonomik faktörlerin finansal stratejilere etkilerini değerlendirme yeteneğine sahibim.",
        "⚡ İş Etik ve Hukuk: Finans sektöründeki etik standartlarını bilmek ve iş hukuku konularında bilgi sahibi olmak, karar süreçlerinde adil ve yasal bir çerçevede hareket etmemi sağlar.",
        
      ],
      website_link: "https://isletmeiktisadi.istanbul.edu.tr/",
    },
    {
      title: "Istanbul Esenyurt Üniversitesi (Lisans)",
      subtitle: "Bilgisayar Mühendisliği",
      logo_path: "iesu-logo.png",
      alt_name: "Mühendislik ve Mimarlık Fakültesi",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Eğitim: Bilgisayar mühendisliği alanında aldığım eğitimle, temel bilgisayar bilimleri, yazılım mühendisliği, ağlar, veri yapıları gibi konularda geniş bir bilgi tabanına sahibim.",
        "⚡ Programlama Dilleri: Çeşitli programlama dillerinde yetkinlik kazandım. Bu diller arasında C++, Java, Python ve web tabanlı teknolojilerle ilgili deneyimlerim bulunmaktadır.",
        "⚡ Web Geliştirme: Web teknolojilerine olan ilgimle birlikte HTML, CSS ve JavaScript gibi temel web dillerinde uzmanlık kazandım. Ayrıca, popüler web framework'leri ve kütüphaneleriyle projeler geliştirdim.",
        "⚡ Veritabanları: Veritabanı tasarımı ve yönetimi konusunda deneyimlerimle SQL dilini etkili bir şekilde kullanabilirim. Ayrıca, NoSQL veritabanlarına olan aşinalığım da bulunmaktadır.",
        "⚡ Yazılım Mimarisi: Büyük ölçekli yazılım projelerinde çalışma deneyimimle, yazılım mimarisi, tasarım desenleri ve modüler programlama konularında bilgi sahibiyim.",
        "⚡ Ağlar ve Güvenlik: Ağ teknolojileri, TCP/IP protokolü, güvenlik prensipleri ve uygulamaları hakkında bilgi sahibiyim. Bu alandaki güncel gelişmeleri takip etmekteyim.",
        "⚡ Proje Yönetimi: Bilgisayar mühendisliği projelerini planlama, geliştirme ve yönetme konusunda tecrübelerim var. Proje yönetimi süreçlerini etkin bir şekilde uygulayabilirim.",
        "⚡ Sürekli Öğrenme: Hızla değişen teknoloji dünyasında sürekli öğrenmeye ve kendimi geliştirmeye önem veririm. Yeni teknolojilere uyum sağlama konusundaki esnekliğimle bilgilerimi güncel tutarım.",
        "⚡ Bu noktalardan hareketle, bilgisayar mühendisliği eğitimi ve profesyonel deneyimlerimle hem teorik bilgi hem de pratik uygulama konularında geniş bir yelpazede yetkinlik kazandım.",

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
    "Merhaba dünya! Bir yazılımcı olarak edindiğim deneyimleri sizinle paylaşmaktan heyecan duyuyorum. Birçok farklı projede çalıştım ve bu süreçte karşılaştığım sorunlar zaman içinde edindiğim bilgiler bana tecrübe kazandırdı.",
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
    /* {
      title: "Volunteerships",
      experiences: [
         {
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
        }, 
      ],
    }, */
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
    title: "İletişim",
    profile_image_path: "profilo.png",
    description:
      "Sosyal medyadan bana mesaj atabilirsiniz, mail adresim ile de iletişime geçebilirsiniz. En geç 24 saat içinde cevap vereceğim. Yazılım, teknoloji alanında olan ilgim ve bilgi birikimim ile bana danışabilirsiniz. Ayrıntılı Cv için lütfen iletişime geçin.",
  },
  blogSection: {
    title: "",
    subtitle:
      "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "",
    subtitle:
      "",
    locality: "",
    country: "",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "",
    location_map_link: "",
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
