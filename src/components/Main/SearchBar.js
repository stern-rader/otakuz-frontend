import React, { Component } from 'react';

//bootstrap components
import {Form , Button} from 'react-bootstrap';
//css files
import './searchBar.css';
export class SearchBar extends Component {
  render() {
    return (
      <>
        <Form onSubmit={this.props.showResults} id='searchForm' >
          <Form.Group>
            <Form.Control type='text' placeholder='search anime' name='animeName' id='searchBox' />
            <Button type='submit' variant='primary' id='searchBtn' >Search</Button>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default SearchBar;
