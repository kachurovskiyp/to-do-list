import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { refreshSearch } from '../../redux/store';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    const searchHandle = e => {
        e.preventDefault();
        dispatch(refreshSearch(search));
    };

    const inputChangeHandler = e => {
        setSearch(e.target.value);
    }

    return (
        <form onSubmit={searchHandle} className={styles.searchForm}>
            <TextInput placeholder="Search..." value={search} onChange={inputChangeHandler} />
            <Button>Search</Button>
        </form>
    );
};

export default SearchForm;