import { Component } from "../lib/react/index.js"
import styled from "../lib/styled-components.js"
import WrapperStyled from "./wrapper.js"
import Movie from "./movie.js"
import {store} from '../redux/store/index.js'   

const MovieListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  box-sizing: border-box;
  gap: 1em;
`

class MovieList extends Component {

  render() {
    const state = store.getState()
    const movieListIds = state.list[state.filter]
    const movieList = state.movieList
    
    return WrapperStyled({
        children: MovieListStyled({
            children: movieListIds.map(id => new Movie(movieList.get(id)))
        },)
    })
  }
}

export default MovieList
