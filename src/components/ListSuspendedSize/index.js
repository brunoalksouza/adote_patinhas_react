import './ListSuspendedSize.css';

const ListSuspendedSize = (props) => {
    return (
        <div className='list-suspended-size'>
            <label>Porte:</label>
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
export default ListSuspendedSize;
