"use client";

import styles from "./ContactButtons.module.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactButtons() {
  const phoneNumber = "3132581599";

  const handleGTMEvent = (eventLabel, url, newTab = false) => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "contact_click",
        eventCategory: "Contacto",
        eventAction: "Click",
        eventLabel: eventLabel,
      });
      console.log("Evento enviado a GTM:", eventLabel);

      // Retrasar la redirección para dar tiempo a que GTM lo capture
      setTimeout(() => {
        if (newTab) {
          window.open(url, "_blank", "noopener,noreferrer"); // Abre en una nueva pestaña
        } else {
          window.location.href = url;
        }
      }, 300); // 300ms de delay
    } else {
      if (newTab) {
        window.open(url, "_blank", "noopener,noreferrer"); // Abre en una nueva pestaña
      } else {
        window.location.href = url;
      }
    }
  };

  return (
    <div className={styles.contactContainer}>
      <a
        href={`tel:${phoneNumber}`}
        className={styles.contactButton}
        onClick={(e) => {
          e.preventDefault(); // Evita redirección inmediata
          handleGTMEvent("Llamada", `tel:${phoneNumber}`);
        }}
      >
        <FaPhoneAlt className={styles.icon} />
        Llamar
      </a>

      <a
        href={`https://wa.me/57${phoneNumber}`}
        className={styles.contactButton}
        onClick={(e) => {
          e.preventDefault(); // Evita redirección inmediata
          handleGTMEvent("WhatsApp", `https://wa.me/57${phoneNumber}`, true);
        }}
      >
        <FaWhatsapp className={styles.icon} />
        WhatsApp
      </a>
    </div>
  );
}





// "use client";

// import styles from "./ContactButtons.module.css";
// import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

// export default function ContactButtons() {
//   const phoneNumber = "3132581599";

//   // Función para enviar el evento de conversión a Google
//   const handleConversion = (conversionId) => {
//     if (typeof window !== "undefined" && window.gtag) {
//       window.gtag("event", "conversion", {
//         send_to: conversionId,
//       });
//     }
//   };

//   return (
//     <div className={styles.contactContainer}>
//       <a
//         href={`tel:${phoneNumber}`}
//         className={styles.contactButton}
//         onClick={() => handleConversion("AW-961248864/X4F-CJSZ7ZQaEOD8rcoD")}       >
//         <FaPhoneAlt className={styles.icon} />
//         Llamar
//       </a>
//       <a
//         href={`https://wa.me/57${phoneNumber}`}
//         className={styles.contactButton}
//         target="_blank"
//         rel="noopener noreferrer"
//         onClick={() => handleConversion("AW-961248864/ER-dCK3k95QaEOD8rcoD")} 
//       >
//         <FaWhatsapp className={styles.icon} />
//         WhatsApp
//       </a>
//     </div>
//   );
// }


