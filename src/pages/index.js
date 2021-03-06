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
            Prepared by <a href="https://pkoenders.netlify.app"> Peter Koenders</a> 19 July 2021 for{' '}
            <a href="https://github.com/sharesight/static-interview-prompt">
              this prompt - https://github.com/sharesight/static-interview-prompt"
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}

export default IndexPage
