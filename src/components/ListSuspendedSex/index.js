import './ListSuspendedSex.css';

const ListSuspendedSex = (props) => {
    
    return (
        <div className='list-suspended-sex'>
            <label>Sexo:</label>
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

export default ListSuspendedSex;
