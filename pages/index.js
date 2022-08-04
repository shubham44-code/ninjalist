import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Sint aute officia nisi ipsum. Non amet laborum ex eu nulla cillum dolore
        eiusmod ad velit id. Ullamco aliquip anim non ipsum est pariatur tempor
        ex commodo sint. Dolore culpa pariatur anim ipsum.
      </p>
      <p>
        Sint aute officia nisi ipsum. Non amet laborum ex eu nulla cillum dolore
        eiusmod ad velit id. Ullamco aliquip anim non ipsum est pariatur tempor
        ex commodo sint. Dolore culpa pariatur anim ipsum.
      </p>
      <Link href="/ninjas">See Ninja Listing</Link>
    </div>
  );
}
