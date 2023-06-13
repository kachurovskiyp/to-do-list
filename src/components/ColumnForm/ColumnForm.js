import styles from './ColumnForm.module.scss';

import { useState } from "react";
import { useDispatch } from 'react-redux';

import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

const ColumnForm = props => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
    setTitle('');
    setIcon('');
  };

  return (
    <form className = {styles.columnForm} onSubmit={handleSubmit}>
      <div>
        <label className={styles.label} htmlFor="title">Title:</label>
        <TextInput id="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      </div>

      <div>
        <label className={styles.label} htmlFor="icon">Icon:</label>
        <TextInput id="icon" value={icon} onChange={e => setIcon(e.target.value)}  placeholder="Icon" />
      </div>

      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;