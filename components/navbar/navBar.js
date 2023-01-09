import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import style from './navBar.module.css'
import generic from '../../styles/generic.module.css'
import { FaFacebookF, FaInstagram } from "react-icons/fa";

// list for dynamic Navigation Menu Items
const menuList = [
  {page: 'Portraits', href: "/portraits"},
  {page: 'Couples', href:'/couples'},
  {page: 'Collection', href:'/collection'}
]

export default function Navbar() {
// for active link tracking
  const router = useRouter()
  return (
    <>
      <a href="#main" className={style.linktomain}>
        Skip to main content
      </a>
      <nav className={style.navbar}>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className={style.vercelLogo}
          width={100}
          height={24}
          priority
        />
        <ul className={style.links}>
          <li className={router.pathname == "/" ? `${style.active}` : ""}>
            <Link href="/">Home</Link>
          </li>
          {/* dynamic menu item links*/}
          {menuList.map((item) => {
            return (
              <li
                key={item.page}
                className={
                  router.pathname == `${item.href}` ? `${style.active}` : ""
                }
              >
                <Link href={item.href}>{item.page}</Link>
              </li>
            );
          })}
          <li>
            <a href="#">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li>
            <Link className={generic.ctaContrast} href='/booking'>Book A Session</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}