
import { Container, Row, Col, Accordion} from "react-bootstrap";
import headerImg from "../../asstes/img/header-img.png";
import '../Faq/Faq.css';
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';

export const Faq = () => {
    return (
        <section className="Faq">
          <Container>
            <Row className="aligh-items-center">

            <Col xs={12} md={12} xl={12}>
             <h2 className="titulo">Preguntas frecuentes</h2>
             </Col>

              <Col xs={12} md={12} xl={12}>
              <Row className="aligh-items-center">
                <div className="Faq-contenedor">

                <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>¿Puedo Adelantar mi jubilación antes de la edad estándar?</Accordion.Header>
        <Accordion.Body>
        Si, puedes hacerlo siempre y cuando tengas suficientes ahorros y hayas cumplido con los requisitos necesarios. Sin embargo, esto sólo puedes hacerlo en fondos privados como Skandia. Conoce más sobre la pensión obligatoria <span><a href="#">aquí.</a></span>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Mi pensión puede ser heredada?</Accordion.Header>
        <Accordion.Body>
        En los fondos privados es posible heredar la pensión a familiares de hasta quinto grado. Por eso es importante ahorrar también para asegurar el futuro de tus familiares. Conoce más sobre la pensión obligatoria <span><a href="#">aquí.</a></span>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>¿A qué edad me puedo pensionar?</Accordion.Header>
        <Accordion.Body>
        En Colombia, las mujeres se pensionan a los 57 años y los hombres los 62. Pero en Skandia puedes pensionarte anticipadamente. Conoce más sobre la pensión obligatoria <span><a href="#">aquí.</a></span>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

                   

                </div>

               

              </Row>

             
              </Col>
            
            </Row>
          </Container>
        </section>
      )
    }