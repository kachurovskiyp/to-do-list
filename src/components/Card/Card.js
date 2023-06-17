import styles from './Card.module.scss';

import { useDispatch } from 'react-redux';
import { toggleFavorite, deleteCard } from '../../redux/cardsRedux';

const Card = props => {
  const dispatch = useDispatch();

  const favoriteClickHandler = () => {
    dispatch(toggleFavorite(props.id));
  };

  const deleteClickHandler = () => {
    dispatch(deleteCard(props.id))
  };

  return (
    <li className={styles.card} key={props.id}>
      {props.children}
      <div>
        <button
          onClick={favoriteClickHandler}
          type='button'
          className={`${styles.favoriteBtn} ${props.isFavorite ? styles.isFavorite : ''}`}>
          <span className='fa fa-star-o'></span>
        </button>
        <button
          onClick={deleteClickHandler}
          type='button'
          className={styles.favoriteBtn}>
          <span className='fa fa-trash'></span>
        </button>
      </div>
    </li>
  )
}

export default Card;