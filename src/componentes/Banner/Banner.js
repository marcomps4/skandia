
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../asstes/img/header-img.png";
import '../Banner/Banner.css';
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';

export const Banner = () => {
    return (
        <section className="banner" id="home">
          <Container>
            <Row className="aligh-items-center">
              <Col xs={12} md={6} xl={6}>

                    <span className="tagline">Fondo de Pensiones Obligatorias</span>
                    <h1>¡Prepara <span>tu futuro</span> desde hoy!</h1>
                      <p>Traslada tu pensión a Skandia y empieza a construir una vida financiera más estable.</p>
                  
              </Col>
              <Col xs={12} md={6} xl={6}>

                      <img src={headerImg} alt="Header Img"/>


              </Col>
            </Row>
          </Container>
        </section>
      )
    }