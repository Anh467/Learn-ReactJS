import React from 'react'

export default function post_item(props) {
  return (
    <div className='post-item'>
        <img src={props.ele.img} alt=''></img>
        <h2 className='post-title'>{props.ele.title}</h2>
        <p className='post-desc'>{props.ele.desc}</p>
        <p className='post-published'>{props.ele.published}</p>
    </div>
  )
}
