import React from 'react'
import {FaShippingFast  ,FaCcVisa} from 'react-icons/fa'
import {SlPresent} from 'react-icons/sl'
import {FiHeadphones} from 'react-icons/fi'
import {BsCoin} from 'react-icons/bs'
import Service from './Service'
const SectionTwo = () => {
    return (
        <>
            <section className='sectionTwo pt-5'>
                <div className='container '>
                    <div className=' services  d-flex justify-content-center align-items-center'>
                        <Service icon={<FaShippingFast className='fs-1' />} title='Affordable Prices' paragraf='From all orders over $100' />
                        <Service icon={<SlPresent className='fs-2' />} title='Daily Surprise Offers' paragraf='Save up to 25% off' />
                        <Service icon={<FiHeadphones className='fs-2' />} title='Support 24/7' paragraf='Shop with an expert' />
                        <Service icon={<BsCoin className='fs-2' />} title='Affordable Prices' paragraf='Get Factory direct price' />
                        <Service icon={<FaCcVisa className='fs-2' />} title='secure Payment' paragraf='100% Protected Payment' />
                    </div>
                </div>

            </section>
        </>
    )
}

export default SectionTwo