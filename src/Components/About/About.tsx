import imgClimbing from '../../assets/climbing.svg'
import imgCustomer from '../../assets/customer.svg'
import imgMountain from '../../assets/mountain.svg'
import video from '../../assets/video.mp4'


export function About() {
    return (
      <section className="about section">
        <div className="secContainer">
          <div className="title">
            <h4>Why Hikings?</h4>
          </div>

          <div className="mainContent container grid">
              <div className="singleItem">
                <img src={imgMountain} alt="Image Name" />
                <h3>100+ Mountains</h3>
                <p>Research shows that a chance to break away from the normal rhyrhms of daily life reduces stress and improves health and well-being.</p>
              </div>

              <div className="singleItem">
                <img src={imgClimbing} alt="Image Name" />
                <h3>1000+ Hikings</h3>
                <p>Research shows that a chance to break away from the normal rhyrhms of daily life reduces stress and improves health and well-being.</p>
              </div>

              <div className="singleItem">
                <img src={imgCustomer} alt="Image Name" />
                <h3>2000+ Customer</h3>
                <p>Research shows that a chance to break away from the normal rhyrhms of daily life reduces stress and improves health and well-being.</p>
              </div>
          </div>

          <div className="videoCard container">
            <div className="cardContent grid">
              <div className="cardText">
                <h2>Wonderful House experience nin there!</h2>
                <p>The Adventure subranking is based on an equaly weighted average of scores from five country.</p>
              </div>

              <div className="cardVideo">
                <video src={video} autoPlay loop muted typeof='video/mp4'></video>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  