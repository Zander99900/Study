import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-3' src={loading} alt="Loading" />
        <h6>Loading News...</h6>
      </div>
    )
  }
}

export default Spinner