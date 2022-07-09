import React from 'react'
// import { Template } from 'react-loader-spinner';

import styles from './Loader.module.css';

const Loader = () => (
    <div className={styles.Loader}>
      <img type="TailSpin" color="#02be6e" height={100} width={100} />
    </div>
  );
export default Loader;