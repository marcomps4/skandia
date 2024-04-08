
import { Container, Row, Col} from "react-bootstrap";
import channelImg from "../../asstes/img/channel-img.png";
import '../Channel/Channel.css';
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';

export const Channel = () => {
    return (
        <section className="Channel">
          <Container>
            <Row className="aligh-items-center">
            <Col xs={12} md={12} xl={12}>
            <h2 className="titulo">Skandia Channel</h2>
            </Col>

              <Col xs={12} md={12} xl={6} className="channel-texto" >
              
              <p>Atrévete a liberar el poder de tus finanzas con cursos sobre <b>declaración de renta, inversiones, finanzas para pareja</b>, entre muchos otros</p>
              <p>
                Recibe una experiencia de aprendizaje entretenida, <b>a tu ritmo y desde cualquier lugar.</b>
              </p>

              <button className="vvd"><span>¡Quiero Saber Más!</span></button>
              </Col>

              <Col xs={12} md={12} xl={6}>
             <img src={channelImg} alt="Header Img"/>
             </Col>
            
            </Row>
          </Container>
        </section>
      )
    }