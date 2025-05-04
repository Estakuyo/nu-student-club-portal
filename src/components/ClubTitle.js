import './styles/ClubTitle.css';

export default function ClubTitle({ Title, ClubLogo }) {
    return (
        <div className="club-title-container">
            <img className='club-title-logo' src={ClubLogo} alt='Club Logo' />
            <h1 className="club-title-text">{Title}</h1>
        </div>
    );
}
