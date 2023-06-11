import React from 'react';
import { useSelector } from 'react-redux';
import './About.css'; // Import the CSS file for custom styling

const About = () => {
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <div className="container-fluid text-center">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Despre Noi</h1>
          <p1 className="card-text text-box">
            Este mai mult decât o simplă sală de sport, este un cadru ideal în care vă puteți transforma visurile în realitate atunci când vine vorba de obținerea siluetei perfecte sau a unui corp frumos sculptat, cu masă musculară exact cât și unde trebuie.

            Aici veți găsi nu doar niște aparate de fitness, ci pe cele mai performanțe și de ultimă generație, alese în cunoștință de cauză de către specialiști în domeniu, care au cântărit îndelung fiecare decizie.

            Antrenorii calificați, specializați în domeniu, vă vor fi alături pe întreg parcursul, asigurându-se că obiectivele setate inițial sunt atinse în cel mai scurt timp, prin alegerea exercițiilor adecvate fiecăruia dintre voi și a unei diete alimentare corespunzătoare.

            Investiția majoră se reflectă în fiecare detaliu al spațiului nostru, iar acest lucru este cu ușurință observat și apreciat de către toți clienții noștri.

            Atmosfera motivantă este la ea acasă! Aici veți avea parte de servicii ireproșabile oferite de cea mai bună echipă, astfel încât va fi o reală plăcere să faceți sport de fiecare dată!
          </p1>
        </div>
      </div>
      <main>
        <section className="services-section">
          <nav>
            <ul>
              <img src={"slider.jpeg"} alt="Ant1" width="1250" height="550" />
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
};

export default About;
