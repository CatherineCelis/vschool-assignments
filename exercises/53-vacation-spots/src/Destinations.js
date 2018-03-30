import React from "react";
import Card from "./Card";

let vacationSpots = [  
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring",
      imgURL: "https://timedotcom.files.wordpress.com/2014/09/201410_bpl_49meridian.jpg"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter",
      imgURL: "http://cancun.travel/img/hoteles.jpg"
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall",
      imgURL: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1024,c_fill,g_auto,h_576,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F160825162508-china-luxury-house-21.jpg"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer",
      imgURL: "https://www.nationalgeographic.com/content/dam/travel/Guide-Pages/europe/russia/russia.jpg"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring",
      imgURL: "http://media.pinterest.com.s3.amazonaws.com/1200x/c3/08/ea/c308ea6fe45a7c07c074a42edab1a1ba.jpg"
    }
  ]

function Destinations() {
    const Destinations = vacationSpots.map((dest, i) => <Card key={dest.place + i} bunny={dest}/>);
    return (
        <div>
            <h1>Vacation Destinations</h1>
            <div>{Destinations}</div>
        </div>
    )
}

export default Destinations;