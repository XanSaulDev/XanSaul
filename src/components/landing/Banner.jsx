import React from 'react'
import saul from '../../media/img/saul/saul.jpeg'
import banner from '../../media/videos/banner.mp4'

export const Banner = () => {
  return (
    <div className="banner">
        <div className="overlay">
            <div className="contenedor presentacion">

                <img src={saul} alt="" className="foto" />
 
                <div className="info">
                    <h1>Alejandro Saul Huerta Murillo</h1>
                </div>

            </div>
        </div>
        <div className="video">
            <video loop muted autoPlay>
                <source src={banner} type="video/mp4" />
            </video>
        </div>

    </div>
 
  )
}
