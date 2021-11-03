import { Component } from "../lib/react/index.js"
import styled from "../lib/styled-components.js"
import WrapperStyled from "./wrapper.js"
import Movie from "./movie.js"
import {store} from '../redux/store/index.js'
import api from "./api.js"
import { ADD_MOVIES } from '../redux/actions/index.js'

const MovieListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  box-sizing: border-box;
  gap: 1em;
`

class MovieList extends Component {

  state = {
    page: 1,
  }

  getPage = async (page) => {
    const { results } = await api.moviePage(page)
    store.dispatch({
      type: ADD_MOVIES,
      payload: results
    })
  }

  hanndleIntersection = (entries) => {
    const { isIntersecting } = entries[0]
    if (isIntersecting) {
      this.getPage(this.state.page)
      this.setState({
        page: this.state.page + 1
      })
    }

  }

  componentDidMount() {
    //this.getPage(this.state.page)
    store.suscribe(() => {
      this.setState()
    })

    const observer = new IntersectionObserver( this.hanndleIntersection )
    observer.observe(window.intersector)
  }

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
