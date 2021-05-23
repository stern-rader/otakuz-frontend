import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdbreact';
import './recomendations.css';
export class Recomendation extends Component {
  render() {
    return (
      <MDBContainer style={{textAlign:'center'}}>
        <MDBCarousel showControls={true} activeItem={1} length={3} slide={true}  showIndicators={true} multiItem>
          <MDBCarouselInner>
            <MDBRow style={{padding:'5px',border:'solid 0.5px , black'}}>
              <MDBCarouselItem itemId="1">
                <div className='row'>
                  <MDBCol md="4">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                      <MDBCardBody>
                        <MDBCardTitle>MDBCard title</MDBCardTitle>
                        <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn color="primary">MDBBtn</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                      <MDBCardBody>
                        <MDBCardTitle>MDBCard title</MDBCardTitle>
                        <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn color="primary">MDBBtn</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                      <MDBCardBody>
                        <MDBCardTitle>MDBCard title</MDBCardTitle>
                        <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn color="primary">MDBBtn</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <div className='row'>
                  <MDBCol md="4">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg" />
                      <MDBCardBody>
                        <MDBCardTitle>MDBCard title</MDBCardTitle>
                        <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn color="primary">MDBBtn</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" />
                      <MDBCardBody>
                        <MDBCardTitle>MDBCard title</MDBCardTitle>
                        <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn color="primary">MDBBtn</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
                      <MDBCardBody>
                        <MDBCardTitle>MDBCard title</MDBCardTitle>
                        <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn color="primary">MDBBtn</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <div className='row'>
                  <MDBCol md="4">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" />
                      <MDBCardBody>
                        <MDBCardTitle>MDBCard title</MDBCardTitle>
                        <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn color="primary">MDBBtn</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" />
                      <MDBCardBody>
                        <MDBCardTitle>MDBCard title</MDBCardTitle>
                        <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn color="primary">MDBBtn</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
                      <MDBCardBody>
                        <MDBCardTitle>MDBCard title</MDBCardTitle>
                        <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                        </MDBCardText>
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

export default Recomendation;
