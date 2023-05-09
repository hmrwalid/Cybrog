import "./MostPopular.css"
import popular_01 from "../../assets/images/popular-01.jpg";
import {Card} from "../../components/index"
const MostPopular = () => {
  return (
    <>
    <div className="section-wrapper">
        <div className="most-wrap-Header">
            <h4>Most Popular</h4>

        </div>
        <div className="most-wrap-Items">
         <Card/>
         <Card/>
         <Card/>
         


          
            
        </div>


    </div>
    
    </>
  )
}

export default MostPopular