import Business from "./Business";
import './BusinessList.css';

const BusinessList = ({businesses}) => {

    if (businesses.businesses) {
        return ( 
            <div className="search-results">
                {businesses.businesses.map((business) => (
                    <Business key={business.id} business={business} />
                ))}
            </div>
         );
    } else {
        return (
            <div className="presearch">
                <h1>Search Businessses in your Area</h1>
            </div>
        )
    }
}
 
export default BusinessList;