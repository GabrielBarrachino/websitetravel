export function Home() {
    return (
      <div>
        <section className="home" id="home">
          <div className="secContainer container">
            <div className="homeText">
              <div className="homeText">
                <h1 className="title">Plan Your Trip With Travel Dot</h1>
                <p className="subtitle">
                  Travel to your favourite city with respctful of the environment!
                </p>

                <button className="btn">
                  <a href="#">Explore Now</a>
                </button>
              </div>
            </div>

            <form action="" className="homeCard grid">
              <div className="locationDiv">
                <label htmlFor="location">Location</label>
                <input type="text" placeholder="Dream Destination" required/>
              </div>

              <div className="distDiv">
                <label htmlFor="distance">Distance</label>
                <input type="text" placeholder="11/Meters" required/>
              </div>

              <div className="priceDiv">
                <label htmlFor="price">Price</label>
                <input type="number"  min="140" max="500" placeholder="$140-$500" required/>
              </div>
              <button className="btn">
                Search
              </button>
            </form>
          </div>
        </section>
      </div>
    )
  }
  