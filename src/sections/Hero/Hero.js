import'./Hero.css'
const Hero = () => {
  return (
    <div className='hero-main'>
        <div className='hero-text'>
            <h6 className='hero-subTitle'> Welcome to Cyborg</h6>
            <h4 className='hero-title'> <em>BROWSE</em> OUR POPULAR GAMES HERE</h4>
        </div>
        <div className="main-button">
           <a href='browse.html'>Browse now</a>
        </div>

    </div>
  )
}

export default Hero