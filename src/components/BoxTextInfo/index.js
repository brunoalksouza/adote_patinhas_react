import './BoxTextInfo.css';

const BoxTextInfo = (props) => {

    const labelModificada = `${props.label}:`;

    const toTyped = (event) => {
        props.toChanged(event.target.value)
    }

    return (
        <div className='box-text-info'>
            <label>{labelModificada}</label>
            <input value={props.value} onChange={toTyped} required={props.mandatory} placeholder={props.placeholder} />
        </div>
    )
};

export default BoxTextInfo;