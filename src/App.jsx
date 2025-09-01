import { useEffect, useState } from 'react'
import './App.css'
import Headersection from './component/header'

import ContactCard from './component/contact'
import Testimonial from './component/testimonial'
import Footer from './component/footer'
import SlideSection from './component/slidesection'
import WhyChooseUs from './component/whychooseus'
import IotServicesSection from './component/iotservicesection'
import BenefiltsSection from './component/benefilts'
import IotSoftwareServices from './component/iotsoftwareservice'
import ExploreCard from './component/explorecard'
import StaffAugmentation from './component/herostaffaugmentation'
import IndustrySlider from './component/industryslider'
import PainPointsSection from './component/painponitsection'
import BusinessGrowth from './component/bussinessgrowth'
import EmployeesPlacedJobs from './component/employeesplacedjobs'
import Bridge from './component/bridge'
import StaffingServices from './component/staffingservices'

function App() {
  const [count, setCount] = useState(0)

  // 👇 Scroll to top on reload
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>

      <Headersection />
      <StaffAugmentation />
      <IndustrySlider />
      <PainPointsSection />
      <BusinessGrowth />
      <WhyChooseUs />
      <SlideSection />
      <EmployeesPlacedJobs />
      <Bridge />
      <StaffingServices />
      <ContactCard />
      <Testimonial />
      <Footer />

    </>
  )
}

export default App
