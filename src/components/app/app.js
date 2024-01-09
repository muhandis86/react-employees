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
                { name: 'Alex', salary: 800, increase: false, id: 1 },
                { name: 'Jonh', salary: 1000, increase: false, id: 2 },
                { name: 'Carl', salary: 5000, increase: false, id: 3 }
            ]
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
            id: this.maxId++
        }

        console.log(newItem);

        this.setState(({ data }) => {
            return {
                data: [...data, newItem]
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployersList
                    data={this.state.data}
                    onDelete={this.deleteItem} />
                <EmployersAddForm
                    onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;