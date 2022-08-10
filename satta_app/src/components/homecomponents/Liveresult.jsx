import React from 'react';
import '../../styles/liveresult.css';

function Liveresult(props) {
  return (
    <div>
      <div className='mainLiveResult'>
        <div className='showResult'>

          <div className='resultIcon'> </div>
          <div className="resutresponsive">
          <div className="resultHeading">
           
           <div className="heading_result">
             <p> Disawar -: <span>xx</span></p>
            
           </div>
           <div className="heading_result">
             <p> Faridabad -: <span>xx</span></p>
            
           </div>
         </div>

         <div className="resultHeading">
           <div className="heading_result">
             <p> Ghaziabad -: <span>xx</span></p>
             {/* */}
           </div>
           <div className="heading_result">
             <p> Ghazipur_bazar -: <span>xx</span></p>
            
           </div>
         </div>

         <div className="resultHeading">
           <div className="heading_result">
             <p> Gali -: <span>xx</span></p>
            
           </div>
         </div>
              </div>
        
        </div>
      </div>
    </div>
  );
}

export default Liveresult;
