import '../src/Styles/css/main.min.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Components/Home/Home';
import { Popular } from './Components/Popular/Popular';
import { Offers } from './Components/Offers/Offers';
// import { About } from './Components/About/About';
// import { Blog } from './Components/Blog/Blog';
// import { Footer } from './Components/Footer/Footer';

export function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Popular/>
      <Offers/>
      {/* <About/>
      <Blog/>
      <Footer/> */}
    </div>
  )
}
