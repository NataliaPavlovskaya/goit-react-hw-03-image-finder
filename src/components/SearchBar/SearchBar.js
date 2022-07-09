import React from 'react'
import PropTypes from 'prop-types';
import SearchFrom from 'components/SearchForm';

import styles from '../Searchbar/Searchbar.module.css'

const Searchbar = ({ onSearch }) => (
    <header className={styles.Searchbar}>
      <SearchFrom onSearch={onSearch} />
    </header>
  );
  
  Searchbar.propTypes = {
    onSearch: PropTypes.func.isRequired,
  };
  
  export default Searchbar;




