import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
      // router.go(-1)
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Ooooopss...</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to the{" "}
        <Link href="/" className="not-found1">
          Homepage
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
