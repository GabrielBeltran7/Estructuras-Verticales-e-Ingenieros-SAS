"use client";

import styles from "./ContactButtons.module.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactButtons() {
  const phoneNumber = "3132581599";

  // Función para enviar el evento de conversión a Google
  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-961248864/ER-dCK3k95QaEOD8rcoD",
      });
    }
  };

  return (
    <div className={styles.contactContainer}>
      <a href={`tel:${phoneNumber}`} className={styles.contactButton}>
        <FaPhoneAlt className={styles.icon} />
        Llamar
      </a>
      <a
        href={`https://wa.me/57${phoneNumber}`}
        className={styles.contactButton}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick} // Llama a la función cuando el usuario haga clic
      >
        <FaWhatsapp className={styles.icon} />
        WhatsApp
      </a>
    </div>
  );
}
