import "./ButtonProfile.css";

const ButtonProfile = (props) => {
 
    const corFundo = { backgroundColor: props.corFundo }

    return (
        <button style={corFundo} className='button-profile'>{props.children}</button>
    )
}

export default ButtonProfile;