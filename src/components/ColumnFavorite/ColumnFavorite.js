import styles from './ColumnFavorite.module.scss';

import Card from '../Card/Card';
import PageTitle from '../PageTitle/PageTitle';

import shortid from 'shortid';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';

const ColumnFavorite = () => {
  const cards = useSelector(state => getFavoriteCards(state));
  console.log(cards);

  if(cards.length === 0) return (<PageTitle>no favorite cards</PageTitle>)

  return (
    <article className={styles.column}>
      <ul className={styles.cards}>
        {cards.map(card =>
          <Card key={shortid()} id={card.id} isFavorite={card.isFavorite}>{card.title}</Card>
        )}
      </ul>
    </article>
  );

};

export default ColumnFavorite;