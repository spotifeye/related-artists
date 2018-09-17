
import React from 'react';
import PopularSong from './popularSong.jsx';
import Listeners from './listeners.jsx';
import { Image, Grid, Row, Col } from 'react-bootstrap';


class relatedArtistEntry extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           isPopupHidden: true,
           isListenersHidden: true
       }

       this.togglePopup = this.togglePopup.bind(this);
       this.toggleListeners = this.toggleListeners.bind(this);
       this.showListeners = this.showListeners.bind(this);
       this.hideListeners = this.hideListeners.bind(this);
   }
   togglePopup () {
       this.setState({
           isPopupHidden: !this.state.isPopupHidden
       })
   }

   toggleListeners () {
       this.setState({
           isListenersHidden: !this.state.isListenersHidden
       })
   }
   showListeners () {
       this.setState({
           isListenersHidden: false
       }) 
   }
   hideListeners () {
       this.setState({
           isListenersHidden: true
       })
   }

   render() {
    return(
        <Grid className="RAEntry">
            <Row>
         <div onMouseOver={this.toggleListeners} onMouseLeave={this.toggleListeners}>
          <div onClick={this.togglePopup}>
            <div className="RaEntry">
               <Col lg={3}>
                <div>
                    <Image src={this.props.artist.artist_image} circle width="50" height="50"/>
                </div>
                </Col>
              <Col lg={3}> <div>{this.props.artist.artist_name}</div> </Col>
              <Col lg={3}><div>{this.state.isListenersHidden === false && <Listeners artist={this.props.artist}/>}</div></Col> 
               <Col lg={3}><div> {!this.state.isPopupHidden && <PopularSong artist={this.props.artist}/>}</div></Col>

               </div>
              
            </div>
          </div>
          </Row>
          </Grid>
    )
   }
}

export default relatedArtistEntry;