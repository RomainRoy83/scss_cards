import illuCardOne from '../assets/img/illuCardOne.png'
import starEmpty from '../assets/img/starEmpty.png'

const SecondCard = () => {
  return (
    <div className='secondCard'>
      <div className='upperSection'>
        <div className='imageSection'>
          <img className='imageContent' src={illuCardOne} alt='Album cover: Skyscraper' />
        </div>
        <div className='infoCardTwo'>
          <h1>Rozes</h1>
          <p>Under the Grave</p>
          <p>(2016)</p>
        </div>
      </div>
      <div className='sectionSeparator'></div>
      <div className='lowerSection'>
        <p>Rate this album</p>
        <div className='ratingCardTwo'>
          <img src={starEmpty} alt='Empty star' className='void' />
          <img src={starEmpty} alt='Empty star' className='void' />
          <img src={starEmpty} alt='Empty star' className='void' />
          <img src={starEmpty} alt='Empty star' className='void' />
          <img src={starEmpty} alt='Empty star' className='void' />
        </div>
      </div>
    </div>
  )
}

export default SecondCard;