import './styles/ClubMember.css'

export default function ClubMembers({ MemberName, MemberImage, MemberPosition }) {
    return (
        <div className="member-card">
            <img className="member-img" src={MemberImage} alt={MemberName} />
            <h3>{MemberName}</h3>
            <p>{MemberPosition}</p>
        </div>
    );
}
