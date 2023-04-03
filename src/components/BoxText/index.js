import './BoxText.css';

const BoxText = (props) => {

    const labelModificada = `${props.label}:`;

    const toTyped = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='box-text'>
            <label>{labelModificada}</label>
            <input value={props.valor} onChange={toTyped} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
};

export default BoxText;