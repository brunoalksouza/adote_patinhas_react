import './ListSuspendedCastrated.css';

const ListSuspendedCastrated = (props) => {
    return (
        <div className='list-suspended-castrated'>
            <label>Castrado:</label>
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
export default ListSuspendedCastrated;
