import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function DefaultLayout({ children }) {
    return (
        <div className="default-layout">
            <header className="header">
                <Header />
            </header>

            <main className="main">{children}</main>

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
}
