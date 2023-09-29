import { BsArrowRightShort } from 'react-icons/bs'
import imgMorocco from '../../assets/morocco.jpg';
import imgEiffel from '../../assets/eiffel.jpg';
import imgTunisia from '../../assets/tunisia.jpg';
import imgAfrica from '../../assets/kenya.jpg';
import { useEffect } from "react"
import Aos from 'aos'
import 'aos/dist/aos.css'

const Post = [
  {
    id: 1,
    postImage: imgMorocco,
    title: 'Beautiful Morocco, let us travel!',
    desc: 'The Kingdomof Morocco is a Muslim country in western North Afria, with coastlines on the Atlantic Ocean and Mediterranean Sea.'
  },
  {
    id: 2,
    postImage: imgEiffel,
    title: 'Romantic moments under Eiffel Tower',
    desc: 'The Kingdomof Eiffel Tower is a Muslim country in western North Afria, with coastlines on the Atlantic Ocean and Mediterranean Sea.'
  },
  {
    id: 3,
    postImage: imgTunisia,
    title: 'Let us have an adventure outside Tunisia.',
    desc: 'The Kingdomof Tunisia is a Muslim country in western North Afria, with coastlines on the Atlantic Ocean and Mediterranean Sea.'
  },
  {
    id: 4,
    postImage: imgAfrica,
    title: 'Best country in East Africa',
    desc: 'The Kingdomof Kenya is a Muslim country in western North Afria, with coastlines on the Atlantic Ocean and Mediterranean Sea.'
  },
]

export function Blog() {
  useEffect(() => {
    Aos.init({duration: 2000, once: true})
  }, [])

  return (
    <section className="blog container" data-aos='fade-up' data-aos-duration='2500' id='blog'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Our Best Blog?</h2>
          <p>An insight to the incredible experience in the world.</p>
        </div>

        <div className="mainContainer grid">
          {
            Post.map(({ postImage, title, desc }) => {
              return(
                <div className="singlePost grid">
                  <div className="imgDiv">
                    <img src={postImage} alt={title} />
                  </div>

                  <div className="postDetails">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>

                  <a href="" className="flex">
                    Read More
                    <BsArrowRightShort className='icon'/>
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
  