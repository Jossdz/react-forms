import React from 'react'

const ListElement = ({title, year, description, rate}) => {
  return (
    <div>
      <b>{title}</b> - <small>{year}</small> - <b>{rate}</b>
      <br />
      <p>{description}</p>
    </div>
  )
}

export default ListElement
