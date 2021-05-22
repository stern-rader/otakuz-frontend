import React, { Component } from 'react';

//mdbreact components
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdbreact';


class Recomendation extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          slide={true}
          showControls={true}
          showIndicators={true}
          multiItem
        >
          <MDBCarouselInner>
            <MDBRow>
              <MDBCarouselItem itemId='1'  >
                <MDBCol md='6' style={{marginRight:'-20rem'}}>
                  <MDBCard className='mb-2'>
                    <MDBCardImage
                      className='img-fluid'
                      src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg'
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color='primary'>MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md='6'style={{marginRight:'-20rem'}}>
                  <MDBCard className='mb-2'>
                    <MDBCardImage
                      className='img-fluid'
                      src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg'
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color='primary'>MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBCarouselItem>
              <MDBCarouselItem itemId='2' style={{marginRight:'-20rem'}}>
                <MDBCol md='6'>
                  <MDBCard className='mb-2'>
                    <MDBCardImage
                      className='img-fluid'
                      src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg'
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color='primary'>MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md='6' style={{marginRight:'-20rem'}}>
                  <MDBCard className='mb-2'>
                    <MDBCardImage
                      className='img-fluid'
                      src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg'
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color='primary'>MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBCarouselItem>
              <MDBCarouselItem itemId='3' style={{marginRight:'-20rem'}}>
                <MDBCol md='6'>
                  <MDBCard className='mb-2'>
                    <MDBCardImage
                      className='img-fluid'
                      src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg'
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color='primary'>MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md='6'>
                  <MDBCard className='mb-2'>
                    <MDBCardImage
                      className='img-fluid'
                      src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg'
                    />
                    <MDBCardBody>
                      <MDBCardTitle>MDBCard title</MDBCardTitle>
                      <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                      </MDBCardText>
                      <MDBBtn color='primary'>MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBCarouselItem>
            </MDBRow>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    );
  }}

export default Recomendation ;

