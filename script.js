document.addEventListener("DOMContentLoaded", () => {
  // Language Switcher Logic
  const languageDropdown = document.getElementById("language-dropdown");
  const translatableElements = document.querySelectorAll("[data-lang-key]");

  // Translations (ensure this is complete and correct)
  const translations = {
    en: {
      "company-name": "VANGUARD SYSTEMS",
      "company-tagline": "Your vision, our mission.",
      "hero-title": "Professional Electro-Installation Services",
      "hero-description": "Delivering Excellence in Electrical Solutions",
      "cta-button": "Get a Quote",
      "about-title": "About Vanguard Systems",
      "about-description":
        "Vanguard Systems is a leading electro-installation company committed to delivering high-quality services to our clients.",
      "services-title": "Our Services",
      "service-commercial-title": "Commercial Projects",
      "service-commercial-description":
        "Professional electrical solutions for businesses of all sizes. From planning to installation, our expert team ensures safety, reliability, and long-term satisfaction in your commercial spaces.",
      "service-industrial-title": "Industrial Solutions",
      "service-industrial-description":
        "Advanced electrical services for industrial facilities and operations. We provide tailored solutions for complex industrial needs, ensuring maximum efficiency and compliance with standards.",
      "subcontracting-title": "Subcontracting Services",
      "subcontracting-description":
        "We offer professional subcontracting services for electrical installations in Germany. Our team includes highly skilled electricians with extensive experience in German standards and regulations, ensuring smooth integration and outstanding results.",
      "contact-title": "Contact Us",
      "contact-description":
        "For inquiries, requests for quotes, or collaboration opportunities, reach out to us using the contact details below.",
      "contact-company-heading": "🏢 Company",
      "contact-address-heading": "📍 Address",
      "contact-address":
        "Kmanski prilaz IV 5<br />HR - 21000 Split<br />Kroatien",
      "contact-oib-heading": "🔢 OIB",
      "contact-oib": "63508534616",
      "contact-phone-heading": "📞 Phone",
      "contact-phone": "+385 97 663 0260",
      "contact-email-heading": "📧 Email",
      "contact-email": "vukoja-danijel@vanguard-systems.hr",
      "close-button": "&times;",
      "modal-title": "Website Details",
      "modal-description":
        "Designed and implemented by Digital Distributed d.o.o.",
      "modal-contact":
        "Looking for a professional and personalized website? Reach out to us at",
      "modal-email": "digitaldistributed@outlook.com",
      "modal-footer":
        "We're here to help you bring your ideas to life with modern, user-friendly designs. Let's create something amazing together!",
    },
    de: {
      // German translations
      "company-name": "VANGUARD SYSTEMS",
      "company-tagline": "Ihre Vision, unsere Mission.",
      "hero-title": "Professionelle Elektroinstallationsdienstleistungen",
      "hero-description": "Exzellenz in elektrischen Lösungen liefern",
      "cta-button": "Angebot einholen",
      "about-title": "Über Vanguard Systems",
      "about-description":
        "Vanguard Systems ist ein führendes Elektroinstallationsunternehmen, das sich dazu verpflichtet hat, seinen Kunden qualitativ hochwertige Dienstleistungen zu liefern.",
      "services-title": "Unsere Dienstleistungen",
      "service-commercial-title": "Gewerbliche Projekte",
      "service-commercial-description":
        "Professionelle elektrische Lösungen für Unternehmen jeder Größe. Von der Planung bis zur Installation gewährleistet unser Expertenteam Sicherheit, Zuverlässigkeit und langfristige Zufriedenheit in Ihren gewerblichen Räumen.",
      "service-industrial-title": "Industrielle Lösungen",
      "service-industrial-description":
        "Fortschrittliche elektrische Dienstleistungen für Industrieanlagen und -betriebe. Wir bieten maßgeschneiderte Lösungen für komplexe industrielle Anforderungen und gewährleisten maximale Effizienz und Einhaltung von Standards.",
      "subcontracting-title": "Subunternehmerdienste",
      "subcontracting-description":
        "Wir bieten professionelle Subunternehmerdienste für Elektroinstallationen in Deutschland an. Unser Team besteht aus hochqualifizierten Elektrikern mit umfangreicher Erfahrung in deutschen Standards und Vorschriften, die eine reibungslose Integration und hervorragende Ergebnisse gewährleisten.",
      "contact-title": "Kontaktieren Sie uns",
      "contact-description":
        "Für Anfragen, Angebotsanfragen oder Kooperationsmöglichkeiten erreichen Sie uns über die unten stehenden Kontaktdaten.",
      "contact-company-heading": "🏢 Firma",
      "contact-address-heading": "📍 Adresse",
      "contact-address":
        "Kmanski prilaz IV 5<br />HR - 21000 Split<br />Kroatien",
      "contact-oib-heading": "🔢 OIB",
      "contact-oib": "63508534616",
      "contact-phone-heading": "📞 Telefon",
      "contact-phone": "+385 97 663 0260",
      "contact-email-heading": "📧 E-Mail",
      "contact-email": "vukoja-danijel@vanguard-systems.hr",
      "close-button": "&times;",
      "modal-title": "Website-Details",
      "modal-description":
        "Entworfen und umgesetzt von Digital Distributed d.o.o.",
      "modal-contact":
        "Suchen Sie eine professionelle und personalisierte Website? Kontaktieren Sie uns unter",
      "modal-email": "digitaldistributed@outlook.com",
      "modal-footer":
        "Wir sind hier, um Ihnen zu helfen, Ihre Ideen mit modernen, benutzerfreundlichen Designs zum Leben zu erwecken. Lassen Sie uns gemeinsam etwas Erstaunliches schaffen!",
    },
    hr: {
      // Croatian translations
      "company-name": "VANGUARD SYSTEMS",
      "company-tagline": "Vaša vizija, naša misija.",
      "hero-title": "Profesionalne elektroinstalacijske usluge",
      "hero-description": "Isporučivanje izvrsnosti u električnim rješenjima",
      "cta-button": "Zatražite ponudu",
      "about-title": "O Vanguard Systems",
      "about-description":
        "Vanguard Systems je vodeća tvrtka za elektroinstalacije posvećena pružanju visokokvalitetnih usluga svojim klijentima.",
      "services-title": "Naše usluge",
      "service-commercial-title": "Komercijalni projekti",
      "service-commercial-description":
        "Profesionalna električna rješenja za tvrtke svih veličina. Od planiranja do instalacije, naš stručni tim osigurava sigurnost, pouzdanost i dugoročno zadovoljstvo u vašim komercijalnim prostorima.",
      "service-industrial-title": "Industrijska rješenja",
      "service-industrial-description":
        "Napredne električne usluge za industrijska postrojenja i operacije. Pružamo prilagođena rješenja za složene industrijske potrebe, osiguravajući maksimalnu učinkovitost i usklađenost sa standardima.",
      "subcontracting-title": "Usluge podugovaranja",
      "subcontracting-description":
        "Nudimo profesionalne usluge podugovaranja za elektroinstalacije u Njemačkoj. Naš tim uključuje visokokvalificirane električare s velikim iskustvom u njemačkim standardima i propisima, osiguravajući glatku integraciju i izvanredne rezultate.",
      "contact-title": "Kontaktirajte nas",
      "contact-description":
        "Za upite, zahtjeve za ponude ili mogućnosti suradnje, obratite nam se putem dolje navedenih kontaktnih podataka.",
      "contact-company-heading": "🏢 Tvrtka",
      "contact-address-heading": "📍 Adresa",
      "contact-address":
        "Kmanski prilaz IV 5<br />HR - 21000 Split<br />Hrvatska",
      "contact-oib-heading": "🔢 OIB",
      "contact-oib": "63508534616",
      "contact-phone-heading": "📞 Telefon",
      "contact-phone": "+385 97 663 0260",
      "contact-email-heading": "📧 Email",
      "contact-email": "vukoja-danijel@vanguard-systems.hr",
      "close-button": "&times;",
      "modal-title": "Detalji web stranice",
      "modal-description":
        "Dizajnirao i implementirao Digital Distributed d.o.o.",
      "modal-contact":
        "Tražite profesionalnu i personaliziranu web stranicu? Obratite nam se na",
      "modal-email": "digitaldistributed@outlook.com",
      "modal-footer":
        "Tu smo da vam pomognemo oživjeti vaše ideje modernim, korisnički prilagođenim dizajnom. Stvorimo zajedno nešto nevjerojatno!",
    },
  };

  const setLanguage = (lang) => {
    translatableElements.forEach((el) => {
      const key = el.dataset.langKey;
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
    localStorage.setItem("preferredLanguage", lang);
    if (languageDropdown) languageDropdown.value = lang;
  };

  if (languageDropdown) {
    languageDropdown.addEventListener("change", (event) => {
      setLanguage(event.target.value);
    });
  }

  const preferredLang = localStorage.getItem("preferredLanguage");
  const browserLang = navigator.language.split("-")[0];
  let defaultLang = "en";

  if (preferredLang && translations[preferredLang]) {
    defaultLang = preferredLang;
  } else if (translations[browserLang]) {
    defaultLang = browserLang;
  }

  setLanguage(defaultLang);
  if (languageDropdown) languageDropdown.value = defaultLang;

  // Modal Logic
  const modal = document.getElementById("design-modal");
  const link = document.getElementById("design-info-link");
  const closeButton = modal ? modal.querySelector(".close-button") : null;

  if (link && modal && closeButton) {
    link.onclick = function (event) {
      event.preventDefault();
      modal.style.display = "flex";
      setTimeout(() => modal.classList.add("modal-visible"), 10);
    };

    closeButton.onclick = function () {
      modal.classList.remove("modal-visible");
      setTimeout(() => (modal.style.display = "none"), 300);
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.classList.remove("modal-visible");
        setTimeout(() => (modal.style.display = "none"), 300);
      }
    };
  }

  const emailAddressElement = document.getElementById("email-address");
  const copyEmailButton = document.getElementById("copy-email-button");
  const copyFeedbackElement = document.getElementById("copy-feedback");

  if (copyEmailButton && emailAddressElement && copyFeedbackElement) {
    copyEmailButton.addEventListener("click", () => {
      const email = emailAddressElement.href.replace("mailto:", "");
      navigator.clipboard
        .writeText(email)
        .then(() => {
          copyFeedbackElement.textContent = "Copied!";
          setTimeout(() => {
            copyFeedbackElement.textContent = "";
          }, 2000);
        })
        .catch((err) => {
          console.error(
            "Failed to copy email using navigator.clipboard: ",
            err
          );
          copyFeedbackElement.textContent = "Failed, trying fallback...";
          // Fallback for older browsers or if Clipboard API fails
          try {
            const textArea = document.createElement("textarea");
            textArea.value = email;
            // Styling to ensure it's part of the DOM but not visible and can be focused
            textArea.style.position = "fixed";
            textArea.style.top = "-9999px"; // Off-screen
            textArea.style.left = "-9999px"; // Off-screen
            textArea.style.opacity = "0"; // Visually hidden
            // No readonly attribute needed here, as we want to select its content
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select(); // Select the text
            const successful = document.execCommand("copy"); // Attempt to copy
            document.body.removeChild(textArea); // Clean up

            if (successful) {
              copyFeedbackElement.textContent = "Copied (fallback)!";
            } else {
              copyFeedbackElement.textContent = "Copy not supported";
              console.error("Fallback document.execCommand failed");
            }
          } catch (fallbackErr) {
            console.error("Fallback copy mechanism failed: ", fallbackErr);
            copyFeedbackElement.textContent = "Copy not supported";
          }
          setTimeout(() => {
            copyFeedbackElement.textContent = "";
          }, 2000);
        });
    });
  }

  // Intersection Observer for fade-in and slide-in animations (SINGLE INSTANCE)
  const animatedElements = document.querySelectorAll(".fade-in, .slide-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("fade-in")) {
            entry.target.classList.add("fade-in-visible");
          }
          if (entry.target.classList.contains("slide-in")) {
            entry.target.classList.add("slide-in-visible");
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });
});
