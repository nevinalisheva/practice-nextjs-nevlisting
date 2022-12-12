import styles from "../../styles/nev.module.css";

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
        <div key={nev.id}>
          <a className={styles.single}>
            <h3>{nev.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Nevlist;
