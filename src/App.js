import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const PhotoContext = React.createContext({gir:"names"})

let Url="https://jsonplaceholder.typicode.com/photos";

const Photo = ({ photo }) => {
  console.log({photo})
  return[ <div className="contain">
  <img src={photo.url} className="images"/>,
  {/* <p>{photo.title}</p> */}
  </div>]
}


const PhotoList = () => {
  return (
    <PhotoContext.Consumer>
      {
        photos => {
          if (photos)
          {
            return <div className = "gallery">
          
              {/* {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))} */}
              {photos.map(
              (item) => <Photo photo={item} />
              )}
              <PhotoTitle/>
             <p>jsjjsj</p>
          </div>
          }
        } 

      }
    </PhotoContext.Consumer>
  )
}

const PhotoTitle=(props)=> {
 
  return (
    <PhotoContext.Consumer>
      
      {title => {<p>{title.title}</p>} }
    </PhotoContext.Consumer>
  );
}
class App extends Component {

  state = {}


  photoData = () => {
    axios.get(Url)
    .then((response)=> {
    console.log(response.data)
    this.setState({photoData: response.data})

    })
    .catch((error)=> {
    });
  }
  
  componentDidMount(){
    this.photoData();

  }
  
  render() {
    console.log(PhotoContext.Provider)
    return (
      <PhotoContext.Provider value={this.state.photoData}>
        <PhotoList />
       
        
      </PhotoContext.Provider>
      
    );
  }
}

export default App;
