import React from 'react';
import styles from './Column.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import {pageContents, listData} from '../../data/dataStore';
import Icon from '../Icon/Icon.js';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore';

class Column extends React.Component {
  state = {
   cards: this.props.cards || [],
  }
  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
    icon: PropTypes.string.isRequired,
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
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}
          <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
        </h3>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
      </section>
    )
  }
}
export default Column;
