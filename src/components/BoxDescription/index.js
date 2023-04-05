import './BoxDescription.css';

const BoxDescription = (props) => {

    const labelModificada = `${props.label}:`;

    const toTyped = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='box-description'>
            <label>{labelModificada}</label>
            <textarea value={props.valor} onChange={toTyped} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
};

export default BoxDescription;


