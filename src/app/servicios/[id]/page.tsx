
import { getServicioById, getAllServicios, getMetadata  } from "@/utils/getServicios"; 
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/app/Components/Navbar/Navbar";
import styles from "./serviciopage.module.css";
import ContactButtons from "@/app/Components/ContactButtons/ContactButtons";
import Image from "next/image";



export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  // Esperamos a que `params` se resuelva, ya que es una promesa
  const { id } = await params;

  // Obtenemos el servicio usando el ID
  const servicio = await getServicioById(id);

  // Si no existe el servicio, devolvemos metadatos básicos
  if (!servicio) {
    return {
      title: "Servicio no encontrado",
      description: "El servicio solicitado no existe.",
    };
  }
  const metadata = getMetadata(servicio);
  // Usamos la función getMetadata() para obtener los metadatos del servicio
  return metadata;

}

export async function generateStaticParams() {
  const servicios = await getAllServicios();
  return servicios.map((servicio) => ({ id: servicio.id }));
}

export default async function ServicioPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // 👈 Ahora se espera `params` antes de usar `id`

  const servicio = await getServicioById(id);
  if (!servicio) return notFound();


  return (
    <>
 

 <div className={styles.containerdiv}>
      <Navbar />
      <main className={styles.container}>
        <h1 className={styles.title}>{servicio.title}</h1>
        <Image
                    src={servicio.imagenprincipal}
                    alt={servicio.title}
                    width={1000}
                    height={500}
                    className={styles.imagenprincipal}
                    
                  />
        <p className={styles.description}>{servicio.description}</p>
        <p className={styles.descriptionlarga}>{servicio.parrafo1}</p>
        <p className={styles.descriptionlarga}>{servicio.parrafo2}</p>
        <p className={styles.descriptionlarga}>{servicio.parrafo3}</p>
        <p className={styles.descriptionlarga}>{servicio.parrafo4}</p>

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
                    height={500}
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
               
                <p className={styles.faqAnswer}>{faq.answer}</p>{" "}
               
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
          <h2 className={styles.subtitle}>Temas Relacionados</h2>

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
    </>
  );
}


