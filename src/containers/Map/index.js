import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { compose, withProps } from "recompose";


const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDGqxxfgH2DGg7OfwGtaK9d7YojvkA4JVg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 37.924849, lng: -122.088213 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 37.924849, lng: -122.088213 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

class Map extends Component {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <div className='row justify-content-md-center' style={{ height: '400px', width: '100%' }}>
          <div className='col-md-5 google-map ml-4'>
              <MyMapComponent
              isMarkerShown={this.state.isMarkerShown}
              onMarkerClick={this.handleMarkerClick}
            />
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