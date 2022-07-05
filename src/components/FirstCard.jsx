import illuCardOne from '../assets/img/illuCardOne.png'
import starEmpty from '../assets/img/starEmpty.png'
import starFull from '../assets/img/starFull.png'

const FirstCard = () => {
  return (
    <div className='firstCard'>
      <div className='illuFirstCard'>
        <img src={illuCardOne} alt='Album cover: skyscraper' />
      </div>
      <div className='cardOneContent'>
        <h1 className='cardOneTitle'>Title</h1>
        <div className='globalRating'>
          <div className='rating'>
            <img src={starFull} alt='Colored star' className='ratingStarFull' />
            <img src={starFull} alt='Colored star' className='ratingStarFull' />
            <img src={starFull} alt='Colored star' className='ratingStarFull' />
            <img src={starFull} alt='Colored star' className='ratingStarFull' />
            <img src={starEmpty} alt='Empty star' className='ratingStarEmpty' />
          </div>
          <p className='ratingNumber'>4 (413)</p>
        </div>
        <h2 className='cardOneScdTitle'>Secondary text</h2>
        <p className='cardOneDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nulla quos amet nisi fuga neque. Quod ducimus optio vero perferendis.</p>
        <div className='separatorCardOne'></div>
        <div className='itemsSection'>
            <h2>Subtitle</h2>
          <div className='subItems'>
            <div className='item'>Item 1</div>
            <div className='item'>Item 2</div>
            <div className='item'>Item 3</div>
            <div className='item'>Item 4</div>
          </div>
          <button className='action'>ACTION 1</button>
        </div>
      </div>
    </div>
  )
}

export default FirstCard;