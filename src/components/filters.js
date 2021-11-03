import { Component, createElement } from "../lib/react/index.js"

import Select from "./select.js"

class Filters extends Component{
    render(){
        return Select({
            children: [
               createElement('option', { value: 'all'}, 'Todas'), 
               createElement('option', { value: 'mostValued'}, 'Más valoradas'),
               createElement('option', { value: 'lestValued'}, 'Menos valoradas'),
            ]
        })
    }
}

export default Filters