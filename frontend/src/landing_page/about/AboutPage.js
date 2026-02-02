import React from 'react';
import Hero from './Hero';
import Team from './Team';
import TeamsMember from './TeamsMember';

function AboutPage() {
    return (
        <h1>
           <Hero/>
           <Team/>
           <TeamsMember/>
        </h1>
    );
}

export default AboutPage;