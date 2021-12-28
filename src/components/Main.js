import PropTypes from 'prop-types'
import React from 'react'

import About from '../components/About'
import Services from '../components/Services'
import References from '../components/References'
import Prices from '../components/Prices'

class Main extends React.Component {

  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
        role="button"
        tabIndex="0"
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Rólunk</h2>

          <About />
          {close}

        </article>

        <article
          id="services"
          className={`${this.props.article === 'services' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Szolgáltatások</h2>
          <Services />
          {close}
        </article>

        <article
          id="references"
          className={`${this.props.article === 'refs' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Referenciák</h2>
          <References />
          {close}
        </article>

        <article
          id="price"
          className={`${this.props.article === 'price' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Áraink</h2>
          <Prices />
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Kapcsolat</h2>
          <form method="post" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="bot-field" />
            <p>
              <label>Név<input type="text" name="name" /></label>
            </p>
            <p>
              <label>Email<input type="email" name="email" /></label>
            </p>
            <p>
              <label>Üzenet<textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Küldés</button>
            </p>
          </form>
          <h4>Telefon:<span class="space" /> 06-70/3271839</h4>
          <ul className="icons">
            <li>
              <a target="_blank" href="https://www.facebook.com/TiptopLak-107970284128917/" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
