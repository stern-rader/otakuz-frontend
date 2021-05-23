import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBRow, MDBCol } from 'mdbreact';

class Modal extends Component {
state = {
  modal8: false,
  modal9: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr;
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
    <MDBContainer>
      <MDBBtn color="info" onClick={this.toggle(8)}>Update Your Profile Panel</MDBBtn>
      <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="top">
        <MDBModalHeader toggle={this.toggle(8)}>Update Your Profile Panel</MDBModalHeader>
        <MDBModalBody>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <form onSubmit={this.props.saveNewPanel}>
                  <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                      Upload Your Profile Panel
                  </label>
                  <input type="text" id="defaultFormRegisterPasswordEx" className="form-control" onChange={(e)=> this.props.addNewPanel(e)}/>
                  <MDBBtn color="primary" type='submit'>Save changes</MDBBtn>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBModalBody>
        <MDBModalFooter>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
}
}

export default Modal;
