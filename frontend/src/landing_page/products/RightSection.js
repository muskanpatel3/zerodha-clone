import React from 'react';

function RigheSection({ imageURL, productName, productDesription, learnMore, }) {
    return (
        <div className='container mt-5 '>
            <div className='row '>
                <div className='col-6 p-5 mt-5'>
                    <h1 className='mt-5'>{productName}</h1>
                    <p>{productDesription} </p>
                    <a href={learnMore} > Lern More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>

                <div className='col-6 mt-5'>
                    <img src={imageURL} />

                </div>
            </div>

        </div>
    );
}

export default RigheSection;