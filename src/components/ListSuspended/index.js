import './ListSuspended.css';

const ListSuspended = (props) => {
    return (
        <div className='list-suspended'>
            <label>Vacinado:</label>
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
export default ListSuspended;
