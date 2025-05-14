import NUWizards from '../club data/NUWizardsData';

// Components
import ClubTitle from '../components/ClubTitle';
import ClubInfo from '../components/ClubInfo';
import ClubMembers from '../components/ClubMembers'

export default function ClubOne() {
    const clubMembers = NUWizards.members.map((member) => (
        <ClubMembers
            MemberName={member.name}
            MemberImage={member.img}
            MemberPosition={member.position}
        />
    ));

    return (
        <div className='page-container'>
            <div className='main-wrapper'>
                <ClubTitle Title={NUWizards.name} ClubLogo={NUWizards.logo} />
                <ClubInfo ClubDescription={NUWizards.info} />
                <div className='member-wrapper'>
                    {clubMembers}
                </div>
            </div>
            <footer>Created by: John Martin S. Eustaquio BSIT-MWA Batch 2022</footer>
        </div>
    )
}