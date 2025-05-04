import NUPoliSci from '../club data/NUPoliSciData';

// Components
import ClubTitle from '../components/ClubTitle';
import ClubInfo from '../components/ClubInfo';
import ClubMembers from '../components/ClubMembers'

export default function ClubOne() {
    const clubMembers = NUPoliSci.members.map((member) => (
        <ClubMembers
            MemberName={member.name}
            MemberImage={member.img}
            MemberPosition={member.position}
        />
    ));

    return (
        <>
            <div className='main-wrapper'>
                <ClubTitle Title={NUPoliSci.name} ClubLogo={NUPoliSci.logo} />
                <ClubInfo ClubDescription={NUPoliSci.info} />
                <div className='member-wrapper'>
                    {clubMembers}
                </div>
            </div>
            <footer>Created by: John Martin S. Eustaquio BSIT-MWA Batch 2022</footer>
        </>
    )
}