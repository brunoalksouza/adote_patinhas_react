import imgBg from "../assets/img-bg.png";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="bg-login">
      <div className="login-screen">
        <section
          style={{
            backgroundImage: `url(${imgBg})`,
          }}
          className="bg-cover"
        />
        <section className="form-wrapper"></section>
      </div>
    </div>
  );
};

export default LoginPage;
