import styles from './ColumnForm.module.scss';

import { useState } from "react";

import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

const ColumnForm = props => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit({title: title, icon: icon});
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