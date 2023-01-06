export const getStaticPaths = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map((nev) => {
        return { params: {id: nev.id.toString()}}
        
    })
    return {paths, fallback: false}
}

export const getStaticProps = async (context) => {
    const id = context.params.id
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  return {
    props: { nev: data },
  };
};

const Details = ({nev}) => {
    return ( 
    <div>
        <h1>{nev.name}</h1>
        <p>{nev.email}</p>
        <p>{nev.website}</p>
        <p>{nev.address.city}</p>

    </div> );
}
 
export default Details;