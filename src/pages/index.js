import * as React from 'react'
import Header from '../components/header/'

// markup
const IndexPage = () => {
  return (
    <main>
      <Header />
      <title>Sharesight static interview prompt</title>

      <section className="contentWrapper">
        <div className="content">
          <h1 className="presentation-title">Sharesight static interview prompt</h1>
          <p>
            Prepared by <a href="https://pkoenders.netlify.app"> Peter Koenders</a>
          </p>
        </div>
      </section>
    </main>
  )
}

export default IndexPage
