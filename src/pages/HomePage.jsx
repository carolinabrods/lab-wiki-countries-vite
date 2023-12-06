import { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

function HomePage() {
  // Iteration 3: Fetch Countries Data
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries/')
      .then(response => {
        //console.log(response.data);
        // -> response.data - array with 250 elements
        setCountries(response.data);
      });
  }, []);

  return (
    <div
      className='container'
      style={{ maxHeight: '90vh', overflow: 'scroll' }}
    >
      <h1 style={{ fontSize: '24px' }}>
        WikiCountries: Your Guide to the World
      </h1>
      {!countries && <p>Loading list of countries...</p>}

      {/* Iteration 3: Display Countries Data as a List */}
      {countries && (
        <div className='list-group'>
          {countries.map(country => {
            return (
              <div key={country._id}>
                {/* Iteration 4: Country list with links */}
                <Link to={`/countries/${country.alpha3Code}`}>
                  <p className='list-group-item list-group-item-action'>
                    <img
                      src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                      alt='country image'
                      width={'18px'}
                    />{' '}
                    {country.name.common}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default HomePage;
