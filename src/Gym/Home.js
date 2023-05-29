import {userSelector, useSelector, useStore} from 'react-redux';

const Home = () => {
    const {user} = useSelector((state) => ({...state}));
    return(
        <div className="container-fluid text-center">
            <header>
            </header>
            <main>
                <section className="hero-section">
                    <h1>BodyWorks</h1>
                    <p>"In here we will help you to shape and build your ideal body and live up ypur life to the fullest."</p>
                
                </section>
                <section className="about-section">
                    <h2>Program</h2>
                    <p>L-V : 09:00-20:00</p>
                </section>
                
            </main>
            
        </div>
    );
};

export default Home;

