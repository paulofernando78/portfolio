import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={`line-break ${styles["page"]}`}>
      <h1>Hey, I'm Paulo. What's shaking?</h1>
      <h2>Projects</h2>
      <Link href="https://cyberwheel-nextjs.vercel.app/">Cyber Wheel</Link>
    </div>
  );
}
