const translations = {
  hr: {
    "contact-description":
      "Za upite, zahtjeve za ponude ili mogućnosti suradnje, obratite nam se koristeći dolje navedene kontakt podatke.",
    "company-name": "VANGUARD SYSTEMS",
    "company-tagline": "Vaša vizija, naša misija.",
    "hero-title": "Profesionalne elektro-instalacijske usluge",
    "hero-description": "Donosimo izvrsnost u električnim rješenjima",
    "cta-button": "Zatražite ponudu",
    "about-title": "O Vanguard Systems-u",
    "services-title": "Naše usluge",
    "service-commercial-title": "Komercijalni projekti",
    "service-commercial-description":
      "Profesionalna električna rješenja za tvrtke svih veličina. Od planiranja do instalacije, naš stručni tim osigurava sigurnost, pouzdanost i dugoročno zadovoljstvo u vašim poslovnim prostorima.",
    "service-industrial-title": "Industrijska rješenja",
    "service-industrial-description":
      "Napredne električne usluge za industrijske objekte i operacije. Nudimo prilagođena rješenja za složene industrijske potrebe, osiguravajući maksimalnu učinkovitost i usklađenost sa standardima.",
    "subcontracting-title": "Podugovaranje usluga",
    "subcontracting-description":
      "Nudimo profesionalne podugovaračke usluge za električne instalacije u Njemačkoj. Naš tim uključuje visoko kvalificirane električare s velikim iskustvom u njemačkim standardima i propisima, osiguravajući nesmetanu integraciju i izvrsne rezultate.",
    "contact-title": "Kontaktirajte nas",
    "contact-name": "Danijel Vukoja",
    "contact-role": "Direktor",
    "contact-phone": "Telefon: +385 97 663 0260",
    "contact-email": "Email: vukojadanijel@gmail.com",
    "contact-address": "Adresa: Kmanski prilaz IV 5, HR-21000 Split, Hrvatska",
    "about-description":
      "Vanguard Systems je vodeća tvrtka za elektro-instalacije posvećena pružanju visokokvalitetnih usluga našim klijentima.",
  },
  en: {
    "contact-description":
      "For inquiries, requests for quotes, or collaboration opportunities, reach out to us using the contact details below.",
    "company-name": "VANGUARD SYSTEMS",
    "company-tagline": "Your vision, our mission.",
    "hero-title": "Professional Electro-Installation Services",
    "hero-description": "Delivering Excellence in Electrical Solutions",
    "cta-button": "Get a Quote",
    "about-title": "About Vanguard Systems",
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
    "contact-name": "Danijel Vukoja",
    "contact-role": "Managing Director",
    "contact-phone": "Phone: +385 97 663 0260",
    "contact-email": "Email: vukojadanijel@gmail.com",
    "contact-address": "Address: Kmanski prilaz IV 5, HR-21000 Split, Croatia",
    "about-description":
      "Vanguard Systems is a leading electro-installation company committed to delivering high-quality services to our clients.",
  },
  de: {
    "contact-description":
      "Für Anfragen, Angebotsanforderungen oder Kooperationsmöglichkeiten kontaktieren Sie uns bitte über die unten angegebenen Kontaktdaten.",
    "company-name": "VANGUARD SYSTEMS",
    "company-tagline": "Ihre Vision, unsere Mission.",
    "hero-title": "Professionelle Elektroinstallationsdienste",
    "hero-description": "Exzellenz in elektrischen Lösungen liefern",
    "cta-button": "Ein Angebot erhalten",
    "about-title": "Über Vanguard Systems",
    "services-title": "Unsere Dienstleistungen",
    "service-commercial-title": "Gewerbliche Projekte",
    "service-commercial-description":
      "Professionelle elektrische Lösungen für Unternehmen jeder Größe. Von der Planung bis zur Installation sorgt unser Expertenteam für Sicherheit, Zuverlässigkeit und langfristige Zufriedenheit in Ihren Geschäftsräumen.",
    "service-industrial-title": "Industrielle Lösungen",
    "service-industrial-description":
      "Fortschrittliche elektrische Dienstleistungen für Industrieanlagen und -betriebe. Wir bieten maßgeschneiderte Lösungen für komplexe industrielle Anforderungen und gewährleisten maximale Effizienz und Einhaltung von Standards.",
    "subcontracting-title": "Subunternehmerleistungen",
    "subcontracting-description":
      "Wir bieten professionelle Subunternehmerleistungen für Elektroinstallationen in Deutschland an. Unser Team umfasst hochqualifizierte Elektriker mit umfangreicher Erfahrung in deutschen Standards und Vorschriften, die eine reibungslose Integration und herausragende Ergebnisse gewährleisten.",
    "contact-title": "Kontaktieren Sie uns",
    "contact-name": "Danijel Vukoja",
    "contact-role": "Geschäftsführer",
    "contact-phone": "Telefon: +385 97 663 0260",
    "contact-email": "Email: vukojadanijel@gmail.com",
    "contact-address": "Adresse: Kmanski prilaz IV 5, HR-21000 Split, Kroatien",
    "about-description":
      "Vanguard Systeme ist ein führendes Unternehmen für Elektroinstallationen, das sich der Bereitstellung hochwertiger Dienstleistungen für unsere Kunden verpflichtet hat.",
  },
};

const languageDropdown = document.getElementById("language-dropdown");

function setLanguage(language) {
  const elements = document.querySelectorAll("[data-lang-key]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-lang-key");
    if (translations[language] && translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });
}

const userLang = navigator.language.slice(0, 2);
setLanguage(translations[userLang] ? userLang : "en");

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.2, // Trigger animation when 20% of the element is visible
  };

  const fadeElements = document.querySelectorAll(".fade-in, .slide-in");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible", "slide-in-visible");
        observer.unobserve(entry.target); // Stop observing once the animation has triggered
      }
    });
  }, observerOptions);

  fadeElements.forEach((el) => observer.observe(el));

  // Detect the default language and update the dropdown value
  const userLang = navigator.language.slice(0, 2);
  const defaultLang = translations[userLang] ? userLang : "en";
  setLanguage(defaultLang);
  languageDropdown.value = defaultLang; // Ensure the dropdown reflects the detected language
});

languageDropdown.addEventListener("change", (e) => {
  setLanguage(e.target.value);
});
