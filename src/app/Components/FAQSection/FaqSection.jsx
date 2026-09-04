import React from "react";
import styles from "./FaqSection.module.css";

// Datos de las preguntas frecuentes
const faqs = [
  {
    question: "¿Qué es la interventoría de obras y por qué es importante?",
    answer: "La interventoría de obras es un proceso de supervisión técnica, administrativa y financiera que garantiza el cumplimiento de los estándares de calidad, normativas y plazos en un proyecto de construcción.",
  },
  {
    question: "¿Cuál es la diferencia entre interventoría y supervisión de obras?",
    answer: "La interventoría supervisa la ejecución de la obra desde un punto de vista técnico, administrativo y financiero, asegurando el cumplimiento de contratos y normativas.",
  },
  {
    question: "¿Qué normativas se deben cumplir en el diseño estructural en Colombia?",
    answer: "El diseño estructural debe cumplir con el Reglamento Colombiano de Construcción Sismo Resistente (NSR-10), el Código de Construcción de Colombia y los estándares del Ministerio de Vivienda.",
  },
  {
    question: "¿Qué incluye el servicio de elaboración de pliegos de condiciones?",
    answer: "Incluye la definición detallada de los requisitos técnicos, administrativos y contractuales que deben cumplir los contratistas en un proyecto.",
  },
  {
    question: "¿Por qué es importante el recibo de zonas comunes en propiedad horizontal (PH)?",
    answer: "Permite verificar que las áreas entregadas cumplan con las especificaciones del proyecto y la normativa vigente, asegurando funcionalidad y seguridad.",
  },
  {
    question: "¿Cómo pueden los informes técnicos ayudar en la toma de decisiones de un proyecto?",
    answer: "Los informes técnicos proporcionan un análisis detallado del estado de una obra, identificando riesgos y áreas de mejora para decisiones informadas.",
  },
];

export default function FAQSection() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Preguntas Frecuentes</h2>

      {faqs.map((faq, index) => (
        <details key={index} className={styles.item}>
          <summary className={styles.summary}>
            <span className={styles.question}>{faq.question}</span>
            <span className={styles.icon} aria-hidden="true">
              &#9662;
            </span>
          </summary>
          <div className={styles.answer}>{faq.answer}</div>
        </details>
      ))}
    </div>
  );
}
