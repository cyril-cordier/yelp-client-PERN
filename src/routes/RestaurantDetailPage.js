import React, {useContext, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantFinder from '../apis/RestaurantFinder';
//import StarRating from '../components/StarRating';
import Reviews from '../components/Reviews'
import AddReview from '../components/AddReview';
import StarRating from '../components/StarRating';

const RestaurantDetailPage = () => {
    const { id } = useParams();
    const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext);
    let history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get(`/${id}`);
                setSelectedRestaurant(response.data.data);
            }
            catch (err) {
                console.log(err)
            }
        };
        fetchData();
    }, [id, setSelectedRestaurant])

   

    return (
        <div>
            <button onClick={() => history.push("/")} className=" btn btn-primary"><i className="far fa-arrow-alt-circle-left"></i> Back</button>
            {selectedRestaurant && (
                <>
                    <h1 className="text-center display-1">{selectedRestaurant.restaurant.name}</h1>
                    <div className="text-center">
                        <StarRating rating={selectedRestaurant.restaurant.average_rating}/>
                        <span className="text-warning ml-1">
                            {selectedRestaurant.restaurant.count ? `(${selectedRestaurant.restaurant.count})` : "(0)"}
                        </span>
                    </div>
                    <div className="mt-3">
                        <Reviews reviews={selectedRestaurant.reviews}/>
                    </div>
                    <AddReview />
                </>
            )}
            

        </div>
    )
}

export default RestaurantDetailPage;