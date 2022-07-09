import React, { Component } from 'react';

import SearchBar from 'components/SearchBar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Modal from './components/Modal/Modal';
import Loader from 'components/Loader';
import Message from 'components/Message';

import fetchImages from './API/Api.js'

class App extends Component {
    state = {
      images: [],
      currentPage: 1,
      searchQuery: '',
      isLoading: false,
      showModal: false,
      largeImage: '',
      error: null,
    };
  
    // Если при обновлении запрос не равен между стейтами, тогда делаем фетч
    componentDidUpdate(prevProps, prevState) {
      if (prevState.searchQuery !== this.state.searchQuery) {
        this.getImages();
      }
    }
  
    // Принимаем с формы запрос и пишем в стейт + сбрасываем после отправки ключи из стейта
    onChangeQuery = query => {
      this.setState({
        images: [],
        currentPage: 1,
        searchQuery: query,
        error: null,
      });
    };
  
    // Получаем дату из фетча
    getImages = async () => {
      const { currentPage, searchQuery } = this.state;
  
      this.setState({
        isLoading: true,
      });
  
      try {
        const { hits } = await fetchImages(searchQuery, currentPage);
  
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
  
        if (currentPage !== 1) {
          this.scrollOnLoadButton();
        }
      } catch (error) {
        console.log('Smth wrong with App fetch', error);
        this.setState({ error });
      } finally {
        this.setState({
          isLoading: false,
        });
      }
    };
  
    // Получает полное изображение, пишет его в стейт и открывает модалку
    handleGalleryItem = fullImageUrl => {
      this.setState({
        largeImage: fullImageUrl,
        showModal: true,
      });
    };
  
    // Переключение модалки
    toggleModal = () => {
      this.setState(prevState => ({
        showModal: !prevState.showModal,
        largeImage: '',
      }));
    };
  
    // Скролл при клике на кнопку
    scrollOnLoadButton = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    };
  
    render() {
      const { images, isLoading, showModal, largeImage, error } = this.state;
      const needToShowLoadMore = images.length > 0 && images.length >= 12; // Нужны доп проверки;
  
      return (
        <>
          <SearchBar onSearch={this.onChangeQuery} />
  
          {images.length < 1 && (
            <Message>
              <h2>The gallery is empty 🙁</h2>
              <p>Use search field!</p>
            </Message>
          )}
  
          <ImageGallery images={images} onImageClick={this.handleGalleryItem} />
  
          {needToShowLoadMore && <Button onClick={this.getImages} />}
  
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <img src={largeImage} alt="" className="Modal-image" />
            </Modal>
          )}
  
          {isLoading && <Loader />}
  
          {error && (
            <Message>
              <h2>Oops! 😫</h2>
              <p>
                Sorry, something went wrong. Please try again, or{' '}
                <a href="/">refresh the page</a>.
              </p>
            </Message>
          )}
        </>
      );
    }
  }
  
  export default App;