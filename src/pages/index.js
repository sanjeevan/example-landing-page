import React from 'react'
import Link from 'gatsby-link'
import Signup from '../components/signup'
import heroImage from '../assets/hero.svg'

const IndexPage = () => (
  <div className="container">
    <div className="columns">
      <div className="column col-6">
        <div className="hero">
          <div>
            <h1>Build better landing pages the hard way</h1>
            <Signup />
          </div>
        </div>
      </div>
      <div className="column col-6">
        <img className="hero-image" src={heroImage} />
      </div>
    </div>
  </div>
)

export default IndexPage
