import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { Main } from './Main';
import Footer from './Footer'


function App() {
  return(
    <div className='body'>
      <Header />
      <Main />
      <Footer />
      <div className='video-section'>
        <iframe width="640" height="360" src="https://www.youtube.com/embed/iqoNoU-rm14" title="Max Brhon - Cyberpunk [NCS Release]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='iframe'></iframe>
      </div>
    </div>
  )
}

export default App;
