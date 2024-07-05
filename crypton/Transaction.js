import React from 'react'

function Transaction() {
  return (
    <>

<div className="tr-codes">
    
    <div className="transaction">

        <div className="t-head">
            <h2 className='inline p-2'>Last Tranaction</h2>
            <h2 className="col-2">See All</h2>

        </div>

        <div className="tr-item">
            
            <div className="tr-col-11">
                <i className="fa-solid fa-person"></i>
            </div>



            <div className="tr-col-12 t-main ">

                <h2>ArokiJI</h2>
                <h4>28-feb 2023 .06.23 PM </h4>


            </div>


            <div className="tr-col-13">

                <h2>+$13.00</h2>
                <h4>Received</h4>


            </div>
        </div>


        <div className="tr-item">
            
            <div className="tr-col-11">
                <i className="fa-solid fa-person"></i>
            </div>

            <div className="tr-col-12">

                <h2>Kizaruu</h2>
                <h4>28-feb 2023 .06.23 PM </h4>


            </div>


            <div className="tr-col-13">

                <h2>+$13.00</h2>
                <h4>Received</h4>


            </div>
        </div>



        <div className="tr-item grid grid-col-2">
            
            <div className="tr-col-11">
                <i className="fa-solid fa-person"></i>
            </div>

            <div className="tr-col-12">

                <h2>Akainu</h2>
                <h4>28-feb 2023 .06.23 PM </h4>


            </div>


            <div className="tr-col-13">

                <h2>+$13.00</h2>
                <h4>Received</h4>


            </div>
        </div>
          



           
               


            
        </div>
    </div>
    
    
    
    </>
  )
}

export default Transaction;