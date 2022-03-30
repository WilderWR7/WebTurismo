import React from 'react'

export const CardInfo = ({name,cant,icon}) => {
  return (
    <div className="col-lg-3 d-flex">
        <div className="card">
            <div className="card-body">
                <div className="d-flex no-block">

                    <div className="m-r-20 align-self-center"><svg xmlns="http://www.w3.org/2000/svg"
                            className={`icon icon-tabler icon-tabler-${icon}`} width="68"
                            height="68" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff4500"
                            fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="3" y1="21" x2="21" y2="21" />
                            <path d="M5 21v-14l8 -4v18" />
                            <path d="M19 21v-10l-6 -4" />
                            <line x1="9" y1="9" x2="9" y2="9.01" />
                            <line x1="9" y1="12" x2="9" y2="12.01" />
                            <line x1="9" y1="15" x2="9" y2="15.01" />
                            <line x1="9" y1="18" x2="9" y2="18.01" />
                        </svg></div>
                    <div className="align-self-center">
                        <h6 className="text-muted m-t-10 m-b-0">{name}</h6>
                        <h2 className="m-t-0">{cant}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
