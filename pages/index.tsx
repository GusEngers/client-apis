import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Api's Portfolio"}</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className={styles.information}>
          <h1>{"Client Api's"}</h1>
          <p>
            Por la necesidad de un entorno más cómodo y práctico, para que el
            usuario pueda experimentar los distintos proyectos Web Back-End que
            he realizado, nace <b>{"Client Api's"}</b>. Con esta web podrá
            acceder a la información de los proyectos junto con herramientas
            para sus respectivas pruebas y redirecciones a su respectivo
            repositorio como así también a su posible documentación.
          </p>
        </div>
        <div className={styles.projects}></div>
      </main>
    </>
  );
}
