import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
//import {RestaurantsContext} from '../context/RestaurantsContext'
import RestaurantFinder from '../apis/RestaurantFinder'

export default function UpdateRestaurant(props) {
    const {id} = useParams();
    let history = useHistory();
    //const {restaurants} = useContext(RestaurantsContext);
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [priceRange, setPriceRange] = useState("")

    useEffect(() => {
        const fetchData = async() => {
            const response = await RestaurantFinder.get(`/${id}`)
            console.log(response.data.data)
            setName(response.data.data.restaurant.name)
            setLocation(response.data.data.restaurant.location)
            setPriceRange(response.data.data.restaurant.price_range)

        }
        fetchData()
        
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
            name, 
            location, 
            price_range:priceRange
        })
        console.log(updatedRestaurant)
        history.push("/");
    }


    
    return (
        <div>
            
            <form action="">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} id="name" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input value={location} onChange={e => setLocation(e.target.value)} id="location" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="price_range">Price Range</label>
                    <input value={priceRange} onChange={e => setPriceRange(e.target.value)} id="price_range" type="number" className="form-control" min="1" max="5"/>
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                <button onClick={() => history.push("/")} className=" btn btn-primary mx-5">Cancel</button>
            </form>
        </div>
    )
}
