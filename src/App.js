import './App.css';
import equilibrium from './images/image-equilibrium.jpg'
import ethereum from './images/icon-ethereum.svg';
import clock from './images/icon-clock.svg'
import artist from './images/image-avatar.png'
import view from './images/icon-view.svg'

function App() {
  return (
    <>
      <div className='card-component'>

        <img className='equilibrium' src={equilibrium} alt="NFT Artist Equilibrium"/>
        <div className='absolute-view'>
          <img className='view' src={view} alt=""/>
        </div>
        
        <h2>Equilibrium #3429</h2>
        <p>Our Equilibrium collection promotes balance and calm</p>

        <div className='nft-info'>
          <div className='ETH'>
            <img className='ethereum' src={ethereum} alt=""/>
            <p>0.041 ETH</p>
          </div>
          <div className='time'>
            <img className='clock' src={clock} alt=""/>
            <p>3 days left</p>
          </div>
        </div>

        <hr/>

        <div className='artist-info'>
          <img src={artist} alt=""/>
          <p>Creation of <span>Jules Wyvern</span></p>
        </div>

      </div>
    </>
  );
}

export default App;
