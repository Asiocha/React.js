import React from 'react';
import styles from './Hero.scss';
import List from '../List/List.js';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => (
      <header className={styles.component}>
        <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
        <img className={styles.image} src={props.imageAdres} />
      </header>
    );
    Hero.propTypes = {
      titleText: PropTypes.node.isRequired,
      imageAdres: PropTypes.string.isRequired,
    };
export default Hero;
