import { Container, Row, Col,  } from "react-bootstrap";
import '../Testimonios/Testimonio.css';
import comillas from '../../asstes/img/icono_5.png';

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export const Testimonio = () => {
    const data = [
        {
          video: "https://www.youtube.com/embed/jY-D-sBjlyk?si=YiUQSH10lLjkZYzp",
          testimonio: "La planeación es la clave para cumplir todos tus objetivos finanacieros.",
          mensaje: "Vinculate a nuestro fondo de pensiones obligatorias y vive la vida con la que sueñas",

        },
        {
            video: "https://www.youtube.com/embed/jY-D-sBjlyk?si=YiUQSH10lLjkZYzp",
            testimonio: "La planeación es la clave para cumplir todos tus objetivos finanacieros.",
          mensaje: "Vinculate a nuestro fondo de pensiones obligatorias y vive la vida con la que sueñas",

        },
        {
          
            video: "https://www.youtube.com/embed/jY-D-sBjlyk?si=YiUQSH10lLjkZYzp",
            testimonio: "La planeación es la clave para cumplir todos tus objetivos finanacieros.",
          mensaje: "Vinculate a nuestro fondo de pensiones obligatorias y vive la vida con la que sueñas",

        },
        {
         
            video: "https://www.youtube.com/embed/jY-D-sBjlyk?si=YiUQSH10lLjkZYzp",
            testimonio: "La planeación es la clave para cumplir todos tus objetivos finanacieros.",
          mensaje: "Vinculate a nuestro fondo de pensiones obligatorias y vive la vida con la que sueñas",

        },
      ]


    return (
        <section className="testimonio" >

<Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}

      >
       {
        data.map(({video,testimonio,mensaje}, index) =>{
          return(
            <SwiperSlide key={index} className='testimonial'>
                <Container>
                <Row className="aligh-items-center">
                <Col xs={12} md={12} xl={6}>
            <div className='testimonial-video'>
            <iframe src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </Col>
            <Col xs={12} md={12} xl={6}>
                <div className="testimonial-texto">
                <span><img src={comillas} alt="comilllas"/></span>
                <p className="resaltado">{testimonio}</p>
                <p className="mensaje">{mensaje}</p>
                </div>

            </Col>
           
              </Row>
              </Container>
          </SwiperSlide>
          )
        }
        )
       }

        
      </Swiper>
     
        </section>
      );
      

}