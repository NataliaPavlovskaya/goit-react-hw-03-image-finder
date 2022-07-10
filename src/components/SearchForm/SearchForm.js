import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchForm.module.css';
// import {ToastContainer, toast } from 'react-toastify';

class SearchFrom extends Component {
  state = {
    query: '',
  };

  handleSearchInput = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    // Запрещает отправку пустого инпута
    if (!this.state.query) return;

    // if(this.state.query.trim()=== ''){
    //   return toast.error('Введите запрос!')
    // }

    // Отдать данные внешнему компоненту
    this.props.onSearch(this.state.query);

    this.resetForm();
  };

  resetForm = () =>
    this.setState({
      query: '',
    });

  render() {
    return (
        <>
      <form className={styles.SearchForm} onSubmit={this.handleFormSubmit}>
        <button type="submit" className={styles['SearchForm-button']}>
          <span className={styles['SearchForm-button-label']}>Search</span>
        </button>

        <input
          className={styles['SearchForm-input']}
          type="text"
          name="query"
          value={this.state.query}
          onChange={this.handleSearchInput}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
      {/* <ToastContainer autoClose={2000}/> */}
      </>
    );
  }
}

SearchFrom.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchFrom;