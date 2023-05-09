import'./Card.css';
import popular_01 from "../../assets/images/popular-01.jpg"

const Card = () => {
  return (
    <>
          <div className="most-wrap-item">
                <div className="most-card-item">
                <img className="most-wrap-item-img" src={popular_01} alt="pop" />
                 <div className=" card-content">
                    <h4 className="crad-title">Fortnite <br/><span>Sandbox</span></h4>
                    <ul>
                        <li>4.8</li>
                        <li>2.3M</li>
                    </ul>
                 </div>
                </div>
            </div>
    </>
  )
}

export default Card
