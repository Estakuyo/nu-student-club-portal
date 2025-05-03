import './styles/Home.css'
import NULogo from '../assets/NU Logo.png'

// Components and Pages
import Navigation from '../components/Navigation'

export default function Home() {
    return (
        <div className="home">
            <img src={NULogo} alt='NU Logo' />
            <h1>NU Student Clubs</h1>
        </div>
    )
}