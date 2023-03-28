import "./Profile.css";
import CardUser from "../../components/Profile/CardUser";
import Title from "../Profile/elements/Title/index";
import ButtonProfile from "../../components/Profile/ButtonProfile";

const Profile = () => {
    return <section className='profile-screen'>
        <div className='header'></div>
        <div className='profile'>
            < CardUser />
            <div className='pets-cards'>
                < Title />
                <div className='registered-pets1'>
                    <div className='card'></div>
                    <div className='card'></div>
                    <div className='card'></div>
                    <div className='card'></div>
                    <div className='card'></div>
                    <div className='card'></div>
                    <div className='card'></div>
                    <div className='card'></div>
                </div>
                <div>
                    <ButtonProfile>CADASTRE SEU BICHINHO</ButtonProfile>
                </div>
            </div>
        </div>
        <div className='footer'></div>
    </section>

}

export default Profile;