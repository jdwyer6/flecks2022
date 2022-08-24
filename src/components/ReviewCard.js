import { Col } from 'reactstrap';
import { BsStarFill } from 'react-icons/bs';
import { SiGooglemaps } from 'react-icons/si'

const ReviewCard = ({title, message, author}) => {
    return ( 
        <Col className='d-flex flex-column px-5 review-card'>
            <span class='text-center my-3'>
                <BsStarFill className='mx-1 star'/><BsStarFill className='mx-1 star'/><BsStarFill className='mx-1 star'/><BsStarFill className='mx-1 star'/><BsStarFill className='mx-1 star'/>
            </span>
            <h5 className='text-center'>{title}</h5>
            <p className='text-center my-3 fs-6 fst-italic'>{message}</p>
            <span class='text-center'>
                <SiGooglemaps />
            </span>

            <p className='text-center fw-light'>{author}</p>
        </Col>
     );
}
 
export default ReviewCard;