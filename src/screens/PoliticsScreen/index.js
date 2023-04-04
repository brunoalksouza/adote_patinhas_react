import "./politicsscreen.css";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import Politics from "../../components/Politics"    


const PoliticsScreen = () => {
    return <section className="politicsscreen">
        < NavBar />
        <div className="politics">
            <Politics/>
        </div>
        <div className="footer-politicsscreen">
            <Footer />
        </div>
    </section>
}

export default PoliticsScreen;
 
 