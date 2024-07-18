import './Business.css';

const Business = ({ business }) => {
    return ( 
        <a href={business.url} target="_blank" className="business" rel="noopener noreferrer">
            {/* <div className="picture"></div> */}
            <img src={business.image_url} alt={business.name} />
            <h3>{business.name}</h3>
            <div className="info">
                <div className="addy">
                    <p>{business.location.address1}</p>
                    <p>{business.location.city}, {business.location.state}</p>
                    <p>{business.location.zip_code}</p>
                </div>
                <div className="deets">
                    <p>{business.categories[0].alias}</p>
                    <p>{business.rating}</p>
                    <p>{business.review_count}</p>
                </div>
            </div>
        </a>
     );
}
 
export default Business;