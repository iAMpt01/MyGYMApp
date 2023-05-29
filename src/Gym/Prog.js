import {userSelector, useSelector, useStore} from 'react-redux';



const Prog = () => {
    const {user} = useSelector((state) => ({...state}));
    return(
        <div className="container-fluid text-center">
            <link rel="stylesheet" href="style.css"></link>
            <header>
            <h1>Clasele noastre</h1>
            </header>
            <main>
                <section className="services-section">
                <nav>
			<ul>
            <img src={"yoga.jpg"} alt="Yoga" width="350" height="350" align="right"/>
          
			</ul>
		</nav>

        <nav>
        <ul>
            <img src={"XBody.jpg"} alt="XBody" width="350" height="350"align="left"/>
			</ul>  
        </nav>

        <nav>
        <ul>
            <img src={"aerobic.jpg"} alt="XBody" width="350" height="350"align="under"/>
			</ul>
        </nav>
                </section>
            </main>
        </div>
    );
};

export default Prog;
