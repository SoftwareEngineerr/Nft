import React from 'react'
import PropTypes from 'prop-types'
import card from '../../asessts/images/icons/card.png'
import profile from '../../asessts/images/profile/avatar.png'

export const Header = props => {
  return (
    <header>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='card'>
                <div>
                  <img src={card} />
                </div>
                <div>
                 ETH/USDT
                </div>
                <div>
                  <span>
                    1137.62  +2.62%↑
                  </span>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='card right'>
                  <div>
                    <img src={profile} />
                  </div>
                  <div>
                    Zash
                  </div>
                  <div>
                      User ID: 11026666
                  </div>
                </div>
            </div>
          </div>
        </div>
    </header>
  )
}

Header.propTypes = {}