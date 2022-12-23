import '../styles/globals.css'
import Navbar from "../components/navbar/navBar";
import Footer from '../components/footer/footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
