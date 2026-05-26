import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OpenAccountHero from '@/components/OpenAccountHero';
import InvestmentOptions from '@/components/InvestmentOptions';
import AccountOpeningSteps from '@/components/AccountOpeningSteps';
import AccountBenefits from '@/components/AccountBenefits';
import AccountTypes from '@/components/AccountTypes';

export default function OpenAccountPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <OpenAccountHero />
        <InvestmentOptions />
        <AccountOpeningSteps />
        <AccountBenefits />
        <AccountTypes />
      </main>
      <Footer />
    </>
  );
}