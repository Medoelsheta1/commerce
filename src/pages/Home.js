import React from 'react'
import SectionOne from '../Components/Home-content/SectionOne'
import SectionTwo from '../Components/Home-content/SectionTwo'
import SectionThree from '../Components/Home-content/SectionThree'
// import SectionFour from '../Components/Home-content/SectionFour'

const Home = () => {
    return (
        <div className='home'>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            {/* <SectionFour /> */}
        </div>
    )
}

export default Home 