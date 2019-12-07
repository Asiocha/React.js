import React from 'react';
import styles from '../List/List.scss';
import PropTypes from 'prop-types';
//import {settings} from '../../data/dataStore';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
      <section className = {styles.component}>
        <h4 className={styles.title}>{this.props.title}</h4>
      </section>
    );
  }
}
export default Card;
