import { useState } from "react";
import './SearchBar.css';
import SearchSorting from './SearchSorting'

const SearchBar = ({handleSubmit}) => {
    const [business, setBusiness] = useState('');
    const [location, setLocation] = useState('');
    const [active, setActive] = useState('Best Match');

    const handleBusinessChange = ({target}) => {
        setBusiness(target.value);
    }

    const handleLocationChange = ({target}) => {
        setLocation(target.value);
    }

    const startHandle = (e) => {
        e.preventDefault();
        let sorting;
        if (active === 'Best Match') {
            sorting = 'best_match';
        } else if (active === 'Highest Rated') {
            sorting = 'rating';
        } else if (active === 'Most Reviewed') {
            sorting = 'review_count';
        }
        handleSubmit(business, location, sorting);
        setBusiness('');
        setLocation('');
    }

    return ( 
        <form className="search" onSubmit={startHandle}>
            <SearchSorting active={active} setActive={setActive}/>
            <div className="search-par">
                <input
                    type="text"
                    placeholder="Search Businesses"
                    value={business}
                    onChange={handleBusinessChange}
                    required />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={handleLocationChange}
                    required />
            </div>
            <button type='submit'>Search</button>
        </form>
     );
}
 
export default SearchBar;