import DefaultCard from "./cards/DefaultCard.tsx";


function Home(){

    return (
        
          <>
              <br/>

             <div className='container'>
                 <div className='row'>

                     <div className='col-12 col-sm-6 col-md-4 col-lg-3'>

                         <DefaultCard thumbnail={'https://img.freepik.com/free-photo/portrait-woman-customer-service-worker_144627-37939.jpg?t=st=1717219193~exp=1717222793~hmac=86a01e083b2abdf37b5143f80275b948fd5ba263e53b0f52f1d4e428dbb75795&w=360'}
                                      description={'is simply dummy text of the printing and typesetting industry. '}
                                      title={'customer'} value={250} key={1}/>

                     </div>
                     <div className='col-12 col-sm-6 col-md-4 col-lg-3'>

                         <DefaultCard thumbnail={'https://img.freepik.com/free-photo/levitating-women-s-bag-display_23-2149817613.jpg?t=st=1717218566~exp=1717222166~hmac=4fab0d91af6099bace6886245973da5bfa33eb5b17db19bbe8a9fdf424b692ae&w=360'}
                                      description={'is simply dummy text of the printing and typesetting industry. '}
                                      title={'products'} value={250} key={2}/>


                     </div>
                     <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                         <DefaultCard thumbnail={'https://img.freepik.com/free-photo/shopping-cart-with-gift-box-icon-promotion-discount-sale-reward-checkout-ecommerce-online-shopping-3d-illustration_56104-2102.jpg?t=st=1717218440~exp=1717222040~hmac=8eba9709595c51302fcb06c9931923f030789d0a089e7e7ef668dcad546aff46&w=826'}
                                      description={'is simply dummy text of the printing and typesetting industry.'}
                                      title={'orders'} value={250} key={3}/>

                     </div>
                     <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                         <DefaultCard thumbnail={'https://img.freepik.com/free-vector/finance-app-concept-illustration_114360-8295.jpg?t=st=1717218589~exp=1717222189~hmac=f198e9778feb6d894d5daaca338c7bd62c740ed42fac2a7f2d83cc754ed653b7&w=740'}
                                      description={'is simply dummy text of the printing and typesetting industry.'}
                                      title={'income'} value={250} key={4}/>


                     </div>



                 </div>


             </div>


          </>

    )
}

export default Home