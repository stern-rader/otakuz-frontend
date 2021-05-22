import React, { Component } from 'react';

//bootstrap components
import {Form , Button} from 'react-bootstrap';

export class SearchBar extends Component {
  render() {
    return (
      <>
        <Form onSubmit={this.props.showResults} >
          <Form.Group>
            <Form.Control type='text' placeholder='search anime' name='animeName' />
            <Button type='submit' variant='success' >Search</Button>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default SearchBar;
