import styles from './Card.module.scss';

import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/store';

const Card = props => {
  const dispatch = useDispatch();

  const favoriteClickHandler = () => {
    dispatch(toggleFavorite(props.id));
  };

  return (
    <li className={styles.card} key={props.id}>
      {props.children}
      <button
        onClick={favoriteClickHandler}
        type='button'
        className={`${styles.favoriteBtn} ${props.isFavorite ? styles.isFavorite : ''}`}>
          <span className='fa fa-star-o'></span>
      </button>
    </li>
  )
}

export default Card;