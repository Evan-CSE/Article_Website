import React from 'react'
import './SingleCard.css'

export default function SingleCard(props) {
  console.log(props);
  const {date,link,title,excerpt,image,creator}=props;
  return (
    <div className="ArticleCard">
      <h2 className="ArticleCard-title" dangerouslySetInnerHTML={{__html:title.rendered}}></h2>
      <p className="ArticleCard-author">{creator}</p>
      <p className="ArticleCard-date">{date}</p>
      <p className='ArticleCard-excerpt' dangerouslySetInnerHTML={{__html:excerpt.rendered}}></p>
      <p>
       <a className='ArticleCard-link' rel='noreferrer'  href={link} target='_blank'> Read More </a>
      </p>
    </div>
  )
}
