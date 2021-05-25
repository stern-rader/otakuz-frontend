import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdbreact';
import './recomendations.css';
export class SimilarCards extends Component {
  render() {
    return (
      <MDBContainer style={{textAlign:'center'}}>
        <MDBCarousel showControls={true} activeItem={1} length={3} slide={true} showIndicators={true} multiItem>
          <MDBCarouselInner>
            <MDBRow style={{padding:'5px',border:'solid 0.5px , black'}}>
              <MDBCarouselItem itemId="1">
                <div className='row'>
                  <MDBCol md="4">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" src={this.props.img} />
                      <MDBCardBody>
                        <MDBCardTitle>{this.props.name}</MDBCardTitle>
                        <MDBCardText>{this.props.description} </MDBCardText>
                        <MDBBtn color="primary">MDBBtn</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div>
              </MDBCarouselItem>
            </MDBRow>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    );
  }
}

export default SimilarCards;
