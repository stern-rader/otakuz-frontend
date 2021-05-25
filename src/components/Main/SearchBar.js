import React, { Component } from 'react';

//bootstrap components
import {Form } from 'react-bootstrap';
//css files
import './searchBar.css';
export class SearchBar extends Component {
  render() {
    return (
      <>
        <Form onSubmit={this.props.showResults} id='searchForm' >
          <div className="input-group md-form form-sm form-2 pl-0">
            <input name='animeName' className="form-control my-0 py-1 red-border" type="text" placeholder="Search anime" aria-label="Search" />
            <div className="input-group-append">
              <button id='searchButton' type='submit' className="fa fa-search"/>
            </div>
          </div>
        </Form>
      </>
    );
  }
}

export default SearchBar;
