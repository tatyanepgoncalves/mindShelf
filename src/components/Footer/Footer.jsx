import { Facebook, Twitter, Youtube, Linkedin, Instagram } from "lucide-react"
import F from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <section className={F.footerTop}>
        <p>4002-8922</p>

        <div className={F.socialMedia}>
          <a href="#"><Facebook /></a>
          <a href="#"><Twitter /></a>
          <a href="#"><Youtube /></a>
          <a href="#"><Linkedin /></a>
          <a href="#"><Instagram /></a>
        </div>
      </section>

      <section className={F.footerBottom}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
      </section>
    </footer>
  )
}
