import { createStore } from "../index.js"
import reducer from "../reducers/index.js"
import movies from "../../movies.js"
import { movieListMap, getAllIds, getMostValuedIds, getLeastValuedIds } from "../../normalize.js"
const initialState = {
  movieList: movieListMap(movies),
  filter: "all",
  list: {
    all: getAllIds(movies),
    mostValued: getMostValuedIds(movies),
    lestValued: getLeastValuedIds(movies),
  },
}

const store = createStore(reducer, initialState)

export { initialState, store }
