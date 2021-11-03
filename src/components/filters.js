import { Component, createElement } from "../lib/react/index.js"
import Select from "./select.js"
import { store } from '../redux/store/index.js'
import { SET_FILTER } from '../redux/actions/index.js'

class Filters extends Component{

    handdleChange = (event) => {
        store.dispatch({
            type: SET_FILTER,
            payload: event.target.value
        })
    }

    render(){
        return Select({
            onChange: this.handdleChange,
            children: [
               createElement('option', { value: 'all'}, 'Todas'), 
               createElement('option', { value: 'mostValued'}, 'Más valoradas'),
               createElement('option', { value: 'lestValued'}, 'Menos valoradas'),
            ]
        })
    }
}

export default Filters