import React from 'react'
import AlternateBanner from './AlternateBanner'

const SectionOne = () => {
    return (
        <>
            <section className='sectionOne container-xxl  pb-5 pt-5'>
                
                <div className='banners row   '>
                    <div className=' main-banner col-lg-6 position-relative'>
                        <div id="banners" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-bs-target="#banners" data-bs-slide-to="0" className="active"></li>
                                <li data-bs-target="#banners" data-bs-slide-to="1"></li>
                            </ol>
                            <div className="carousel-inner rounded">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="https://beconner.com/cdn/shop/files/main-banner-1_830x550.jpg?v=1687283527;" alt="First slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://beconner.com/cdn/shop/files/main-banner-2_830x550.jpg?v=1687283551;" alt="Second slide"/>
                                </div>
                            </div>
                        </div>
                        <div className='main-banner-content position-absolute'>
                            <h5 className='text-danger'>specialprice for pros</h5>
                            <h4 className='fs-1'>Special Sale</h4>
                            <p className='lh-lg'>From $99.00 to $999.00. <br /> for All kind. -_-*</p>
                            <button className='btn btn-secondary btn-outline-secondar'>BUY NOW</button>
                        </div>
                    </div>  
                    <div className='alternate-banners col-lg-6   gap-20 '>
                        <AlternateBanner offer='BEST SALE' title='Men clothes' firstLine='From $19.00 to' secondLine=' $99.99 .' imageSrc='https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600'   />
                        <AlternateBanner offer='15% off' title='For shoes' firstLine='shop the latest piece' secondLine='styles and colors' imageSrc='https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600'  />
                        {/* <AlternateBanner offer='NEW ARRIVAL' title='But Ipad Air' firstLine='High-fidelity playback &' secondLine='ultra-low distrtion' imageSrc='../../images/catbanner-03.jpg'  /> */}
                        {/* <AlternateBanner offer='FREE ENGRAVING' title='AirPods Max' firstLine='From $599.00 or' secondLine='$94.26 /mo. for 12 mo. *' imageSrc='../../images/catbanner-04.jpg'  /> */}
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default SectionOne