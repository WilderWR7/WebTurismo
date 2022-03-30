import React from 'react'

export const CardDestination = ({Name,star=5,Image_Url}) => {
    return (
        <div className="col-md-6 col-lg-3">
            <div className="courses-item">
                <a href="#" className="link wilder">
                    <div className="courses-item-inner">
                        <div className="img-box">
                            <img src={`${Image_Url}`} alt={`${Name}`}/>
                        </div>
                        <h3 className="title">{Name}</h3>
                        <div className="instructor">
                        </div>
                        <div className="rating">
                            <span className="average-rating">{star}</span>
                            <span className="average-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </span>
                        </div>
                        {/* <div className="price">Km. {distance}</div> */}
                    </div>
                </a>
            </div>
        </div>
    )
}
