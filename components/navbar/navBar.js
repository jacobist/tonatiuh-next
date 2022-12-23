import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import style from './navBar.module.css'

// list for dynamic Navigation Menu Items
const menuList = [
  {page: 'Portraits', href: "/portraits"},
  {page: 'Couples', href:'/couples'},
  {page: 'Collection', href:'/collection'},
  {page: 'Booking', href:'/booking'}
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
        <ul className={style.navlinks}>
          <li className={router.pathname == "/" ? `${style.active}` : ""}>
            <Link href="/">Home</Link>
          </li>
          {menuList.map((item) => {
            return (
              <li
                key={item.page}
                className={router.pathname == `${item.href}` ? `${style.active}` : ""}
              >
                <Link href={item.href}>{item.page}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}