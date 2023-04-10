import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt='' />
        

        <div className='home__row'>
            <Product id="001"
            title="The Lean Startup"
                      price={29.99}
                      image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/E/S/180324_1602089691.jpg"
                      rating={5}  />

            <Product id="002"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                      price={239.0}
                      image= "https://m.media-amazon.com/images/I/61FJtVQh9bL._AC_SS450_.jpg"
                      rating={5} />
        </div>

        <div className='home__row'>
        <Product id="003"
        title="Samsung LC49RG90SSUXEN 49' Curved LED Gamin Monitor"
                      price={199.99}
                      image="https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/gigabyte_g34wqc_a_34_4k_144hz_va_1635960033_1662545.jpg"
                      rating={3} />
        <Product id="004"
         title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                      price={98.99}
                      image="https://paykobo.com/media/catalog/product/image/41668b79b/echo-dot-3rd-gen-smart-speaker-with-alexa-charcoal-fabric-speaker-15miaxus.jpg.mst.webp?width=700&height=700&store=default&image-type=image"
                      rating={5}/>
        <Product id="005"
        title="New Apple iPad Pro(12.9-inch, Wi-Fi, 128GB)-Silver (4th Generation)"
                      price={598.99}
                      image="https://www-konga-com-res.cloudinary.com/w_600,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/O/S/67343_1615917094.jpg"
                      rating={4}/>
        </div>

        <div className='home__row'>
        <Product id="006"
        title="Samsung LC49RG90SSUXEN 49' Curved LED Gamin Monitor"
                      price={1029.99}
                      image="https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/gigabyte_g34wqc_a_34_4k_144hz_va_1635960033_1662545.jpg"
                      rating={4}/>
        </div>
      </div>
    </div>
  )
}

export default Home