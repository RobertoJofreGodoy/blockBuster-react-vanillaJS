import { ADD_MOVIES, SET_FILTER, SEARCH_MOVIE } from "../actions/index.js"
import { movieListMap, getAllIds, getMostValuedIds, getLeastValuedIds } from '../../normalize.js'

function filterByTitle(title, movies) {
  const list = []
  movies.forEach((movie) => {
    if (movie.title.toLowerCase().includes(title.toLowerCase())) {
      list.push(movie.id)
    }
  })
  return list
}

function filterById(id, allIds) {
  const parseId = parseInt(id, 10)
  if (allIds.includes(parseId)) {
    return [parseId]
  }
  return allIds
}

function searchMovie(query, list, allIds) {
  if (isNaN(parseInt(query))) {
    return filterByTitle(query, list)
  }
  return filterById(query, allIds)
}

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
      return { 
        ...state,
        filter: payload
      }
    case SEARCH_MOVIE:
      return { 
        ...state,
        filter: 'search',
        list: {
          ...state.list,
          search: searchMovie(payload, state.movieList, state.list.all)
        }
      }
    default:
      return state
  }
}
