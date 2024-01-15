import EmployersListItem from '../employers-list-item/employers-list-item';

import './employers-list.scss'

const EmployersList = ({ data, onDelete, onToggleProp, onChangeSalary }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <EmployersListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onChangeSalary={(e) => onChangeSalary(id, parseInt(e.target.value))}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'), e)} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployersList;