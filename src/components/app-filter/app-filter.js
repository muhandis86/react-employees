import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: ['btn-light', 'btn-outline-light', 'btn-outline-light'],
        }
    }

    OnSelectFilterLocal = (e) => {
        const checkedFilter = e.target.getAttribute('data-filter');
        const index = e.target.getAttribute('id') - 1;

        this.setState(({ className }) => ({
            className: className.map((item, i) => {
                if (i === index) {
                    return 'btn-light';
                } else {
                    return 'btn-outline-light';
                }
            })
        }))
        this.props.onSelectFilter(checkedFilter);
    }

    render() {
        const { className } = this.state;

        return (
            <div className="btn-group">
                <button
                    id='1'
                    className={"btn " + className[0]}
                    type="button"
                    data-filter="all"
                    onClick={this.OnSelectFilterLocal}>
                    Все сотрудники
                </button>
                <button
                    id='2'
                    className={"btn " + className[1]}
                    type="button"
                    data-filter="rise"
                    onClick={this.OnSelectFilterLocal}>
                    На повышение
                </button>
                <button
                    id='3'
                    className={"btn " + className[2]}
                    type="button"
                    data-filter="salaryMore1000"
                    onClick={this.OnSelectFilterLocal}>
                    З/П больше 1000$
                </button>
            </div>
        );
    }
}

export default AppFilter;