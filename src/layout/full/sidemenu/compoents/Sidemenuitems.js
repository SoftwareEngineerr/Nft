import React from 'react'
import PropTypes from 'prop-types'
import Home from '../../../../asessts/images/icons/home.png'
import listing from '../../../../asessts/images/icons/nft listing.png'
import settings from '../../../../asessts/images/icons/settings.png'




export const Sidemenuitems = (props) => {
    const arr = [
        {id: 1, name:'Home' , icon: Home},
        {id: 2, name:'Listing' , icon: listing},
        {id: 3, name:'settings' , icon: settings},
    ];

  return (
    <div className='items'>
        {
            arr && (
                arr.map((item , ind)=>
                    <div key={ind} className='smimages'>
                        <img key={ind}  src={item.icon} />
                    </div>
                )
            )
        }
    </div>
  )
}

Sidemenuitems.propTypes = {}