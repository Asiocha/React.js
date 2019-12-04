import React from 'react';
import styles from './Column.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import {pageContents, listData} from '../../data/dataStore';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
      </section>
    )
  }
}
export default Column;
