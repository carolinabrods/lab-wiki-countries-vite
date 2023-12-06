import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function CountryDetails() {
  const [countryDetails, setCountryDetails] = useState(null);

  // Iteration 5.1 - Access URL Params
  const { countryId } = useParams();

  // Iteration 5.2 - Fetch Country Data
  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then(response => {
        setCountryDetails(response.data);
      });
  }, [countryId]);
  // data is only fetched when we have the countryId

  console.log(countryDetails); // -> it's an object

  return (
    <div className='container'>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Country Details</p>

      {/* Iteration 5.3 - Display Loading Message while Fetching Data */}
      {!countryDetails && <h3>Loading...</h3>}

      {countryDetails && (
        <div>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}
            alt='country image'
          />
          <h1>{countryDetails.name.common}</h1>

          {/* Iteration 5.4 - Display Country Details */}
          <table className='table'>
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{countryDetails.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {countryDetails.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {countryDetails.borders.map(country => {
                      return (
                        <li key={country}>
                          <Link to={`/countries/${country}`}>{country}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
