import './home.css'
import { BASE_URL } from '../util/constant'
import { useState, useEffect  } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';


const Home = () => {
    
    let [getList , setList] = useState([]);

    useEffect(() => {
      let token = localStorage.getItem("token")

      axios.get(BASE_URL + "/products", {headers:{
        "Authorization" : "Bearer " + token
      }})
        .then(function (response) {
          console.log(response);
          setList(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }, []);
 
    return (
        <div>
          <h1>Home</h1>

          <div class="container">
            <div class="row">
            <div class="col-sm-6">
            <Carousel showArrows={true} >
            {
              getList.map((data) => {
                return <div>
                  <img key={data.id} src={data.image}/> 
                  <p>{data.name}</p>
                  <p>{data.rating}</p>
                  <p>{data.price}</p>
                  </div>
              })
            }
            </Carousel>
            </div>
            </div>
          </div>
        </div>
    );

}


export default Home;