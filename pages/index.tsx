import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nevlist | Home</title>
        <meta name="keywords" content="nev" />
      </Head>

      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
          doloremque sit architecto blanditiis est cum eius expedita aspernatur
          quasi repellat, facere dolorem quo unde pariatur perferendis, in
          suscipit, facilis maxime.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
          doloremque sit architecto blanditiis est cum eius expedita aspernatur
          quasi repellat, facere dolorem quo unde pariatur perferendis, in
          suscipit, facilis maxime.
        </p>
        <Link href="/nevs" className={styles.btn}>
          See Nevlisting
        </Link>
      </div>
    </>
  );
}
