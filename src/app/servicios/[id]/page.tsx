import fs from "fs";
import path from "path";
import Navbar from "@/app/Components/Navbar/Navbar";
import styles from "./serviciopage.module.css";
import Image from "next/image";
import ContactButtons from "@/app/Components/ContactButtons/ContactButtons";

type Servicio = {
  id: string;
  title: string;
  description: string;
  descripcionlarga: string;
  services: { title: string; description: string }[];
  benefits: string[];
  testimonials: {
    client: string;
    project: string;
    feedback: string;
    image: string;
  }[];
  faqs: { question: string; answer: string }[];
  Proyectosrealizados: { title: string; description: string; image: string }[];
  case_studies: { title: string; description: string; image: string }[];
  statistics: {
    years_of_experience: number;
    completed_projects: number;
    satisfied_clients: number;
    cost_reduction_average: string;
  };
 

  images: { title: string;  url: string }[];
  blog: { title: string; excerpt: string; image: string; url: string }[];
  contact: {
    phone: string;
    email: string;
    address: string;
    map_location: string;
  };

  chat: { whatsapp: string; live_chat: boolean };
};

export default async function ServicioPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const filePath = path.join(process.cwd(), "public", "data", "services.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const servicios: Servicio[] = JSON.parse(fileContents);

  const servicio = servicios.find((s) => s.id === id) || null;

  if (!servicio) {
    return <h1 className={styles.error}>Página no encontrada</h1>;
  }

  return (
    <div className={styles.containerdiv}>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.title}>{servicio.title}</h1>
        <p className={styles.description}>{servicio.description}</p>
        <p className={styles.descriptionlarga}>{servicio.descripcionlarga}</p>

     {/* Casos de éxito */}
 <section className={styles.sectionexito}>
          <h2 className={styles.subtitle}>Casos de Éxito</h2>

          <div className={styles.caseStudiesContainer}>
            {servicio.case_studies.map((c, index) => {
              const imageSrc = c.image.includes("cloudinary")
                ? c.image
                : `/${c.image}`;

              return (
                <div key={index} className={styles.caseStudy}>
                  <Image
                    src={imageSrc}
                    alt={c.title}
                    width={300}
                    height={200}
                    className={styles.caseImage}
                    unoptimized={c.image.includes("cloudinary")}
                  />
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                </div>
              );
            })}
          </div>
        </section>


        {/* Servicios */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Nuestros Servicios</h2>
          <ul className={styles.list}>
            {servicio.services.map((s, index) => (
              <li key={index} className={styles.listItem}>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Optimiza tu Proyecto con Expertos en el Area ✅
          </h2>
          📞 ¡Agenda tu consulta hoy mismo y lleva tu proyecto al siguiente
          nivel! 💼✨
          <div className={styles.chatButtons}>
            <a
              href={servicio.chat.whatsapp}
              target="_blank"
              className={styles.whatsappButton}
            >
              WhatsApp
            </a>
          </div>
        </section>
 
        {/* Beneficios */}
        <section className={styles.sectionfaq}>
          <h2 className={styles.subtitle}>Preguntas Frecuentes</h2>
          <ul className={styles.list}>
            {servicio.faqs.map((faq, index) => (
              <li key={index} className={styles.listItemfaq}>
                <h3 className={styles.faqQuestion}>{faq.question}</h3>{" "}
                {/* Muestra la pregunta */}
                <p className={styles.faqAnswer}>{faq.answer}</p>{" "}
                {/* Muestra la respuesta */}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.sectionblog}>
  <h2 className={styles.subtitle}>Proyectos Realizados</h2>
  <div className={styles.blogContainer}>
    {servicio?.Proyectosrealizados?.map((study, index) => (
      <div key={index} className={styles.blogPost}>
        <Image
          src={study.image}
          alt={study.title}
          width={300}
          height={200}
          className={styles.galleryImage}
          unoptimized
        />
        <h3 className={styles.imageTitle}>{study.title}</h3>
        <p className={styles.imageDescription}>{study.description}</p>
      </div>
    ))}
  </div>
</section>

        {/* Beneficios */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Beneficios</h2>
          <ul className={styles.list}>
            {servicio.benefits.map((benefit, index) => (
              <li key={index} className={styles.listItem}>
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        {/* Testimonios */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Lo que dicen nuestros clientes</h2>
          {servicio.testimonials.map((t, index) => {
            const imageSrc = t.image.includes("cloudinary")
              ? t.image
              : `/${t.image}`;
            return (
              <div key={index} className={styles.testimonial}>
                <Image
                  src={imageSrc}
                  alt={t.client}
                  width={100}
                  height={100}
                  className={styles.testimonialImage}
                  unoptimized={t.image.includes("cloudinary")}
                />
                <p>
                  <strong>
                    {t.client} ({t.project}):
                  </strong>{" "}
                  {t.feedback}
                </p>
              </div>
            );
          })}
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Impulsa tu Proyecto con Nuestra Consultoría Especializada ✨
          </h2>
          📞 ¡Contáctanos hoy y construyamos juntos un proyecto inolvidable! ✅
          <div className={styles.chatButtons}>
            <a
              href={servicio.chat.whatsapp}
              target="_blank"
              className={styles.whatsappButton}
            >
              WhatsApp
            </a>
          </div>
        </section>
        {/* Blog */}
        <section className={styles.sectionblog}>
          <h2 className={styles.subtitle}>Blog</h2>

          <div className={styles.blogContainer}>
            {servicio.blog.map((post, index) => {
              const imageSrc = post.image.startsWith("blog/")
                ? post.image.replace("blog/", "")
                : post.image;

              return (
                <div key={index} className={styles.blogPost}>
                  <Image
                    src={imageSrc}
                    alt={post.title}
                    width={300}
                    height={200}
                    className={styles.blogImage}
                    unoptimized={imageSrc.includes("cloudinary")}
                  />
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a href={post.url} className={styles.blogLink}>
                    Leer más
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contacto */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Contacto</h2>
          <p>
            <strong>Teléfono:</strong> {servicio.contact.phone}
          </p>
          <p>
            <strong>Email:</strong> {servicio.contact.email}
          </p>
          <p>
            <strong>Dirección:</strong> {servicio.contact.address}
          </p>
          <iframe
            src={servicio.contact.map_location}
            className={styles.map}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        {/* Chat */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Haz que tu proyecto sea un éxito con nuestra asesoría experta.
            ¡Contáctanos ahora!
          </h2>
          <div className={styles.chatButtons}>
            <a
              href={servicio.chat.whatsapp}
              target="_blank"
              className={styles.whatsappButton}
            >
              WhatsApp
            </a>
          </div>
        </section>
      </main>
      <ContactButtons />
    </div>
  );
}
