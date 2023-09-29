import { useEffect } from "react"
import Aos from 'aos'
import 'aos/dist/aos.css'

export function Home() {
  useEffect(() => {
    Aos.init({duration: 2000, once: "true"})
  }, [])

    return (
      <section className="home" id="home">
          <div className="secContainer container">
            <div className="homeText">
              <div className="homeText">
                <h1 className="title" data-aos='fade-up' >Plan Your Trip With Travel Dot</h1>
                <p className="subtitle" data-aos='fade-up' data-aos-duration='2500'>
                  Travel to your favourite city with respctful of the environment!
                </p>

                <button className="btn" data-aos='fade-up' data-aos-duration='3000'>
                  <a href="#">Explore Now</a>
                </button>
              </div>
            </div>

            <form action="" className="homeCard grid">
              <div className="locationDiv" data-aos='fade-right' data-aos-duration='2000'>
                <label htmlFor="location">Location</label>
                <input type="text" placeholder="Dream Destination" required/>
              </div>

              <div className="distDiv" data-aos='fade-right' data-aos-duration='2500'>
                <label htmlFor="distance">Distance</label>
                <input type="text" placeholder="11/Meters" required/>
              </div>

              <div className="priceDiv" data-aos='fade-right' data-aos-duration='3000'>
                <label htmlFor="price">Price</label>
                <input type="number"  min="140" max="500" placeholder="$140-$500" required/>
              </div>
              <button className="btn" data-aos='fade-left' data-aos-duration='2000'>
                Search
              </button>
            </form>
          </div>
      </section>
    )
}
  