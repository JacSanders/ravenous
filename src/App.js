import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import { getBusinesses } from './utils/Yelp';
import { useState } from 'react';

function App() {

  const [businesses, setBusinesses] = useState([]);

  const handleSubmit = async (term, location, sort) => {
    const jsonResponse = await getBusinesses(term, location, sort);
    setBusinesses(jsonResponse);
  }

  return (
    <>
      <header>
        <SearchBar handleSubmit={handleSubmit}/>
      </header>
      <BusinessList businesses = {businesses}/>
    </>
  );
}

export default App;
