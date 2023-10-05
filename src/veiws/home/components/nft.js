// import { Box, Image, Link } from '@chakra-ui/react'
import more from '../../../asessts/images/icons/more options.png'
export function Nft(item) {


    return (
        <div key={item}>
            <div className="card">
                <div className="row uppersection">
                    <div className="col-md-6">
                        {item.props.maker_asset_bundle.assets[0].asset_contract.name.slice(0 , 20)} 
                    </div>
                    <div className="col-md-6 more">
                        <img src={more}  />
                    </div>
                </div>
                <img src={item.props.maker_asset_bundle.assets[0].image_original_url} />
                <div className="details">
                    <div className="row">
                        <div className="col">
                            Owner
                        </div>
                        <div className="col">
                            {item.props.maker.user}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Mint Address
                        </div>
                        <div className="col">
                            {item.props.maker.address}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Token Address
                        </div>
                        <div className="col">
                            {item.props.maker.address}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}