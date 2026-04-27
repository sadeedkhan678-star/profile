/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import { About, Services } from './components/AboutAndServices';
import { Experience, Skills } from './components/ExperienceAndSkills';
import { Portfolio, Contact, Footer } from './components/PortfolioAndContact';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-brand-950 font-sans">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Services />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
