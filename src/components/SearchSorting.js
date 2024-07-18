import './SearchSorting.css';

const SearchSorting = ({active, setActive}) => {


    const buttonList = ['Best Match', 'Highest Rated', 'Most Reviewed']

    const handleSelect = (buttonName) => {
        setActive(buttonName);
    }
    
    return (
        <div className="sorting">
            {buttonList.map((buttonName) => (
                <button 
                    type='button'
                    key={buttonName}
                    className={active === buttonName ? 'active sort-butt': 'sort-butt'} 
                    onClick={() => handleSelect(buttonName)}
                >
                    {buttonName}
                </button>
            ))}
        </div>
    );
}
 
export default SearchSorting;