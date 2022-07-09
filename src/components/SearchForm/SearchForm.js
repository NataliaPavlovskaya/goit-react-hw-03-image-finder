import React from 'react'
import PropTypes from 'prop-types';

import styles from './SearchForm.module.css'


const SearchFrom = () => {

return (
    <form 
    className={styles.SearchFrom}
    autoСomplete="off"
    autoFocus
    >
        <button type="submit" className={styles['SearchForm-button']}>
            <span className={styles['SearchForm-button-label']}>Search</span>
        </button>

        <input
            className={styles['SearchForm-input']}
            type="text"
            placeholder="Search images and photos"
        />
        </form>
        )
    };


SearchFrom.propTypes = {
    onSearch: PropTypes.func.isRequired,
  };
  
export default SearchFrom;