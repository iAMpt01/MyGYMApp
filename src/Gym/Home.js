import {userSelector, useSelector, useStore} from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';




const Home = () => {
    const { user } = useSelector((state) => ({ ...state }));
  
    return (
      <div className="container-fluid text-center">
        <header></header>
        <main>
          <section className="hero-section">
            <h1>BodyWorks</h1>
            <p>"In here we will help you to shape and build your ideal body and live up your life to the fullest."</p>
          </section>
          <section className="about-section">
            <h2>Program</h2>
            <p>L-V : 09:00-20:00</p>
          </section>
          <section className="why-section">
            <h2>De ce să alegi BodyWorks?</h2>
            <p>Un spațiu exclusivist, premium, dotat cu aparate performanțe, de ultima generație, ce aparțin unor producători renumiți că: Hoist, Prime, Nebula, Atlantis, Cybex, Eleiko, te asteaptam să îți descoperi și să îți desfășori pasiunea pentru sportul de calitate. Serviciile noastre se adresează unui public select, acestea atingând un nivel superior de calitate.</p>
            <nav>
              <ul></ul>
            </nav>
          </section>
  
          {/* Slider section */}
          <section className="slider-section">
            <Carousel>
              <div>
                <img src="slider.jpeg" alt="Image 1" />
              </div>
              <div>
                <img src="slider2.jpeg" alt="Image 2" />
              </div>
              <div>
                <img src="slider3.jpg" alt="Image 3" />
              </div>
            </Carousel>
          </section>
        </main>
      </div>
    );
  };
  
  export default Home;
  
