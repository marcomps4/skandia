
import { Container, Row, Col } from "react-bootstrap";
import icono1 from "../../asstes/img/icono_1.png";
import icono2 from "../../asstes/img/icono_2.png";
import icono3 from "../../asstes/img/icono_3.png";
import icono4 from "../../asstes/img/icono_4.png";
import '../Escoger/Escoger.css';
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';

export const Escoger = () => {
    return (
        <section className="escoger" id="home">
          <Container>
            <Row className="aligh-items-center">

            <Col xs={12} md={12} xl={12}>
             <h2 className="titulo">¿Por qué escoger a Skandia?</h2>
             </Col>

            <Col xs={12} md={6} xl={3} className="cards">
                <div className="escoger-card h-100">
  
                <div className="escoger-content">
                <h4 className="escoger-titulo"><img src={icono1} alt="icono"/> Expertos en educación financiera</h4>
                        <p>
                        Podrás acceder a una comunidad financiera que te enseñará a tomar decisiones conscientes para tu futuro.
                        </p>
                </div>
                </div>
             </Col>

             <Col xs={12} md={6} xl={3} className="cards">
                <div className="escoger-card h-100">
  
                <div className="escoger-content">
                <h4 className="escoger-titulo"><img src={icono2} alt="icono"/>Eres tú quien decide</h4>
                        <p>
                        Decide cómo y cuándo pensionarte al cumplir los requisitos mínimos normativos.
                        </p>
                </div>
                </div>
             </Col>

             <Col xs={12} md={6} xl={3} className="cards">
                <div className="escoger-card h-100">
  
                <div className="escoger-content">
                <h4 className="escoger-titulo"><img src={icono3} alt="icono"/>Estamos alineados a tus objetivos</h4>
                        <p>
                        Un portal de clientes personalizados para hacer tu plan financiero.
                        </p>
                </div>
                </div>
             </Col>

             <Col xs={12} md={6} xl={3} className="cards">
                <div className="escoger-card h-100">
  
                <div className="escoger-content">
                <h4 className="escoger-titulo"><img src={icono4} alt="icono"/>100% digital</h4>
                        <p>
                        Sin filas, ni papeleos, todo autogestionable.
                        </p>
                </div>
                </div>
             </Col>

      
            
            </Row>
          </Container>
        </section>
      )
    }