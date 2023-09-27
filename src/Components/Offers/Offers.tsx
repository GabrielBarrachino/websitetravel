import { MdKingBed, MdBathtub, MdAirportShuttle, MdLocationOn } from 'react-icons/md'
import { FaWifi } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'
import imgPriceLondon from '../../assets/london2.jpg'
import imgPriceMachu from '../../assets/machu2.jpg'
import imgPriceBr from '../../assets/bahia2.jpg'

const Offer = [
  {
    id: 1,
    imgSrc: imgPriceLondon,
    destTitle: 'London',
    location: 'France',
    price: '$7,452',
    beds: '2 Beds',
  },
  {
    id: 2,
    imgSrc: imgPriceMachu,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    price: '$2,452',
    beds: '4 Beds',
  },
  {
    id: 3,
    imgSrc: imgPriceBr,
    destTitle: 'Bahia',
    location: 'Brazil',
    price: '$6,874',
    beds: '6 Beds',
  },
]

export function Offers() {
    return (
      <section className="offer container section">
        <div className="secContainer">

          <div className="secIntro">
            <h2 className="secTitle">Special Offers</h2>
            <p>From historical cities to natural specteculars, come see the best of the world!</p>
          </div>

          <div className="mainContent grid">
            {
              Offer.map(({ imgSrc, destTitle, location, price, beds }) => {
                return(
                  <div className="singleOffer">
                    <div className="destImage">
                      <img src={imgSrc} alt={destTitle}/>
                      <span className="discount">30% Off</span>
                    </div>

                    <div className="offerBody">
                      <div className="price flex">
                        <h4>{price}</h4>
                        <span className="status">For Rent</span>
                      </div>

                      <div className="amenities flex">
                        <div className="singleAmenities flex">
                          <MdKingBed className='icon'/>
                          <small>{beds}</small>
                        </div>

                        <div className="singleAmenities flex">
                          <MdBathtub className='icon'/>
                          <small>1 Bath</small>
                        </div>

                        <div className="singleAmenities flex">
                          <FaWifi className='icon'/>
                          <small>Wi-fi</small>
                        </div>

                        <div className="singleAmenities flex">
                          <MdAirportShuttle className='icon'/>
                          <small>Shuttle</small>
                        </div>
                      </div>

                      <div className="location flex">
                          <MdLocationOn className='icon'/>
                          <small>450 Vine #310, {location}</small>
                      </div>

                      <button className="btn flex">
                        View Details
                        <BsArrowRightShort className='icon'/>
                      </button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    )
}
  