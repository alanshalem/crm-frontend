import React from 'react'
import Footer from './partials/Footer'
import Header from './partials/Header'

export default function DefaultLayout({children}) {
    return (
        <div className="default-layout">
            <div className="header">
                <Header></Header>
            </div>
            
            <main className="main">{children}</main>

            <footer className="footer">
                <Footer></Footer>
            </footer>
        </div>
    )
}
