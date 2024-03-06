import './water.scss';
import Parallax from '../parallax/Parallax';

const Water = () => {
  return (
    <div>
             <Parallax>
      <div class="box">

        <div class="content">
           About Me 
        </div>
        <div id="water" class="water">
          <svg viewBox="0 0 560 20" class="water_wave water_wave_back">
            <use xlinkHref="#wave"></use>
          </svg>
          <svg viewBox="0 0 560 20" class="water_wave water_wave_front">
            <use xlinkHref="#wave"></use>
          </svg>
        </div>
       
      </div>
      </Parallax>
    </div>
  );
};

export default Water;
