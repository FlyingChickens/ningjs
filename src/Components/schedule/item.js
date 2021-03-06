import React, { Component } from 'react'
import 'styles/speakers/style.scss'

class Article extends Component {

  render() {
    const { __, name, avatar, title, desc, social, company } = this.props
    const avatarEl = avatar ? <img className='avatar' src={avatar} /> : null
    const companyEL = company ? <h5>From {company}</h5> : null
    const nameEl = name ? <div><a href={social}>By {name}</a></div> : null
    return (
      <article>
        { avatarEl }
        <div className='content'>
          <h3>{__(title)}</h3>
          <p>{__(desc)}</p>
          { nameEl }
          { companyEL }
        </div>
      </article>
    )
  }
}

export default class Item extends Component {

  render() {
    const { __, speakers, time} = this.props
    return (
      <div className='schedule'>
        <h4>{time}</h4>
        <div className='speakers'>
        {
          speakers.map((i, j) => <Article {...i} __={__} key={j}/>)
        }
        </div>
      </div>
    )
  }
}
