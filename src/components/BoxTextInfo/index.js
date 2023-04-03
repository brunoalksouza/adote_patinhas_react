import './BoxTextInfo.css';

const BoxTextInfo = (props) => {

    const labelModificada = `${props.label}:`;

    const toTyped = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='box-text-info'>
            <label>{labelModificada}</label>
            <input value={props.valor} onChange={toTyped} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
};

export default BoxTextInfo;