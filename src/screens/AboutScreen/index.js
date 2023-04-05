import "./aboutscreen.css";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import About from "../../components/About";
    


const AboutScreen = () => {
    return <section className="aboutscreen">
        < NavBar />
        <div className="about">
            <About/>
        </div>
        <div className="footer-aboutscreen">
            <Footer />
        </div>
    </section>
}

export default AboutScreen;
 
 