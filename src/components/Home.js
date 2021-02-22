import React from 'react';
import bigCircle from '../public/images/big-eclipse.svg'
import mediumCircle from '../public/images/mid-eclipse.svg'
import smallCircle from '../public/images/small-eclipse.svg'

function Home() {
    return (
        <section className="presentation">
            <div className="introduction">
                <div className="intro-text">
                    <h1>The way to make money</h1>
                    <p>With a personalized strategy, our trading algorithm will uncover new possibilities</p>
                </div>
                <div className="cta">
                    <button className="cta-select">Download the app</button>
                </div>
            </div>
            <img className='big-circle' src={bigCircle} alt='bigCircle'></img>
            <img className='medium-circle' src={mediumCircle} alt='mediumCircle'></img>
            <img className='small-circle' src={smallCircle} alt='smallCircle'></img>
        </section>
    )
}

export default Home;
