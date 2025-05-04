import './styles/ClubInfo.css'

export default function ClubInfo({ ClubDescription }) {
    return (
        <div className="club-info">
            <p>{ClubDescription}</p>
        </div>
    )
}