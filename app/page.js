import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>hello ji</h1>
      <h1>bdvs</h1>
      <Link href="/about">About Page</Link>      
      <br />  
      <Link href="/services">Services Page</Link>
      
    </div>
  );
}
