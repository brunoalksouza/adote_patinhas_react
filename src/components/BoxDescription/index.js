import './BoxDescription.css';

const BoxDescription = (props) => {

    const labelModificada = `${props.label}:`;

    const toTyped = (event) => {
        props.toChanged(event.target.value)
    }

    return (
        <div className='box-description'>
            <label>{labelModificada}</label>
            <textarea value={props.value} onChange={toTyped} required={props.mandatory} placeholder={props.placeholder} />
        </div>
    )
};

export default BoxDescription;
