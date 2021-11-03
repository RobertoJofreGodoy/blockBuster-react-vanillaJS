import { initialState } from "../store/index.js"
import { ADD_MOVIES, SET_FILTER } from "../actions/index.js"
import { movieListMap, getAllIds, getMostValuedIds, getLeastValuedIds } from '../../normalize.js'

export default function reducer(state, { type, payload }) {
  switch (type) {
    case ADD_MOVIES:{
      const movieList = movieListMap(payload, state.movieList)
      const all =getAllIds(payload, state.list.all)
      const mostValued =getMostValuedIds(payload, state.list.mostValued)
      const lestValued =getLeastValuedIds(payload, state.list.lestValued)

      return { 
        ...state,
        movieList,
        list: {
          ...state.list,
          all,
          mostValued,
          lestValued,
        }
      }
    }
    case SET_FILTER:
      return state
    default:
      return state
  }
}
