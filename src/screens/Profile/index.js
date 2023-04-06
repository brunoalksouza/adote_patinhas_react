import "./Profile.css";
import CardUser from "../../components/Profile/CardUser";
import Title from "../Profile/elements/Title/index";
import ButtonProfile from "../../components/Profile/ButtonProfile";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CardList from "../../components/Cards/CardList";

const Profile = () => {
    return <section className='profile-screen'>
        < NavBar />       
        
        <div className='profile'>
            < CardUser />
            
            <div className='pets-cards'>
                < Title />
                < CardList />                
                <ButtonProfile>CADASTRE SEU BICHINHO</ButtonProfile>                
            </div>
        </div>
        <div>
            <Footer />
        </div>
        
    </section>

}

export default Profile;