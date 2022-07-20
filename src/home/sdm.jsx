import React from 'react';
import PeopleGrid from './components/grid';
import { LayoutScaffold } from './layouts/layout';

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
        <LayoutScaffold marginTop='5rem'>
            <Content/>
        </LayoutScaffold>
    );
}

export default GuruDanStaff;