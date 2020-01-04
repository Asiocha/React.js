import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';

class SearchResults extends React.Component {
  
  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
  };
  render() {
    const {title, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }
}
export default SearchResults;