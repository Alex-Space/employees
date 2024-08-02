import { Component } from 'react'
import nextId from "react-id-generator";
import './employers-add-form.css';


class EmployersAddForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: '',
        }
    }

    onValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    onSubmitForm = (event) => {
        event.preventDefault()
        if (this.state.name.length > 2 && this.state.salary > 0) {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: ''
            })
            event.target.reset()
        }
    }
    

    render() {
        const { name, salary } = this.state
        const id = nextId()

        return (
            <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex"
                onSubmit={this.onSubmitForm} >
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                    name="name"
                    value={name}
                    onChange={this.onValueChange} />
                <input type="number"
                    className="form-control new-post-label"
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

export default EmployersAddForm
