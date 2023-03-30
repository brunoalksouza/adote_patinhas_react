import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import CardList from "../../components/CardList"
import './styles.css'

function Interests () {
    return (
        <div className="interests">
            <NavBar/>
            <div className="interests-cardList">
                <CardList/>
                
            </div>
            <Footer/>
        </div>
    );
}

export default Interests