export default function ClubMembers({ MemberName, MemberImage }) {
    return (
        <div className="club-members">
            <img src={MemberImage} />
            <h2>{MemberName}</h2>
        </div>
    )
}