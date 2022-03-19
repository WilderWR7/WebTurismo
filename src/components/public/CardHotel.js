import React from 'react'

export const CardHotel = ({title,star,img}) => {
    return (
        <div className="col-md-6 col-lg-3">
            <div className="courses-item">
                <a href="#" className="link">
                    <div className="courses-item-inner">
                    <div className="img-box">
                        <img src={`${img}`} alt="course img"/>
                    </div>
                    <h3 className="title">{title}</h3>
                    <div className="instructor">
                        {/* <!-- <img src="img/instructor/1.png" alt="instructor img"> --> */}
                        {/* <!-- <span className="instructor-name">john doe</span> --> */}
                    </div>
                    <div className="rating">
                        <span className="average-rating">{star}</span>
                        <span className="average-stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        </span>
                    </div>
                    </div>
                </a>
            </div>
        </div>
    )
}