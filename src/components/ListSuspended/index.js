import './ListSuspended.css';

const ListSuspended = (props) => {
    return (
        <div className='list-suspended'>
            <label>Vacinado:</label>
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
export default ListSuspended;
