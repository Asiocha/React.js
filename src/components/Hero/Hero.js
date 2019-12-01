import React from 'react';
import styles from './Hero.scss';
import List from '../List/List.js';

class Hero extends React.Component {
  render() {
    return (
      <header className = {styles.component}>
        <h2 className = {styles.title}>Things to do</h2>
        <img className = {styles.image} src={'../src/image/space.png'} />
      </header>
    )
  }
}

export default Hero;
