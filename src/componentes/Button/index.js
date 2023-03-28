import './Button.css'

const Button = (props) => {

    const corFundo = { backgroundColor: props.corFundo }

    return (
            <button style={corFundo} className="button">
                {props.icon}
                {props.children}
            </button>

    )
}

export default Button;