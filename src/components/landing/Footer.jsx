import React from 'react'

import insta from '../../media/img/svg/instagram.svg'
import face from '../../media/img/svg/facebook.svg'
import git from '../../media/img/svg/github.svg'

export const Footer = () => {
  return (
    <footer>
        <div className="contenedor footer">
            <h2>XanSaul</h2>
            <div className="redes">

                <a href="https://www.instagram.com/xansaul/" className="red" target={"_blanck"}>
                    
                    <img src={insta} alt="" />
                    xansaul
                </a>
                <a href="https://www.facebook.com/alejandrosaul.huerta" className="red"  target={"_blanck"}>
                    <img src={face}  alt="" />
                    Saul Huerta
                </a>
                <a href="https://github.com/XanSaulDev" className="red" target={"_blanck"}>
                    <img src={git}  alt="" />
                    XanSaulDev
                </a>
            </div>
        </div>
    </footer>
  )
}
