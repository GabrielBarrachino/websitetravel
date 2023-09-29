import { BsArrowLeftShort } from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'
import { BsDot } from 'react-icons/bs'
import imgLondon from '../../assets/london.jpg'
import imgGuanajuato from '../../assets/imgGuanajato.jpg'
import imgAngkorWat from '../../assets/imgAngkorWat.jpg'
import imgTaj from '../../assets/imgTajMahal.jpg'
import imgMachu from '../../assets/imgMachuPicchu.jpg'
import imgBahia from '../../assets/imgBahia.jpg'
import { useEffect } from "react"
import Aos from 'aos'
import 'aos/dist/aos.css'

export function Popular() {
  const Data = [
    {
      id: 1,
      imgSrc: imgLondon,
      desTitle: 'London',
      location: 'France',
      grade: 'CULTURAL RELAX',
    },
    {
      id: 2,
      imgSrc: imgGuanajuato,
      desTitle: 'Guanajuato',
      location: 'Mexico',
      grade: 'CULTURAL RELAX',
    },
    {
      id: 3,
      imgSrc: imgAngkorWat,
      desTitle: 'Angkor Wat',
      location: 'Cambodia',
      grade: 'CULTURAL RELAX',
    },
    {
      id: 4,
      imgSrc: imgTaj,
      desTitle: 'Taj Mahal',
      location: 'India',
      grade: 'CULTURAL RELAX',
    },
    {
      id: 5,
      imgSrc: imgMachu,
      desTitle: 'Machu Picchu',
      location: 'Peru',
      grade: 'CULTURAL RELAX',
    },
    {
      id: 6,
      imgSrc: imgBahia,
      desTitle: 'Bahia',
      location: 'Brazil',
      grade: 'CULTURAL RELAX',
    },
  ]

  useEffect(() => {
    Aos.init({duration: 2000, once: true})
  }, [])

  return (
    <section className="popular section container" id='popular'>
      <div className="secContainer">
        <div className="secHeader flex">
            <div className="textDiv" data-aos='fade-right' data-aos-duration='2500'>
              <h2 className="secTitle">Popular Destination</h2>
              <p>From historical cities to natural the specteculars, come see the best of the world!</p>
            </div>

            <div className="iconsDiv flex" data-aos='fade-left' data-aos-duration='2500'>
              <BsArrowLeftShort className='icon leftIcon'/>
              <BsArrowRightShort className='icon'/>
            </div>
        </div>

        <div className="mainContent grid" data-aos='fade-up' >
          {
            Data.map(({ id, imgSrc, desTitle, location}) => {
              return(
                <div className="singleDestination">
                  <div className="destImage">
                    <img src={imgSrc} alt="Image Title" />
                    <div className="overlayInfo">

                      <h3>{desTitle}</h3>
                      <p>{location}</p>

                      <BsArrowRightShort className='icon'/>
                    </div>
                  </div>

                  <div className="destFooter">
                    <div className="number">0{id}</div>

                    <div className="destText flex">
                      <h6>{location}</h6>
                      <span className="flex">
                        <span className="dot">
                          <BsDot className='icon'/>
                        </span>
                        Dot
                      </span>
                    </div>
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
  