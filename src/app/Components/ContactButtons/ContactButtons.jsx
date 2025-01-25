"use client";

import styles from "./ContactButtons.module.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactButtons() {
  const phoneNumber = "3132581599";

  // Función para enviar el evento de conversión a Google
  const handleConversion = (conversionId) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: conversionId,
      });
    }
  };

  return (
    <div className={styles.contactContainer}>
      <a
        href={`tel:${phoneNumber}`}
        className={styles.contactButton}
        onClick={() => handleConversion("AW-961248864/X4F-CJSZ7ZQaEOD8rcoD")} // Reemplaza con el ID de conversión para llamadas
      >
        <FaPhoneAlt className={styles.icon} />
        Llamar
      </a>
      <a
        href={`https://wa.me/57${phoneNumber}`}
        className={styles.contactButton}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleConversion("AW-961248864/ER-dCK3k95QaEOD8rcoD")} // ID de conversión para WhatsApp
      >
        <FaWhatsapp className={styles.icon} />
        WhatsApp
      </a>
    </div>
  );
}

