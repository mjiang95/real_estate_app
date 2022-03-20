import { Component } from "react";
const axios = require("axios");


class Axios extends Component {
    state = {
        restaurant: [],
    };

    componentDidMount() {

    axios
    .get(`http://localhost:8080`)
    .then((response) => {
        this.setState({
        restaurant: response.data,
      });
    });
}

render() {
    const restaurantInfo = this.state.restaurant; 
    return (
      <>
    {restaurantInfo.map((info) => {
        return (
    <div className="App">
      <img src={info.image_url} alt="restaurant image" />
    </div>
        );
    })}
    </>
  );
}
}

export default Axios;