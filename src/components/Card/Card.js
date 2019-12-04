import React from 'react';
import styles from './List.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  addCard(title){
    this.setState(state => (
      {
        columns: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
  }
  render() {
    return (
      <section className = {styles.component}>
      <div className={styles.cards}>
        {this.state.columns.map(({key, ...columnProps}) => (
        <Card key={key} {...cardsProps} />
        ))}
      </div>
      <div className={styles.creator}
      </section>
  }
