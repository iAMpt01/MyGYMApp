import {userSelector, useSelector, useStore} from 'react-redux';



const Antrenori = () => {
    const {user} = useSelector((state) => ({...state}));
    return(
        <div className="container-fluid text-center">
            <link rel="stylesheet" href="style.css"></link>
            <header>
            <h1>Antrenori</h1>
            </header>
            <main>
                <section className="services-section">
                <nav>
			<ul>
            <img src={"Ant1.jpeg"} alt="Ant1" width="350" height="350" />
          Aida Muresan-XBody-(L-V):15:20:00 
    
			</ul>
		</nav>

        <nav>
        <ul>
            <img src={"Ant2.jpeg"} alt="Ant2" width="350" height="350"/>
		 Ana Pop-Yoga-(L-V):09:00-12:30
                -Aerobic(L-V):14:00-20:00
            </ul>  
        </nav>

                </section>
            </main>
        </div>
    );
};

export default Antrenori;
