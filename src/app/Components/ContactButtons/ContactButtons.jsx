"use client"
import styles from "./ContactButtons.module.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactButtons() {
  const phoneNumber = "3229578866";
  
  return (
    <div className={styles.contactContainer}>
      <a href={`tel:${phoneNumber}`} className={styles.contactButton}>
        <FaPhoneAlt className={styles.icon} />
        Llamar
      </a>
      <a href={`https://wa.me/57${phoneNumber}`} className={styles.contactButton} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className={styles.icon} />
        WhatsApp
      </a>
    </div>
  );
}

