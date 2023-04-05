import './ListSuspendedSize.css';

const ListSuspendedSize = (props) => {
    return (
        <div className='list-suspended-size'>
            <label>Porte:</label>
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
export default ListSuspendedSize;
