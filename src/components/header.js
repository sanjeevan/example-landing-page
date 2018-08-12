import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header className="navbar">
    <section className="navbar-section">
      <a href="..." className="navbar-brand mr-2">My product name</a>
    </section>
    <section className="navbar-section">
      <a href="#" className="btn btn-link">Pricing</a>
      <a href="#" className="btn btn-link">About</a>
    </section>
  </header>
)

export default Header
