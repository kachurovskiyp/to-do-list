import styles from './Column.module.scss';

import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

import shortid from 'shortid';

const Column = props => {
  return (
    <article className={styles.column}>
      <h3 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon}></span>+
        {props.title}
      </h3>
      <ul className={styles.cards}>
        {props.cards.map(card => <Card key={shortid()} id={card.id}>{card.title}</Card>)}
      </ul>
      <CardForm columnId={props.id} handleSubmit={props.action} />
    </article>
  );
};

export default Column;

//<li key={card.id}>{card.title}</li>