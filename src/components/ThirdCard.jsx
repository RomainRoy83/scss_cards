import illuCardOne from '../assets/img/illuCardOne.png'

const ThirdCard = () => {
  return (
    <div className='thirdCard'>
      <div className='top'>
        <div className='imgContainer'>
          <img src={illuCardOne} alt='Skyscraper' className='skyscraper' />
        </div>
        <div className='menu'>...</div>
      </div>
      <div className='bottom'>
        <div className='habilitado'>HABILITADO</div>
        <h1 className='title'>Valores predeterminados en formulario</h1>
        <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde sapiente doloremque sed qui doloribus numquam ducimus nam dignissimos reiciendis.</p>
      </div>
    </div>
  )
}

export default ThirdCard;