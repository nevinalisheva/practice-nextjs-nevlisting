import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/favicon.ico" width={90} height={77} alt="example-img" />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/nevs">Nevlisting</Link>
    </nav>
  );
};

export default Navbar;
