import "./globals.css";
import './fanta.css'
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";

export const metadata = {
  title: "Smolstore",
  description: "A super cool store for programmers and productivity fiends!",
};

export default function RootLayout({ children }) {
  return (

      <html lang="en">
        <Head />
        <body >
          <div id="portal" />
          <div id="app" >
            <header>
              <div className="header-content">
                <Link href={'/'}>
                  <h1>KBstore</h1>
                </Link>
                <h5 className="mid-text">- Cool stuff for cool people -</h5>
                <Cart />
              </div>
            </header>

            <main>
              {children}
            </main>
            <div className="hr" />

            <footer>
              <div className="email-container">
                <h5>Get a sneak peak at new additions to the store, special offers, and so much more.</h5>
                <EmailInput />
              </div>

              <div className="links-container">         
                <div>
                  <h3>Store</h3>
                  <Link href={'/'}>Home</Link>
                  <Link href={'/cart'}>Cart</Link>
                </div>
                <div>
                  <h3>Support</h3>
                  <Link href={'/'}>Contact</Link>
                  <Link href={'/'}>FAQs</Link>
                </div>
              </div>

              <div className="socials">
                <p>© Kaushal Bhattarai, 2025<br />Built with NextJS & FantaCSS🔥</p>
                <div className="social-links">
                  <Link href={'https://github.com/imkaushal10/KbStore'} target="_blank"><i className="fa-brands fa-github"></i></Link>
                </div>
              </div>
            </footer>
          </div>
        </body>
      </html>
  );
}
