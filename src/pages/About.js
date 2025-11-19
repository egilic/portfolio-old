// import React, { useState, useEffect } from 'react';
import React from 'react';
import Skills from './Skills';

const About = () => {

  return (
    <div className="max-w-3xl mx-auto">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-text-secondary mb-4">
          As a first-generation student and I am deeply committed to using technology to solve complex problems. I declared 
          the computer science major after my junior year because I was originally studying business. My academic and recreational 
          projects are where I try to apply my knowledge. I spend all of my time learning, researching, playing chess, and exercising (mainly playing basketball and boxing).
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Startup</h3>
          <h4 className="text-lg">Software Engineer</h4>
          <p className="text-sm text-text-secondary">February 2024 - Present</p>
          <p className="mt-2">
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Dino's Painting and Construction</h3>
          <h4 className="text-lg">Software Engineer and Project Manager</h4>
          <p className="text-sm text-text-secondary">2016 - Present</p>
          <p className="mt-2">
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Rise48 Equity</h3>
          <h4 className="text-lg">Finance Intern</h4>
          <p className="text-sm text-text-secondary">May 2022 - August 2022</p>
          <p className="mt-2">
            I assisted senior leadership with sourcing new acquisition targets & accredited investors in the Southwest region. I 
            supported the deal team in preparing quarterly financials for numerous investors, highlighting strong ROI.
            By coordinating and communicating across teams, I was able to create fund reports while providing key takeaways for weekly meetings.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div>
          <h3 className="text-xl font-semibold">University of Michigan, Ann Arbor</h3>
          <p className="text-sm text-text-secondary">2021 - 2026</p>
          <p className="mt-2">
            Studying B.S.E in Computer Science from the College of Engineering, B.B.A from the Stephen M. Ross School of Business, Minor in Mathematics.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <Skills />
      </section>
    </div>
  );
};

export default About;