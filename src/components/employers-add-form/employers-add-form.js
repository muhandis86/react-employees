import { Component } from 'react';
import './employers-add-form.css';

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.inputClasses = "form-control new-post-label";
        this.state = {
            name: '',
            salary: '',
            nameClasses: this.inputClasses,
            salaryClasses: this.inputClasses
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            nameClasses: e.target.name === 'name' ? this.inputClasses : this.state.nameClasses,
            salaryClasses: e.target.name === 'salary' ? this.inputClasses : this.state.salaryClasses
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const isInputNameEmpty = this.state.name.length < 3;
        const isInputSalaryEmpty = !this.state.salary;

        if (isInputNameEmpty || isInputSalaryEmpty) {
            this.setState({
                nameClasses: isInputNameEmpty ? this.state.nameClasses + ' is-invalid' : this.state.nameClasses,
                salaryClasses: isInputSalaryEmpty ? this.state.salaryClasses + ' is-invalid' : this.state.salaryClasses
            })
        } else {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: '',
                nameClasses: this.inputClasses,
                salaryClasses: this.inputClasses
            })
        }
    }

    render() {
        const { name, salary, nameClasses, salaryClasses } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className={nameClasses}
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className={salaryClasses}
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />

                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;