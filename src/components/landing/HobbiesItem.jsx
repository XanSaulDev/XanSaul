import React from 'react'

export const HobbiesItem = ({img,title,body}) => {
  return (

        <div className="pas__item">
            <div className="pasHead">
                <img src={img} alt={title} style={{height:'200px', width: '150px'}} />
                <h2>{title}</h2>
            </div>
            <p>{body}</p>
        </div>


  )
}
