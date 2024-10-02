import { Card } from "@/components/Card";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <div className={styles["main-bg"]}>
          <h1 className={styles["welcome"]}>Welcome to my space</h1>
        </div>
        <div className="padding-10px">
          <div className={styles["flex-50px"]}>
            <div className="line-break">
              <Card>
                <p>
                  <b>LESSONS</b>
                </p>
              </Card>
              <div>
                <a href="https://html-css-js-hub.vercel.app/">HTML / CSS / JS Hub</a>
              </div>
              <Card>
                <p>
                  <b>WEB PROJECTS</b>
                </p>
              </Card>
              <div className="line-break">
                <div>
                  <p>
                    <b>Alura</b>
                  </p>
                  <a href="https://aluraplus-one-ashen.vercel.app/">
                    <p>
                      Alura+ (HTML/CSS){" "}
                      <span className="p-size-small">(2023)</span>
                    </p>
                  </a>
                  <a href="https://alurabooks-fawn-sigma.vercel.app/">
                    <p>
                      Alura Book (HTML/CSS){" "}
                      <span className="p-size-small">(2023)</span>
                    </p>
                  </a>
                </div>
                <div>
                  <p>
                    <b>Origamid</b>
                  </p>
                  <a href="https://html-css-origamid.vercel.app/">
                    <p>
                      Lobo (HTML/CSS){" "}
                      <span className="p-size-small">(2023)</span>
                    </p>
                  </a>
                  <a href="https://origamid-bikcraft-cyan.vercel.app/">
                    <p>
                      BikCraft (HTML/CSS/JS)
                      <span className="p-size-small">(2023)</span>
                    </p>
                  </a>
                  <a href="https://origamid-bikcraft-final.vercel.app/">
                    <p>
                      BikCraft
                      <span className="p-size-small"> (2024)</span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="line-break">
              <Card>
                <p>
                  <b>MUSIC</b>
                </p>
              </Card>
              <Link href="https://www.instagram.com/alteredgravity/">
                <p>Altered Gravity (instagram)</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
