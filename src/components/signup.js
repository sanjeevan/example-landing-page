import React from 'react'
import styles from './signup.module.css'
import { push } from 'gatsby-link'
import { createSubscriber } from '../services'
import className from 'classnames'

export default class Signup extends React.Component {

  state = {
    email: '',
    error: null,
    loading: false,
  }

  validateEmail = email => {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value, error: null })
  }

  handleSignup = evt => {
    evt.preventDefault()

    if (this.state.email == '') {
      return
    }

    if (!this.validateEmail(this.state.email)) {
      this.setState({ error: 'That doesn\'t look like a valid email address' })
      return
    }

    this.setState({ loading: true })

    createSubscriber(this.state.email).then(data => {
      if (!data.metadata.success) {
        this.setState({ error: data.metadata.message, loading: false })
        return
      } else {
        push('/signup-success')
      }
    })
  }

  render() {
    let btnClass = className('btn', 'btn-primary', 'input-group-btn', 'btn-lg', {
      'loading': this.state.loading
    })
    let groupClass = className('form-group', {
      'has-error': this.state.error
    })

    return (
      <div className={styles.root}>
        <p>Get on the waiting list</p>
        <div className={groupClass}>
          <div className="input-group">
            <input className="form-input input-lg" placeholder="Your email address" type="text" value={this.state.email} onChange={this.handleEmailChange} />
            <button className={btnClass} type="button" onClick={this.handleSignup}>Signup</button>
          </div>
          { this.state.error ? <p className="form-input-hint">{this.state.error}</p> : null }
        </div>
      </div>
    )
  }
}
