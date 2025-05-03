export default function ClubTitle({ Title, Department }) {
    return (
        <div className="Header">
            <h1>{Title}</h1>
            <h3>{Department}</h3>
        </div>
    )
}