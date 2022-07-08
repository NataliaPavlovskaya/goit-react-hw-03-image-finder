import React from 'react';
import SearchBar  from './SearchBar/SearchBar.js';
import SearchFrom from './SearchForm/SearchForm.js';
import ImageGallery from './SearchForm/SearchForm.js';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem.js'



export const App = () => {


  return (
    <>
    <SearchBar/>
    <SearchFrom/>
    <ImageGallery>
    <ImageGalleryItem/>
    </ImageGallery>

    </>
  )
};
