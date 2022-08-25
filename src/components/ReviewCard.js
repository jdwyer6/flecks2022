import { Col } from 'reactstrap';
import { BsStarFill } from 'react-icons/bs';

const ReviewCard = ({title, message, author, icon}) => {
    return ( 
        <Col className='d-flex flex-column px-5 review-card'>
            <span className='text-center my-3'>
                <BsStarFill className='mx-1 star'/><BsStarFill className='mx-1 star'/><BsStarFill className='mx-1 star'/><BsStarFill className='mx-1 star'/><BsStarFill className='mx-1 star'/>
            </span>
            <h5 className='text-center'>{title}</h5>
            <p className='text-center my-3 fs-6 fst-italic'>{message}</p>
            <span className='text-center'>
                {icon}
            </span>

            <p className='text-center fw-light'>{author}</p>
        </Col>
     );
}
 
export default ReviewCard;