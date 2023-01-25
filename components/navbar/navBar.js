import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import style from './navBar.module.css'
import generic from '../../styles/generic.module.css'
import { FaFacebookF, FaInstagram, FaTimes, FaBars } from "react-icons/fa";

// list for dynamic Navigation Menu Items
const menuList = [
  {page: 'Portraits', href: "/portraits"},
  {page: 'Couples', href:'/couples'},
  {page: 'Product Photography', href:'/product-photography'}
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const menuToggle = ()=> setOpen(!open)
// for active link tracking
  const router = useRouter()
  return (
    <header className={style.header}>
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
        <ul
          className={
            open
              ? `${style.links} ${style.opened}`
              : `${style.links} ${style.menuDefault}`
          }
        >
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
            <Link className={generic.ctaContrast} href="/booking">
              Book A Session
            </Link>
          </li>
        </ul>
        <button className={style.menuIcon} onClick={menuToggle}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
}