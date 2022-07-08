import React from 'react'
import styles from './ImageGalleryItem.module.css'

const ImageGalleryItem = () => {
    return (
        <li className= {styles.ImageGalleryItem}>
            <img src="" alt="" className = {styles['ImageGalleryItem-image']}/>
        </li>
    )
}

export default ImageGalleryItem;