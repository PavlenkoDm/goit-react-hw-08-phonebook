import { useDispatch } from 'react-redux';

import { filter } from 'store/filter/filterSlice';
import style from './Filter.module.css'

export const Filter = () => {
    const dispatch = useDispatch();

    const handleFilterChange = event => {
        dispatch(filter(event.currentTarget.value));
    };

    return (
        <div className={style.form}>
            <label className={style.label}>
                <span className={style.title}>Find contacts by name</span>
                <input
                    type="text"
                    name="filter iput"
                    style={{ display: 'block' }}
                    onChange={handleFilterChange}
                />
            </label>
        </div>
    );
};
