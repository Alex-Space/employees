import { Component } from 'react'
import './search-panel.css'

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: '',
        }
    }

    onInputChange = (event) => {
        const term = event.target.value
        this.setState({term})
        this.props.onSearchUpdate(term)
    }

    render() {
        return(
            <input
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                onChange={this.onInputChange} />
        )
    }
    
}

export default SearchPanel;
