import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img id="hc-logo" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Home In Heavens</h1>
        <p>
        Our vision is to enable wormhole life for larger portion of EVE players through supporting their first steps in this path. Our service is aimed for individuals, alts and organizations alike.
        </p>
        <div className="split-text">
          <div className="left">
            <h2>
              PI for individuals & alts
            </h2>
            <p>
            Wormhole PI is on average 4 times as lucrative as highsec PI, in one of our cherrypicked wormholes you can potentially earn even more. Our cooperation based PI systems can house you and your alts without you investing a dime up front on infrastructure. In our PI holes PVP is strictly forbidden, and our policy ensures minimal risk.
            </p>
          </div>
          <div className="right">
            <h2>
              Home in Heavens for Corps and Alliances
            </h2>
            <p>
              If your organization is planning to expand and/or move to Wormholes, you can take your first steps by moving into one of our settlements and get on your feet in wormholes under our wing. If you're looking to start a PVP wing or concentrate on PVE/industry, regardless of your size, we can build you the Home you need to get started. Our service includes negotiable amount of infrastructure, mapper, support channel and training to how to live in wormholes with lower chance of painful, repeating death.
            </p>
          </div>
        </div>
        <p>
          We try to answer your needs so dont hesitate to ask for an offer. Each contract is negotiated separately, for a predetermined period and in utmost confidence.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
