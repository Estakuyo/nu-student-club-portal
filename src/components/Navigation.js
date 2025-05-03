export default function Navigation({ ClubImage, ClubName }) {
    return (
        <div className="navigation">
            <img src={ClubImage} alt="club logo" />
            <h2>{ClubName}</h2>
        </div>
    )
}