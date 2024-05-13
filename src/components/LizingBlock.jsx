import {Link} from 'react-router-dom';
export function LizingBlock({NameText,dopText,buttonText,routePath,imgs}){
    return(
    
   <div className="lizing-block">
        <div className="flex-row">
            <div className="flex-column">
                <div className="lizing-name-text">
                    {NameText}
                </div>
                <div className="lizing-text">
                    {dopText}
                </div>
                
                <div className="lizing-button">
                    <Link to={routePath}>{buttonText}</Link>
                </div>
            </div>
            <div className="lizing-img">
                    <img src={imgs}/>
                </div>
        </div> 
   </div>
 
    );
}
export default LizingBlock;