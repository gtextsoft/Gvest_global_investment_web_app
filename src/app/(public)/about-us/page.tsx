import React from 'react'
import Head from 'next/head'
import CoreValue from '@/components/features/about/CoreValue'
import PageHeader from '@/components/shared/PageHeader'
import LeadershipSection from '@/components/features/about/LeadershipSection'
import CTA from '@/components/features/about/CTA'

const About = () => {
  return (
    <>
    <Head>
      <title>GVEST Global || About Us</title>
      <meta
        property="og:description"
        content="Learn about GVEST: Our core values, our dedicated team, and our commitment to providing cutting-edge financial technology solutions, real estate, banking, investments, and financial inclusion. Join us for a brighter financial future."
      />
    </Head>
    <PageHeader title="ABOUT US" />
    <div className="grid gap-10 md:gap-20 max-w-[1400px] w-full px-5 md:px-10 mx-auto py-[100px]">

      {/* Intro */}

      <div className="grid gap-5">
        <h3 className="text-3xl font-semibold font-montserrat text-[#18181B] leading-normal">
          Real Estate Investment, Simplified.
        </h3>
        <div className="grid gap-3 font-inter">
          <p className="text-base md:text-lg font-normal font-inter">
            GVEST Cooperative is a real estate fractional investment scheme
            designed to make property investment accessible to everyone. We
            empower diverse investors to own a stake in high-value real estate
            assets without the burden of full ownership—while still enjoying
            steady returns on investment.
          </p>
          <p className="text-base md:text-lg font-normal">
            Through fractional ownership, we enable individuals to co-own
            properties, share benefits such as income generation, reduced
            costs, and usage rights, and grow their wealth effortlessly.
          </p>
        </div>
      </div>

      {/* Core Values */}

      <CoreValue />
    </div>

    {/* Meet Our Leadership */}
    
    <LeadershipSection />

    <CTA />
  </>
  )
}

export default About