import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Alex', salary: 800, increase: false, rise: true, id: 1 },
                { name: 'Jonh', salary: 1000, increase: false, rise: false, id: 2 },
                { name: 'Carl', salary: 5000, increase: false, rise: false, id: 3 }
            ],
            term: ''
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name: name,
            salary: +salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }

        this.setState(({ data }) => {
            return {
                data: [...data, newItem]
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    searchEmployees = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term }); // {term} === {term: term}
    }

    render() {
        const { data, term } = this.state;
        const employees = data.length;
        const increased = data.filter(item => item.increase).length;
        const visibleData = this.searchEmployees(data, term);

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter />
                </div>

                <EmployersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
                <EmployersAddForm
                    onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;