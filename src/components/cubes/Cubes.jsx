import './cubes.scss';

const Cubes = () => {
  const numberOfCubes = 14;
  const cubeContainers = Array.from({ length: numberOfCubes }, (_, index) => index + 2);

  return (
    <div className='cubes'>
      {cubeContainers.map((containerNumber) => (
        <div key={containerNumber} className={`container${containerNumber}`}>
          <div className="cube"  id={`cube${containerNumber}`}>
            {Array.from({ length: 6 }, (_, faceIndex) => (
              <div key={faceIndex} className={`face ${['front', 'back', 'right', 'left', 'top', 'bottom'][faceIndex]}${containerNumber}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cubes;
