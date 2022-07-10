import React from 'react';
import Header from './layouts/header';
import Footer from './layouts/footer';
import PeopleGrid from './components/grid';

function Content(){
    const data = [
        {
            imgUrl: '/assets/img/team/team-2.jpg',
            name: 'Sumina',
            title: 'Guru',
            desc: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
            twitter: 'sumina',
            facebook: 'sumina',
            instagram: 'sumina_mina'
        },
        {
            imgUrl: '/assets/img/team/team-2.jpg',
            name: 'Sumina',
            title: 'Guru',
            desc: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
            twitter: 'sumina',
            facebook: 'sumina',
            instagram: 'sumina_mina'
        },
        {
            imgUrl: '/assets/img/team/team-2.jpg',
            name: 'Sumina',
            title: 'Guru',
            desc: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
            twitter: 'sumina',
            facebook: 'sumina',
            instagram: 'sumina_mina'
        },
        {
            imgUrl: '/assets/img/team/team-2.jpg',
            name: 'Sumina',
            title: 'Guru',
            desc: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
            twitter: 'sumina',
            facebook: 'sumina',
            instagram: 'sumina_mina'
        },
        {
            imgUrl: '/assets/img/team/team-2.jpg',
            name: 'Sumina',
            title: 'Guru',
            desc: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
            twitter: 'sumina',
            facebook: 'sumina',
            instagram: 'sumina_mina'
        },
        {
            imgUrl: '/assets/img/team/team-2.jpg',
            name: 'Sumina',
            title: 'Guru',
            desc: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
            twitter: 'sumina',
            facebook: 'sumina',
            instagram: 'sumina_mina'
        },
        {
            imgUrl: '/assets/img/team/team-2.jpg',
            name: 'Sumina',
            title: 'Guru',
            desc: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
            twitter: 'sumina',
            facebook: 'sumina',
            instagram: 'sumina_mina'
        },
        {
            imgUrl: '/assets/img/team/team-2.jpg',
            name: 'Sumina',
            title: 'Guru',
            desc: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
            twitter: 'sumina',
            facebook: 'sumina',
            instagram: 'sumina_mina'
        },
    ];

    return (<PeopleGrid data={data}/>);
    
}

function GuruDanStaff(){
    return (
        <div className="About">
            <Header/>
            <main id="main" style={{marginTop: '20px'}}>
                <Content/>
            </main>
        <Footer/>
        </div>
    );
}

export default GuruDanStaff;