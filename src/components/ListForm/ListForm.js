import styles from './ListForm.module.scss';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

import { addList } from '../../redux/listsRedux';

const ListForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form className = {styles.listForm} onSubmit={handleSubmit}>
      <div>
        <label className={styles.label} htmlFor="title">Title:</label>
        <TextInput id="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      </div>

      <div>
        <label className={styles.label} htmlFor="icon">Icon:</label>
        <TextInput id="description" value={description} onChange={e => setDescription(e.target.value)}  placeholder="Description" />
      </div>

      <Button>Add list</Button>
    </form>
  );
};

export default ListForm;