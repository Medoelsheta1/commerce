import React from 'react'
import Category from './Category'
const SectionThree = () => {
    return (
        <>
            <section className='sectionThree bg-white pt-5 pb-5'>
                <h2 className='text-center pb-3'>Categories</h2>
                <div className='container bg-white rounded p-4'>
                    <div className='categories'>
                        <div className='row'>
                            
                            <Category to='/products/Kids' title='Kids'  imageSrc='https://images.pexels.com/photos/6437836/pexels-photo-6437836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' isBorderRight={true} />
                            <Category to='/products/Women' title='Women'  imageSrc='https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' isBorderRight={true} />
                            <Category to='/products/Men' title='Men' imageSrc='https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600' isBorderRight={false} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionThree