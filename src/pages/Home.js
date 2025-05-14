import './styles/Home.css'
import NULogo from '../assets/NU Logo.png'
import NUWizardsLogo from '../assets/NU Wizards Logo.png'
import NUGdscLogo from '../assets/NU GDSC Logo.png'
import NUPoliSci from '../assets/NU PolSci Logo.png'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="page-container">
            <main className="home">
                <img className='NU-logo' src={NULogo} alt='NU Logo' />
                <h1>NU Student Clubs</h1>
                <p className="intro">
                    Welcome to the NU Student Club Portal — your gateway to exploring, joining, and connecting with the vibrant student organizations of National University. Discover clubs that match your passions and become part of something bigger!
                </p>
                <div className='club-wrapper'>
                    <Link to='/NU-Wizards-Circle'>
                        <div className='clubNav'>
                            <img className='club-logo' src={NUWizardsLogo} alt='NU Wizards Logo' />
                            <h2>NU Wizards Circle</h2>
                        </div>
                    </Link>
                    <Link to='/NU-Google-Developer-Students-Club'>
                        <div className='clubNav'>
                            <img className='club-logo' src={NUGdscLogo} alt='NU GDSC Logo' />
                            <h2>GDSC</h2>
                        </div>
                    </Link>
                    <Link to='/NU-Political-Science-Society'>
                        <div className='clubNav'>
                            <img className='club-logo' src={NUPoliSci} alt='NU PoliSci Logo' />
                            <h2>NUMPOLSCI Society</h2>
                        </div>
                    </Link>
                </div>
            </main>
            <footer>Created by: John Martin S. Eustaquio BSIT-MWA Batch 2022</footer>
        </div>
    )
}
