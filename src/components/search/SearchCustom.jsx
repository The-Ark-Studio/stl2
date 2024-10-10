import {useTranslations} from 'next-intl';
import React from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';

const SearchCustom = ({iconCustom, placeholder}) => {
  const t = useTranslations('common'); // Assuming you have a translation hook in your app
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
              {t('search')}
            </p>
          )}
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchCustom;
