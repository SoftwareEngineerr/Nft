import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Nft } from './components/nft';

import reload from '../../asessts/images/icons/refresh icon.png'
import Slider from "react-slick";
import Custombutton  from './components/custombutton';

export function Home() {
  const [nftData, setNftData] = useState([]);
  const [counter, setCounter] = useState(0);
  const API_URL = 'https://api.opensea.io/api/v1/assets';
  const API_KEY = '2eaa7768500b4e76aaff4aae8013fe56';

  const settings = {
    dots: false,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };


  useEffect(() => {

    const options = {
      method: 'GET',
      url: 'https://api.opensea.io/api/v2/orders/arbitrum/seaport/listings',
      headers: { accept: 'application/json', 'X-API-KEY': API_KEY },
      params: { limit: '10' },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.orders);
        setNftData(response.data.orders)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [counter])



  return (
    <div className="home">
      <div className='row firsrsection'>
        <div className='col-md-6'>
          <h1>
            DashBoard
          </h1>
        </div>
        <div className='col-md-6'>
          <button onClick={() => setCounter(counter + 1)}>
            <img src={reload} />
          </button>
        </div>
      </div>
      <div className='row'>
        <Slider {...settings}>
        {
          nftData &&
          (
            nftData.map((item, ind) =>
            <>
                {
                  item.maker_asset_bundle.assets[0].image_original_url != null ?
                <div key={ind} className="col-md-12 item">
                    <Nft props={item} />
                    </div>
                    :
                    null}
              </>
            )
          )
        }
        </Slider>
      </div>
      <div className='row custom'> 
        <div className='col-md-12'>
          {/* <button className='slick-prev' type="button" data-role="none">
            next
          </button> */}
        </div>
      </div>
    </div>
  );
}

// export default App;
