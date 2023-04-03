import imgBg from "../../assets/img-bg.png";
import imgLogo from "../../assets/logo.png";
import ButtonFacebook from "../../components/Buttons/ButtonFacebook";
import ButtonGoogle from "../../components/Buttons/ButtonGoogle";
import "./styles.css";

const LoginPage = () => {
  return (
    <div className="bg-login">
      <div className="login-screen">
        <section
          style={{
            backgroundImage: `url(${imgBg})`,
          }}
          className="bg-cover"
        >
          <div className="bg-opacity">
            <div className="prime-title">
              <img src={imgLogo} alt="Logo" />
              <div>
                A rede social favorita para <br /> a adoção de pets.
              </div>

              <div>Não compre, adote!</div>
            </div>
          </div>
        </section>
        <section className="form-wrapper">
          <div className="form-content">
            <div className="form-text">
              <h1>Faça seu cadastro!</h1>
              <ButtonGoogle />
              <ButtonFacebook />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
