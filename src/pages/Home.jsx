import React from 'react'
import Hero from '../components/home/Hero'
import Grow from '../components/home/Grow'
import ContactCTA from '../components/home/ContactCTA'
import DigitalMarketingService from '../components/home/DigitalMarketingService'
import GraphicDesignSection from '../components/home/GraphicDesignSection'
import VideoEditingAnimation from '../components/home/VideoEditingAnimation'
import WebDesignDevelopment from '../components/home/WebDesignDevelopment'
import WhySelect from '../components/home/WhySelect'
import MarketingAndTestimonials from '../components/home/MarketingAndTestimonials'
import FAQ from '../components/home/FAQ'
import ContactSection from '../components/home/ContactSection'

const Home = () => {
    
  
    return (
    <>
    <Hero/>
    <Grow/>
    <ContactCTA/>
    <DigitalMarketingService/>
    <GraphicDesignSection/>
    <VideoEditingAnimation/>
    <WebDesignDevelopment/>
    <WhySelect/>
    <MarketingAndTestimonials/>
    <FAQ/>
    <ContactSection/>
    </>
  )
}

export default Home