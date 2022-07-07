import React from 'react'
import PropTypes from 'prop-types';
import SearchFrom from 'components/SearchForm/SearchForm';

import styles from '../SearchBar/Searchbar.module.css'

const Searchbar = ({ onSearch }) => (
    <header className={styles.Searchbar}>
      <SearchFrom onSearch={onSearch} />
    </header>
  );
  
  Searchbar.propTypes = {
    onSearch: PropTypes.func.isRequired,
  };
  
  export default Searchbar;




