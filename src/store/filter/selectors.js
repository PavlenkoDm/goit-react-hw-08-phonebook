import { useSelector } from 'react-redux';

export const useFilterSlectors = () => {
    const filterState = useSelector(state => state.filter);

    return { filterState };
};