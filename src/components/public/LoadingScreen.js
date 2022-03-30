import React from 'react'
import './style.css';
export const LoadingScreen = () => {
    console.log('paso')
    return (
        <div className="loader">
            <div className="circle">
                <div className="dot0" />
                <div className="dot1" />
                <div className="dot2" />
                <div className="dot3" />
                <div className="dot4" />
                <div className="dot5" />
                <div className="dot6" />
                <div className="dot7" />
            </div>
        </div>
    )
}
