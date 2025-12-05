/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Barış YILMAZ",
  description:
    "Software Engineer / Back End Developer",
  og: {
    title: "Barış YILMAZ",
    type: "website",
    url: "https://brylmaz.com/",
  },
};

//Home Page
const greeting = {
  title: "Barış YILMAZ",
  logo_name: "Barış YILMAZ",
  nickname: "brylmaz",
  subTitle:
    "Software Engineer / Back End Developer",
  //resumeLink: "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  //portfolio_repository: "https://github.com/brylmaz/masterPortfolio",
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
//  {
//    name: "YouTube",
//    link: "https://youtube.com/c/DevSense19",
//    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
//    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
//  },
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
  fileName: "BackendImg",
  skills: [
    "⚡ Karmaşık uygulamaları desteklemek için güçlü backend sistemler geliştirme",
    "⚡ Sorunsuz veri yönetimi için etkili veritabanı yapıları uygulama",
    "⚡ Yüksek trafik yüklerini yönetmek üzere sunucu performansını optimize etme",
    "⚡ PostgreSQL, MySQL gibi veritabanları ile kompleks sorgular ve optimizasyon",
    "⚡ Redis ve RabbitMQ gibi teknolojilerle caching ve mesajlaşma altyapılarının kurulumu",
    "⚡ Frontend ve backend arasında sorunsuz iletişim için RESTful & XML & SOAP API'lar tasarlama ve uygulama",
    "⚡ Uygulama işlevselliğini artırmak için üçüncü taraf hizmetleri ve API'ları entegre etme",
    "⚡ Sürdürülebilir kod tabanı için düzenli kod incelemeleri yapma ve en iyi uygulamaları uygulama",
    "⚡ Sorunsuz işleyişi sağlamak için backend sorunlarını tespit etme ve giderme",
    "⚡ En son backend teknolojileriyle güncel kalarak projelere entegre etme ve işlevselliği artırma."
  ],
  softwareSkills: [
    {
      skillName: "PHP",
      fontAwesomeClassname: "logos-php",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Symfony",
      fontAwesomeClassname: "simple-icons:symfony",
      style: {
        backgroundColor: "black",
        color: "white",
      },
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "logos-laravel",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "logos-mysql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "logos-postgresql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "logos-redis",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "RabbitMQ",
      fontAwesomeClassname: "simple-icons:rabbitmq",
      style: {
        backgroundColor: "#FF6600",
        color: "white",
      },
    },
    {
      skillName: "REST API",
      fontAwesomeClassname: "simple-icons:apachespark", // alternatif ikon, özel ikon olmayabilir
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "SOAP",
      fontAwesomeClassname: "simple-icons:soap",
      style: {
        backgroundColor: "transparent",
      },
    },
  ],
    },
    {
  title: "Frontend Developer",
  fileName: "FrontendImg",
  skills: [
    "⚡ Modern, mobil uyumlu ve kullanıcı dostu arayüzler geliştirme",
    "⚡ HTML5, CSS3 ve JavaScript kullanarak etkileşimli ve hızlı web sayfaları oluşturma",
    "⚡ jQuery ve Bootstrap ile hızlı prototip geliştirme",
    "⚡ TailwindCSS ile esnek ve özelleştirilebilir tasarım sistemleri oluşturma",
    "⚡ Webpack, Vite gibi araçlarla projeleri optimize etme",
    "⚡ Cross-browser uyumluluğu ve erişilebilirlik (a11y) konusunda deneyim",
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
      skillName: "JavaScript",
      fontAwesomeClassname: "simple-icons:javascript",
      style: {
        color: "#F7DF1E",
      },
    },
    {
      skillName: "jQuery",
      fontAwesomeClassname: "simple-icons:jquery",
      style: {
        color: "#0769AD",
      },
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "simple-icons:bootstrap",
      style: {
        color: "#7952B3",
      },
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "simple-icons:tailwindcss",
      style: {
        color: "#38B2AC",
      },
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "simple-icons:sass",
      style: {
        color: "#CC6699",
      },
    },
    {
      skillName: "Responsive Design",
      fontAwesomeClassname: "simple-icons:responsive",
      style: {
        color: "#00BFFF",
      },
    },
  ],
},
    {
  title: "Cloud & DevOps",
  fileName: "CloudInfraImg",
  skills: [
    "⚡ Linux tabanlı sunucular üzerinde web uygulamaları yayınlama ve yönetme",
    "⚡ CI/CD süreçlerinin Jenkins ve GitHub Actions ile otomatize edilmesi",
    "⚡ Docker ile container tabanlı uygulama mimarileri kurma",
    "⚡ Nginx kullanarak ters proxy ve yük dengeleme konfigürasyonları",
    "⚡ Symfony, Laravel gibi framework'leri içeren projelerin staging ve production ortamlarına alınması",
    "⚡ PostgreSQL, MySQL gibi veritabanlarının cloud platformlarda yapılandırılması ve optimizasyonu",
  ],
  softwareSkills: [
    {
      skillName: "Docker",
      fontAwesomeClassname: "simple-icons:docker",
      style: {
        color: "#1488C6",
      },
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "simple-icons:jenkins",
      style: {
        color: "#D24939",
      },
    },
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "simple-icons:githubactions",
      style: {
        color: "#2088FF",
      },
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "simple-icons:linux",
      style: {
        color: "#FCC624",
      },
    },
    {
      skillName: "Nginx",
      fontAwesomeClassname: "simple-icons:nginx",
      style: {
        color: "#009639",
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
      skillName: "MySQL",
      fontAwesomeClassname: "simple-icons:mysql",
      style: {
        color: "#00758F",
      },
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "simple-icons:git",
      style: {
        color: "#F05032",
      },
    },
    {
      skillName: "Symfony Deploy",
      fontAwesomeClassname: "simple-icons:symfony",
      style: {
        color: "black",
      },
    },
  ],
}
,
    
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "İstanbul Üniversitesi-Cerrahpaşa (Yüksek Lisans)",
      subtitle: "Finans Yönetimi",
      logo_path: "logo_tr_eng-a4-40.png",
      alt_name: "İstanbul Üniversitesi",
      duration: "2023-2025",
      descriptions: [
        "⚡ Finansal yönetim, mali analiz, yatırım araçları ve muhasebe konularında kapsamlı bir eğitim alıyorum.",
        "⚡ Ekonomi, istatistik ve işletme yönetimi gibi temel alanlarda teorik bilgileri pratikle birleştirerek analiz yapma yeteneğimi geliştirdim.",
        "⚡ Yazılım geliştirici olarak sahip olduğum teknik becerileri finansal analiz süreçlerine entegre ederek veri odaklı yaklaşımlar geliştiriyorum.",
        "⚡ Eğitim: Finans yönetimi bölümünden aldığım eğitimle, finansal hesaplamalar, yatırım analizi, finansal raporlama gibi temel konularda geniş bir bilgi tabanına sahibim",
        "⚡ Maliyet Muhasebesi: Maliyet muhasebesi konularında uzmanlık kazandım. Şirketlerin maliyet yapılarını analiz ederek, etkin maliyet kontrolü ve bütçe yönetimi konularında deneyim sahibiyim.",
        "⚡ Finansal Analiz: Finansal tabloları yorumlama, finansal oran analizi ve trend analizi konularında yetkinlik kazandım. Şirket performansını değerlendirme ve geleceğe dönük finansal tahminler yapabilme becerisine sahibim.",
        "⚡ Risk Yönetimi: Finansal piyasalardaki riskleri değerlendirme ve etkili bir şekilde yönetme konusunda bilgi sahibiyim. Hedge yöntemleri ve finansal türev araçları konusunda deneyimim bulunmaktadır.",
        "⚡ Portföy Yönetimi: Yatırım portföylerini oluşturma, yönetme ve optimize etme konularında bilgi ve deneyim sahibiyim. Finansal enstrümanların performansını değerlendirme ve portföy çeşitlendirmesi konularında uzmanlığa sahibim.",
        "⚡ İleri Excel Becerileri: Finansal modeller oluşturma, veri analizi ve raporlama konularında ileri düzeyde Excel becerilerine sahibim. Bu sayede finansal verileri etkili bir şekilde analiz edebilirim.",
        "⚡ Uluslararası Finans: Uluslararası finans piyasaları, döviz kurları ve uluslararası finansal yönetim konularında bilgi sahibiyim. Global ekonomik faktörlerin finansal stratejilere etkilerini değerlendirme yeteneğine sahibim.",
        "⚡ İş Etik ve Hukuk: Finans sektöründeki etik standartlarını bilmek ve iş hukuku konularında bilgi sahibi olmak, karar süreçlerinde adil ve yasal bir çerçevede hareket etmemi sağlar."  
      ],
      website_link: "https://www.iuc.edu.tr/tr/_",
    },
    {
      title: "İstanbul Esenyurt Üniversitesi (Lisans)",
      subtitle: "Bilgisayar Mühendisliği",
      logo_path: "emyjxq7cgdfy4-esenyurt-universitesi-logo.png",
      alt_name: "İstanbul Esenyurt Üniversitesi",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Algoritmalar, veri yapıları, nesne yönelimli programlama, veritabanı yönetimi ve yazılım mühendisliği gibi temel mühendislik derslerini başarıyla tamamladım.",
        "⚡ PHP, Java ve C# gibi dillerle projeler geliştirdim; bitirme projemde web tabanlı bir uygulama üzerine çalıştım.",
        "⚡ Öğrenim sürecimde hem teorik bilgi hem de pratik proje deneyimi kazanarak backend geliştirici olarak kariyerime sağlam bir temel oluşturdum.",
        "⚡ Eğitim: Bilgisayar mühendisliği alanında aldığım eğitimle, temel bilgisayar bilimleri, yazılım mühendisliği, ağlar, veri yapıları gibi konularda geniş bir bilgi tabanına sahibim.",
        "⚡ Programlama Dilleri: Çeşitli programlama dillerinde yetkinlik kazandım. Bu diller arasında C++, Java, Python ve web tabanlı teknolojilerle ilgili deneyimlerim bulunmaktadır.",
        "⚡ Web Geliştirme: Web teknolojilerine olan ilgimle birlikte HTML, CSS ve JavaScript gibi temel web dillerinde uzmanlık kazandım. Ayrıca, popüler web framework'leri ve kütüphaneleriyle projeler geliştirdim.",
        "⚡ Veritabanları: Veritabanı tasarımı ve yönetimi konusunda deneyimlerimle SQL dilini etkili bir şekilde kullanabilirim. Ayrıca, NoSQL veritabanlarına olan aşinalığım da bulunmaktadır.",
        "⚡ Yazılım Mimarisi: Büyük ölçekli yazılım projelerinde çalışma deneyimimle, yazılım mimarisi, tasarım desenleri ve modüler programlama konularında bilgi sahibiyim.",
        "⚡ Ağlar ve Güvenlik: Ağ teknolojileri, TCP/IP protokolü, güvenlik prensipleri ve uygulamaları hakkında bilgi sahibiyim. Bu alandaki güncel gelişmeleri takip etmekteyim.",
        "⚡ Proje Yönetimi: Bilgisayar mühendisliği projelerini planlama, geliştirme ve yönetme konusunda tecrübelerim var. Proje yönetimi süreçlerini etkin bir şekilde uygulayabilirim.",
        "⚡ Sürekli Öğrenme: Hızla değişen teknoloji dünyasında sürekli öğrenmeye ve kendimi geliştirmeye önem veririm. Yeni teknolojilere uyum sağlama konusundaki esnekliğimle bilgilerimi güncel tutarım.",
        "⚡ Bu noktalardan hareketle, bilgisayar mühendisliği eğitimi ve profesyonel deneyimlerimle hem teorik bilgi hem de pratik uygulama konularında geniş bir yelpazede yetkinlik kazandım."
      
      ],
      website_link: "https://www.esenyurt.edu.tr/",
    }
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Deneyim",
  subtitle: "Çalışma ve Staj",
  description:
    " Merhaba dünya! Bir yazılımcı olarak edindiğim deneyimleri sizinle paylaşmaktan heyecan duyuyorum. Birçok farklı projede çalıştım ve bu süreçte karşılaştığım sorunlar zaman içinde edindiğim bilgiler bana tecrübe kazandırdı.",
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
          color: "#000000",
        },
        {
          title: "Full Stack Developer",
          company: "Pera Group",
          company_url: "",
          logo_path: "pera.jpg",
          duration: "Aralık 2021 - Mayıs 2023 (1 Yıl 6 Ay)",
          location: "Şişli, İstanbul",
          description:
            "Çağrı merkezi çalışanlarının kullandığı CRM projesini ve müşterilerin kullanması için mobil uygulama geliştirme süreçlerinde yer alıyorum. Codeigniter ve Mysql kullanarak geliştirmelere devam ediyoruz.",
          color: "#0879bf",
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
          color: "#9b1578",
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
          duration: "Şubat 2021 - Nisan 2021",
          location: "Şişli, İstanbul",
          description:
            "Çeşitli firmaların web siteleri yapımında ve yine müşteri istekleri doğrultusunda sitede yapılması istenen revizeleri yaptığım ve web sitelerinin gelişimine katkı sundum. kullandığım teknolojiler ; PHP, MYSQL bootstrap, javascript",
          color: "#000000",
        },
        {
          title: "Software Developer Intern",
          company: "Workcube Türkiye",
          company_url: "https://www.workcube.com/tr/welcome",
          logo_path: "workcube.png",
          duration: "Aralık 2020 - Şubat 2021",
          location: "Kadıköy, İstanbul",
          description:
            "Adobe Coldfusion dili kullanarak projede hata çözümleri, iyileştirmeler ve geliştirme süreçlerinde bulundum. ilişkisel veri tabanı olarak MSSQL kullandım",
          color: "#ee3c26",
        },
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
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "İletişim",
    profile_image_path: "baris.jpeg",
    description:
      "Sosyal medyadan bana mesaj atabilirsiniz, mail adresim ile de iletişime geçebilirsiniz. En geç 24 saat içinde cevap vereceğim. Yazılım, teknoloji alanında olan ilgim ve bilgi birikimim ile bana danışabilirsiniz. Ayrıntılı Cv için lütfen iletişime geçin.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
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
