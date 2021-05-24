import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';

class Modal extends React.Component {


  render() {
    return (
      <MDBContainer>
        <MDBModal isOpen={this.props.modal} toggle={this.props.toggle}>
          <MDBModalHeader toggle={this.props.toggle}>Upload Your Profile Panel
          </MDBModalHeader>
          <MDBModalBody>
            <form style={{textAlign:'center'}} onSubmit={this.props.saveNewPanel}>
              <input type="file" id="defaultFormRegisterPasswordEx" className="form-control" onChange={(e)=> this.props.addNewPanel(e)}/>
              <MDBBtn color="primary" type='submit'>Save changes</MDBBtn>
              <MDBBtn color="secondary" onClick={this.props.toggle}>Close</MDBBtn>
            </form>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default Modal;



