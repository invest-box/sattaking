import React from 'react';
import '../../styles/liveresult.css';

function Liveresult(props) {
  return (
    <div>
      <div className='mainLiveResult'>
        <div className='showResult'>

          <div className='resultIcon'> </div>
          <div className="resultHeading">
            <div className="heading_result">
              <h3> Disawar -:</h3>
              <h3>xx</h3>
            </div>
            <div className="heading_result">
              <h3> Faridabad -:</h3>
              <h3>xx</h3>
            </div>
          </div>

          <div className="resultHeading">
            <div className="heading_result">
              <h3> Ghaziabad -:</h3>
              <h3>xx</h3>
            </div>
            <div className="heading_result">
              <h3> Ghazipur_bazar -:</h3>
              <h3>xx</h3>
            </div>
          </div>

          <div className="resultHeading">
            <div className="heading_result">
              <h3> Gali -:</h3>
              <h3>xx</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Liveresult;
