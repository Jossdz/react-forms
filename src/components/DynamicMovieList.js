import React, {Component} from 'react'
import AddMovie from './AddMovie'
import ListElement from './ListElement'

export default class DynamicMovieList extends Component {
  state = {
    movieList: []
  }
  componentDidMount = () => {
    // Obtener las peliculas existentes
    // axios.get('peliculasperronas.com')
    // setState con las peliculas
  }
  addMovie = movie => {
    // this.setState(({movieList}) => ({movieList: [...movieList, movie]}))
    this.setState(prevState => {
      return {
        movieList: [...prevState.movieList, movie]
      }
    })
  }
  render() {
    const {movieList} = this.state
    return (
      <div>
        <h2>Add Movie</h2>
        <AddMovie addMovie={this.addMovie} />
        <h1>Movie List</h1>
        {this.state.movieList.length === 0 ? (
          <p>No hay peliculas</p>
        ) : (
          movieList.map((movie, i) => <ListElement {...movie} key={i} />)
        )}
      </div>
    )
  }
}
