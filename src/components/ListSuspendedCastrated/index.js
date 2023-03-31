import './ListSuspendedCastrated.css';

const ListSuspendedCastrated = (props) => {
    return (
        <div className='list-suspended-castrated'>
            <label>Castrado:</label>
            <select
                onChange={event => props.toChanged(event.target.value)}
                value={props.value}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>

    )
};
export default ListSuspendedCastrated;
