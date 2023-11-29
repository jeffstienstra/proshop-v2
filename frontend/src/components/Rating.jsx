import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'

const Rating = ({value, text}) => {
    const stars = [1, 2, 3, 4, 5]; /* 5 stars is max rating */

    return (
        <div className='rating'>
            {stars.map((star) => (
                <span key={star}>
                    {value >= star ? <FaStar /> : value >= star - 0.5 ? <FaStarHalfAlt /> : <FaRegStar />}
                </span>
            ))}
            <span className="rating-text">{text && text}</span>
        </div>
    )
}

export default Rating