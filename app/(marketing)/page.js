import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>hello ji</h1>
      <Link href="/about">About Page</Link>      
      <br />  
      <Link href="/services">Services Page</Link>
      <br />
      <Link href="/blogs">Blog Page</Link>
      <br />
      <Link href="/files">Files Page</Link>
      
    </div>
  );
}
