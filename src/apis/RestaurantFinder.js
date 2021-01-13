import axios from 'axios';

export default axios.create({
    baseURL:"https://pern-yelp.herokuapp.com/api/v1/restaurants",
})