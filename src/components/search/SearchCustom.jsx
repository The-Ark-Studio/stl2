import React from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import {Search} from 'react-bootstrap-icons';

const SearchCustom = ({iconCustom, placeholder}) => {
  return (
    <div>
      <InputGroup className="mb-3 input-search-container">
        <FormControl
          placeholder={placeholder ?? 'search'}
          aria-label="search"
          aria-describedby="basic-addon2"
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          className="input-search-button"
        >
          {iconCustom ? (
            iconCustom
          ) : (
            <p className="button-text" style={{margin: 0}}>
              Search
            </p>
          )}
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchCustom;
