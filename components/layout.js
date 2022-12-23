import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";


export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <a href="#main" className="link-to-main">
            Skip to main content
          </a>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}
