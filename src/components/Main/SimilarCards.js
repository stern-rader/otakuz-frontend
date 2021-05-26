import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdbreact';
import './recomendations.css';
export class SimilarCards extends Component {
  render() {

    const results = this.props.similarAnimesData.map((data) => {
      for (let i=0 ; i<21;i++ ){
        let sum = i+1;
        let id =0;
        let name = [];
        let img=[];
        if(sum % 3 === 0){
          id=id+1;
          name.push(data.name);
          img.push(data.img);
          for(let i = 0 ; i< name.length;i++){
            return <MDBCarouselItem itemId={id}>
              <div className='row'>
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage className="img-fluid" src={img} />
                    <MDBCardBody>
                      <MDBCardTitle>{name}</MDBCardTitle>
                      <MDBCardText>hi </MDBCardText>
                      <MDBBtn color="primary">MDBBtn</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </div>
            </MDBCarouselItem>
            ;
          }
          name = [];
          img=[];
        }
        else{
          name.push(data.name);
          img.push(data.img);
          return false ;
        }
      }
    });

    return (
      <MDBContainer style={{textAlign:'center'}}>
        <MDBCarousel showControls={true} activeItem={1} length={this.props.similarAnimesData.length/3} slide={true} showIndicators={true} multiItem>
          <MDBCarouselInner>
            <MDBRow style={{padding:'5px',border:'solid 0.5px , black'}}>
              {results}
            </MDBRow>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    );
  }
}

export default SimilarCards;
