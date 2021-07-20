import React from 'react'
import ArgentinaUnida from '../../assets/img/logo_argentina_unida-blanco.svg'
import './Footer.css'

export default function Footer() {
    return (
        <div className="text-center copy-right">
           <img className="footer-logo" src={ArgentinaUnida} alt="logo argentina unida" />
        </div>
    )
}
