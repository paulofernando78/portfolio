import { Card } from "@/components/Card";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="line-break">
        <p className={styles["welcome"]}>Welcome to my space</p>
        <div className={styles["flex-50px"]}>
          <Card>
            <div className="line-break">
              <p>
                <b>Web Projects</b>
              </p>
              <div>
                <Link href="https://html-css-origamid.vercel.app/">
                  <p>
                    Lobo - (HTML/CSS){" "}
                    <span className="p-size-small">(2023)</span>
                  </p>
                </Link>
                <Link href="/">
                  <p>
                    BikCraft (HTML/CSS/JS)
                    <span className="p-size-small">(2023)</span>
                  </p>
              </Link>
              </div>
            </div>
          </Card>
          <Card>
            <div className="line-break">
              <p>
                <b>Music</b>
              </p>
              <Link href="https://www.instagram.com/alteredgravity/">
                <p>Altered Gravity (instagram)</p>
              </Link>
            </div>
          </Card>
        </div>
      </main>
    </>
  );
}
