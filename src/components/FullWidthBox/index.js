import Button from '../Button';
import { Link } from "react-router-dom";

function FullWidthBox(props){
    return (
        <div className="full-width-box">
            <div className="full-width-box__logo">
                <img src={props.logo}/>
            </div>
            <div className="full-width-box__detail">
                <h2>{props.title}</h2>
                <p>{props.detail}</p>
                    <div style={{textAlign:'left'}}>
                    <Link to={props.route}>
                        <Button>مشاهده</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FullWidthBox;