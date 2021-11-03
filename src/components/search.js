import { Component, createElement } from "../lib/react/index.js"
import Form from "./form.js"
import Input from "./input.js"
import button from "./button.js"

class Search extends Component {
  render() {

    return Form({
      children: [
        new Input({
          placeholder: "Escribe tu película favorita",
          name: "title",
          type: 'text'
        }),
        new button(null, 'Buscar')
      ],
    })
  }
}

export default Search