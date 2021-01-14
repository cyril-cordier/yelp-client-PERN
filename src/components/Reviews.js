import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import StarRating from './StarRating'
import './style.css'
import RestaurantFinder from '../apis/RestaurantFinder'


const Reviews = ({reviews}) => {

    const location = useLocation();
    const history = useHistory();

    const deleteReview = async (id) => {
        try {
            await RestaurantFinder.delete(`/deleteReview/${id}`)
            history.push("/")
            history.push(location.pathname)
            
            
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="row row-cols-3 mb-2">
            {reviews.map((review) => {

                return(
                    <div 
                    key={review.id}
                    className="card text-white bg-primary mb-3 p-0 marge" style={{maxWidth: "30%"}}>

                        <div className="card-header d-flex justify-content-between">
                            <div>
                                <span><StarRating rating={review.rating}/></span>
                                <span> {review.name}</span>
                            </div>
                            <span onClick={() => deleteReview(review.id)} className="mx-2"><i className="far fa-trash-alt"></i></span>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{review.review}</p>
                        </div>
                    </div>
                )
            })}
            

            
        </div>
    )
}

export default Reviews
