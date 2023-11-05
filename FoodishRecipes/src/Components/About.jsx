import '../App.css'
import React, { useState } from 'react';
import AboutData from '../Data/AboutData'
import FAQCard from './FAQCard';
import { v4 as uuidv4 } from 'uuid';
function About() {
  return (
    <div className="about w-screen h-auto mt-[1rem] p-4">
      <h1 className="heading md:tracking-widest mb-1 text-4xl px-2">About</h1>
      <p className="description px-2">Here you can find FAQs about the page.</p>

      {/* map through array of FAQS */}
      {AboutData.map((data) => {
        const id = uuidv4();
        return <FAQCard key={id} data={data} />;
      })}
    </div>
  )
}

export default About
