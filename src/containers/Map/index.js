import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './../../images/marker.png';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: { lat: 37.924849, lng: -122.088213 },
    zoom: 16
  }

  render() {
    return (
      <div className='row google-map justify-content-md-center' style={{ height: '400px', width: '100%' }}>

        <div className='col-md-5'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDGqxxfgH2DGg7OfwGtaK9d7YojvkA4JVg'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>

          <AnyReactComponent
            lat={37.924849}
            lng={-122.088213}
            text={<img src={Marker} alt='location marker' width='50px' height='50px'/>}
        />
        </GoogleMapReact>
        {/* <a><button></button></a> */}
      </div>

      <div className='col-md-5 text-center'>
        <div className='m-5 border border-dark'>
          <h3>Hours</h3>
          

        </div>
      </div>

      </div>
    )
  }
}

export default Map;