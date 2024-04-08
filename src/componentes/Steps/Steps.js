
import { Container, Row, Col} from "react-bootstrap";
import pasosImg from "../../asstes/img/pasos-img.png";
import '../Steps/Steps.css';
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';

export const Steps = () => {
    return (
        <section className="Steps">
          <Container>
            <Row className="aligh-items-center">

            <Col xs={12} md={12} xl={12}>
             <h2 className="titulo">Pasos para trasladar tu pensión a Skandia</h2>
             </Col>

            <Col xs={12} md={12} xl={6}>
             <img src={pasosImg} alt="Header Img"/>
             </Col>

              <Col xs={12} md={12} xl={6}>
              <Row className="aligh-items-center">

                <div className="steps-pension">

                    <span>1</span>
                    <div className="guion"></div>
   
                    <div className="steps-content">
                    <h4>Documentos</h4>
                            <p>Ten a la mano tu documento de identidad e información de tu empleador, Número de identificación Tributario (NIT) de la empresa.</p>
                    </div>

                </div>

                <div className="steps-pension">
                    <span>2</span>
                    <div className="guion"></div>
                    <div className="steps-content">
                    <h4>Validación de Identidad</h4>
                            <p>Ten a la mano tu documento de identidad e información de tu empleador, Número de identificación Tributario (NIT) de la empresa.</p>
                    </div>
                </div>

                <div className="steps-pension">
                    <span>3</span>
                    <div className="guion"></div>
                    <div className="steps-content">
                    <h4>Traslados</h4>
                            <p>Ten a la mano tu documento de identidad e información de tu empleador, Número de identificación Tributario (NIT) de la empresa.</p>
                    </div>
                </div>

                <div className="steps-pension">
                    <span>4</span>
                    <div className="steps-content">
                    <h4>Derecho de Retracto</h4>
                            <p>Ten a la mano tu documento de identidad e información de tu empleador, Número de identificación Tributario (NIT) de la empresa.</p>
                    </div>
                </div>

              </Row>

             
              </Col>
            
            </Row>
          </Container>
        </section>
      )
    }