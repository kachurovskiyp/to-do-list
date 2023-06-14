import { useSelector } from 'react-redux';

import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';

import { getAllColumns } from '../../redux/store';

const List = () => {
  const columns = useSelector(state => getAllColumns(state));

  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.title}>Things to do <span>soon</span></h2>
        <p className={styles.description}>Interesting things I want to check out</p>
      </header>
      <div className={styles.columns}>
        {columns.map(column => <Column
          key={column.id}
          {...column}
        />)}
      </div>

      <ColumnForm />

    </div>
  );
};

export default List;