import styles from "../../styles/nev.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { nevs: data },
  };
};

const Nevlist = ({ nevs }) => {
  return (
    <div>
      <h1>Nev List</h1>
      {nevs.map((nev) => (
        <Link href={`nevs/${nev.id}`} key={nev.id}>
          <div className={styles.single}>
            <h3>{nev.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Nevlist;
