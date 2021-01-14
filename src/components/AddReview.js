import React, {useState, useEffect} from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'

const AddReview = () => {
    const {id} = useParams();
    const location = useLocation();
    const history = useHistory();
    
    
const [name, setName] = useState("")
const [reviewText, setReviewText] = useState("")
const [rating, setRating] = useState("1")
const [error, setError] = useState("")

const handleSubmitReview = async (e) => {
    if(!error){
        e.preventDefault()
        try {
            await RestaurantFinder.post(`/${id}/addReview`, {
                name, 
                review: reviewText, 
                rating
            })
            
            history.push("/")
            history.push(location.pathname)
            
            
        } catch (err) {
            console.log(err)
        }
    }
    
}

useEffect(() => {
    if(name === "" || reviewText === "") {
        setError("Formulaire incomplet")
        
    }else{
        setError("")
    }
}, [name, reviewText])


    return (
        <div className="mb-2">
            <div className="form-row">
                <div className="form-group col-8">
                    <label htmlFor="name">Name</label>
                    <input value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name" placeholder="name" type="text" className="form-control"/>
                </div>
                <div className="form-group col-4">
                    <label htmlFor="name">Rating</label>
                    <select 
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    id="rating" className="form-control">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="Review">Review</label>
                <textarea 
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                id="Review" cols="30" rows="10" className="form-control"></textarea>
            </div>
            {error&&(name||reviewText)? <div className="text-danger">{error}</div> : ""}
            <button 
            type="submit"
            onClick={handleSubmitReview}
            className="btn btn-primary">Submit</button>
        </div>
    )
}

export default AddReview
