import './parallax.scss'

const Parallax = () => {
  return (
    <div className='parallax_wrapper'>
       <div className="parallax_group intro_screen" id='intro'>
          <h1>Amit Singh</h1>
        </div>
        <div className="parallax_group" id='group-1'>
          <div className="parallax_layer base_layer">
            <h1>Base Layer</h1>
          </div>
          <div className="parallax_layer mid_layer">
            <h1>Mid layer page</h1>
          </div>
        </div>
        <div className="parallax_group" id='group-2'>
          <div className="parallax_group mid_layer">
            <h1>Mid layer page</h1>
          </div>
          <div className="parallax_layer top_layer">
            <h1>Top layer page</h1>
          </div>
        </div>
        <div className="parallax_group outro_screen" id='outro'> 
          <h1>The End</h1>
        </div>
    </div>
  )
}

export default Parallax