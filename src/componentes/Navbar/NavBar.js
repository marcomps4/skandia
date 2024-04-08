import { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from '../../asstes/img/logo.png';
import navIcon1 from '../../asstes/img/nav-icon1.svg';
import navIcon2 from '../../asstes/img/nav-icon2.svg';
import navIcon3 from '../../asstes/img/nav-icon3.svg';
import '../Navbar/Navbar.css';


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (

      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <span className=" ms-auto navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
                <button className="vvd"><span>¡Quiero Hacerlo!</span></button>
            </span>
        </Container>
      </Navbar>

  )
}