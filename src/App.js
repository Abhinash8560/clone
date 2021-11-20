import React from "react"


class App extends React.Component {
  constructor() {
    super();
    this.state ={   
      gift:[]
    };
    
  }

callApi(url){
  fetch(url)
  .then((response) =>response.json())
  .then((data) => {
    this.setState({gift:data});
  })
 .catch((error) => {
   console.log(error);
 });
}
  componentDidMount() {
    this.callApi('https://jsonplaceholder.typicode.com/photos');
  }
 
  render() {
    return (
      <div>{this.state.gift}</div>
    )
  }
}

export default App