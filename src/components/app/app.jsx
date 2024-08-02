import { Component, Fragment } from 'react'
import nextId from "react-id-generator";
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployersList from '../employers-list/employers-list'
import EmployersAddForm from '../employers-add-form/employers-add-form'

import './app.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    name: 'John R.',
                    salary: 110,
                    increase: false,
                    rise: true,
                    id: nextId()
                },
                {
                    name: 'Alex S.',
                    salary: 14,
                    increase: true,
                    rise: false,
                    id: nextId()
                },
                {
                    name: 'Anna M.',
                    salary: 50,
                    increase: false,
                    rise: false,
                    id: nextId()
                },

            ],
            term: '',
            active: {
                all: true,
                promotions: false,
                salaryAbove100: false
            }
        }
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }
    
    addEmplyee = (name, salary) => {
        const employee = {
            name,
            salary,
            increase: false,
            rise: false,
            id: nextId()
        }
        this.setState(({ data }) => {
            return {
                data: [...data, employee]                
            }
        });

    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => (
                item.id === id ? {...item, [prop]: !item[prop] } : item
            ))
        }))
    }

    onToggleIncrease = (id) => {
        this.setState(({ data }) => ({
            data: data.map(item => (
                item.id === id ? {...item, increase: !item.increase } : item
            ))
        }))
    }
    
    onToggleRise = (id) => {
        this.setState(({ data }) => ({
            data: data.map(item => (
                item.id === id ? {...item, rise: !item.rise } : item
            ))
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    filterEmp = (items, { active }) => {
        
        if (active !== undefined) { 
            if (active.promotions) {
                return items.filter(item => item.rise)
            }
            if (active.salaryAbove100) {
                return items.filter(item => item.salary > 100)
            }
        }
        
        return items;
    }

    onSearchUpdate = (term) => {
        this.setState({ term })
    }

    onFilterUpdate = (active) => {
        this.setState({ active })
    }

    render() {
        const { data, term, active } = this.state;
        const totalEmployees = data.length;
        const totalBonuses = data.filter(item => item.increase).length;
        const visibleData = this.filterEmp(this.searchEmp(data, term), active);
        

        return (
            <div className="app">
                <AppInfo
                    totalEmployees={totalEmployees}
                    totalBonuses={totalBonuses} />
            
                <div className="search-panel">
                    <SearchPanel onSearchUpdate={this.onSearchUpdate} />
                    <AppFilter onFilterUpdate={this.onFilterUpdate} />
                </div>

                <EmployersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
                <EmployersAddForm onAdd={this.addEmplyee} />
            </div>
        );
    }
}

export default App
