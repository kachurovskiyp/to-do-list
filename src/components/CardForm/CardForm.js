import styles from './CardForm.module.scss';

import { useState } from "react";

import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

const CardForm = props => {
  const [cardName, setCardName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit(cardName, props.columnId);
    setCardName('');
  };

  return (
    <form className = {styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={cardName} onChange={e => setCardName(e.target.value)} placeholder="Title" />

      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;