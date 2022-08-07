import React from 'react'
import '../styles/Spinner.css'

const Spinner = () => {
    return ( 
        <div className='container-loading'>
            <div className='lds-ring'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </div>
     );
}
 
export default Spinner;