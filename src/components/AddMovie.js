import React, {Component} from 'react'

export default class AddMovie extends Component {
  state = {
    title: '',
    description: '',
    rate: 0,
    year: 0
  }
  submit = e => {
    e.preventDefault()
    this.props.addMovie(this.state)
    // axios.post('peliculasperronas.com', { nuevaPelicula })
    // si hay error hago algo, si no muestro mensaje de éxito
    this.setState({
      title: '',
      description: '',
      year: 0,
      rate: 0
    })
  }
  handleChange = e => {
    const {
      target: {name, value}
    } = e
    this.setState({[name]: value})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <label htmlFor='title'>Title</label>
          <input
            onChange={this.handleChange}
            type='text'
            name='title'
            value={this.state.title}
          />
          <label htmlFor='description'>Description</label>
          <input
            onChange={this.handleChange}
            type='text'
            name='description'
            value={this.state.description}
          />
          <label htmlFor='rate'>Rate</label>
          <input
            onChange={this.handleChange}
            type='number'
            name='rate'
            value={this.state.rate}
          />
          <label htmlFor='year'>Year</label>
          <input
            onChange={this.handleChange}
            type='number'
            name='year'
            value={this.state.year}
          />
          <input type='submit' value='Add' />
        </form>
      </div>
    )
  }
}
