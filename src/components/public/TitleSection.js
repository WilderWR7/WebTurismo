import React from 'react'

export const TitleSection = ({first,second}) => {
  return (
    <div className="row justify-content-center">
        <div className="col-md-8">
        <div className="section-title text-center">
            <h2 className="title">{first}</h2>
            <p className="sub-title">{second}</p>
        </div>
        </div>
    </div>
  )
}
