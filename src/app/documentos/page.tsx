import type { Metadata } from "next";
import Navbar from "@/app/Components/Navbar/Navbar";
import ContactButtons from "@/app/Components/ContactButtons/ContactButtons";
import documentos from "@/app/data/documentos.json";
import styles from "./documentos.module.css";

export const metadata: Metadata = {
  title: "Documentos y Formatos Descargables | Estructuras Verticales",
  description:
    "Descarga gratis los formatos y bitácoras técnicas reales que usamos en nuestros procesos de interventoría, consultoría y recibo de zonas comunes.",
  alternates: {
    canonical: "https://www.estructurasverticales.com/documentos",
  },
};

type Documento = {
  id: string;
  titulo: string;
  descripcion: string;
  archivo: string;
  categoria: string;
  fecha: string;
};

export default function DocumentosPage() {
  const lista = documentos as Documento[];

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.title}>Documentos y Formatos Descargables</h1>
        <p className={styles.subtitle}>
          Formatos y bitácoras técnicas reales que usa nuestro equipo de
          ingeniería. Puedes verlos en línea o descargarlos para usarlos en
          tu propio proceso.
        </p>

        {lista.length === 0 ? (
          <p className={styles.empty}>Muy pronto vamos a publicar documentos aquí.</p>
        ) : (
          <div className={styles.grid}>
            {lista.map((doc) => (
              <article key={doc.id} className={styles.card}>
                <span className={styles.categoria}>{doc.categoria}</span>
                <h2 className={styles.cardTitle}>{doc.titulo}</h2>
                <p className={styles.cardDescription}>{doc.descripcion}</p>
                <div className={styles.actions}>
                  <a
                    href={`/documentos/${doc.archivo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnPrimary}
                  >
                    📄 Ver
                  </a>
                  <a
                    href={`/documentos/${doc.archivo}`}
                    download
                    className={styles.btnSecondary}
                  >
                    ⬇️ Descargar
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
      <ContactButtons />
    </>
  );
}
