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
            <div className={styles["line-break-card"]}>
              <Card>
                <div className="line-break">
                  <p>
                    <b>WEB PROJECTS</b>
                  </p>
                  <div className="line-break">
                    <div>
                      <p>
                        <b>Alura</b>
                      </p>
                      <a href="https://aluraplus-one-ashen.vercel.app/">
                        <p>
                          Alura+ - (HTML/CSS){" "}
                          <span className="p-size-small">(2023)</span>
                        </p>
                      </a>
                      <a href="https://alurabooks-fawn-sigma.vercel.app/">
                        <p>
                          Alura Book - (HTML/CSS){" "}
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
                          Lobo - (HTML/CSS){" "}
                          <span className="p-size-small">(2023)</span>
                        </p>
                      </a>
                      <a href="/">
                        <p>
                          BikCraft (HTML/CSS/JS)
                          <span className="p-size-small">(2023)</span>
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="line-break">
                  <p>
                    <b>MUSIC</b>
                  </p>
                  <Link href="https://www.instagram.com/alteredgravity/">
                    <p>Altered Gravity (instagram)</p>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
      </main>
    </>
  );
}
