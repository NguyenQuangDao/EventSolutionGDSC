import React from 'react';
import './SlideBanner.scss';

function SlideBanner(props) {
  const handlePrev = () => {
    let listItem = document.querySelectorAll('.item')
    document.querySelector('.side').appendChild(listItem[0])

  }
  const handleNext = () => {
    let listItem = document.querySelectorAll('.item')
    document.querySelector('.side').prepend(listItem[listItem.length - 1 ])
  }

  return (
    <div className='Container'>
      <div className='side'>
        <div className='item' style={{ backgroundColor: 'blue' }}>
          <div className='Title'>
            <div className='Name'>ha long</div>
            <div className='Content'>dep tuyet voi</div>
          </div>
        </div>
        <div className='item' style={{ backgroundColor: '#B31942' }}>
          <div className='Title'>
            <div className='Name'>ha long</div>
            <div className='Content'>dep tuyet voi</div>
          </div>
        </div>
        <div className='item' style={{ backgroundColor: '#623836' }}>
          <div className='Title'>
            <div className='Name'>ha long</div>
            <div className='Content'>dep tuyet voi</div>
          </div>
        </div>
        <div className='item' style={{ backgroundColor: '#BBDF32' }}>
          <div className='Title'>
            <div className='Name'>ha long</div>
            <div className='Content'>dep tuyet voi</div>
          </div>
        </div>
        <div className='item' style={{ backgroundColor: '#48335E' }}>
          <div className='Title'>
            <div className='Name'>ha long</div>
            <div className='Content'>dep tuyet voi</div>
          </div>
        </div>
        <div className='item' style={{ backgroundColor: '#8B4202' }}>
          <div className='Title'>
            <div className='Name'>ha long</div>
            <div className='Content'>dep tuyet voi</div>
          </div>
        </div>
      </div>
      <div className='Next_prev'>
        <div className='prev_icon' onClick={handlePrev}>

        </div>
        <div className='next_icon' onClick={handleNext}>

        </div>
      </div>
    </div>
  );
}

export default SlideBanner;