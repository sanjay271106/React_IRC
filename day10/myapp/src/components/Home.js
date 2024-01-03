import React from 'react';
import img1 from'../assets/images/perfect.jpg'
const Home = () => {
  return (
    <div className="wrapper">
      <div className="player__container">
        <div className="player__body">
          <div className="body__cover">
            <img src={img1} alt="Album cover" />
            <div className="range"></div>
          </div>

          <div className="body__info">
            <div className="info__album">The Hunting Party</div>
            <div className="info__song">Final Masquerade</div>
            <div className="info__artist">Linkin Park</div>
          </div>

          <div className="body__buttons">
            <ul className="list list--buttons">
              <li><a href="#" className="list__link"><i className="fa fa-step-backward"></i></a></li>
              <li><a href="#" className="list__link"><i className="fa fa-play"></i></a></li>
              <li><a href="#" className="list__link"><i className="fa fa-step-forward"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
