import './ListSuspendedSex.css';

const ListSuspendedSex = (props) => {
    
    return (
        <div className='list-suspended-sex'>
            <label>Sexo:</label>
            <select
                onChange={evento => props.aoAlterado(evento.target.value)}
                value={props.valor}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
};

export default ListSuspendedSex;
