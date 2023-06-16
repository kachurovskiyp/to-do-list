import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';

import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';

import { getColumnsByList, getListById } from '../../redux/store';

const List = () => {
  const { listId } = useParams();

  const columns = useSelector(state => getColumnsByList(state, listId));
  const listData = useSelector(state => getListById(state, listId));

  if(!listData) return <Navigate to='/' />

  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}<span>soon</span></h2>
        <p className={styles.description}>{listData.description}</p>
      </header>
      <SearchForm />
      <div className={styles.columns}>
        {columns.map(column => <Column
          key={column.id}
          {...column}
        />)}
      </div>

      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;