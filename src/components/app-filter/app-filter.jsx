import { Component } from 'react'
import classNames from 'classnames';
import './app-filter.css'

class AppFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: {
                all: true,
                promotions: false,
                salaryAbove100: false
            }
        }
        
    }

    onClickHandler = (event) => {
        const { id } = event.target.dataset;
        const active = {
            all: id === 'all',
            promotions: id === 'promotions',
            salaryAbove100: id ==='salaryAbove100'
        }

        for (let item of event.target.parentElement.children) {
            item.classList.remove('btn-light');
            item.classList.add('btn-outline-light');
        }

        event.target.className = classNames({
            'btn': true,
            'btn-light': true,
            'btn-outline-light': false
        });

        this.setState({ active })
        this.props.onFilterUpdate({ active })
    }

    render() {
        return (
            <div className="btn-group">
                <button
                    className="btn btn-light"
                    type="button" 
                    onClick={this.onClickHandler}
                    data-id="all">
                        Все сотрудники
                </button>
                <button
                    className="btn btn-outline-light"
                    type="button" 
                    onClick={this.onClickHandler} data-id="promotions">
                        На повышение
                </button>
                <button
                    className="btn btn-outline-light"
                    type="button" 
                    onClick={this.onClickHandler} data-id="salaryAbove100">
                        З/П больше 100
                </button>
            </div>
        )
    }
}

export default AppFilter
