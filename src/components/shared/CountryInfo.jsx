import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';

const CountryInfo = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    document.title = `Country | ${name}`;
  }, [name]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://restcountries.com/v2/name/${name}?fullText=true`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setCountry(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [name]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-80">
        <svg
          role="status"
          className="inline w-10 h-10 mr-2 text-text_color animate-spin fill-element_color"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    );
  }

  const formatPopulation = (x) => {
    return new Intl.NumberFormat().format(x);
  };

  return (
    <section>
      {country?.map((obj) => {
        const {
          name,
          nativeName,
          population,
          region,
          subregion,
          capital,
          topLevelDomain,
          currencies,
          languages,
          borders,
          flags,
        } = obj;
        return (
          <article key={uuidv4()} className="my-16">
            <div className="w-full h-auto overflow-hidden rounded-sm shadow-lg bg-element_color">
              <img src={flags.svg} alt={`flag-${name}`} />
            </div>
            <div className="mt-12">
              <h1 className="text-2xl font-extrabold text-text_color">{name}</h1>
              <div className="flex flex-col gap-12 my-8">
                <div>
                  <h4 className="mt-1 font-semibold text-text_color">
                    Native Name:
                    <span className="ml-2 font-light">{nativeName}</span>
                  </h4>
                  <h4 className="mt-1 font-semibold text-text_color">
                    Population:
                    <span className="ml-2 font-light">{formatPopulation(population)}</span>
                  </h4>
                  <h4 className="mt-1 font-semibold text-text_color">
                    Region:
                    <span className="ml-2 font-light">{region}</span>
                  </h4>
                  <h4 className="mt-1 font-semibold text-text_color">
                    Sub Region:
                    <span className="ml-2 font-light">{subregion}</span>
                  </h4>
                  <h4 className="mt-1 font-semibold text-text_color">
                    Capital:
                    <span className="ml-2 font-light">{capital}</span>
                  </h4>
                </div>
                <div>
                  <h4 className="mt-1 font-semibold text-text_color">
                    Top Level Domain:
                    <span className="ml-2 font-light">
                      {topLevelDomain.map((i) => {
                        return <span key={uuidv4()}>{i}</span>;
                      })}
                    </span>
                  </h4>
                  <h4 className="mt-1 font-semibold text-text_color">
                    Currencies:
                    <span className="ml-2 font-light">
                      {currencies.map((i) => {
                        return <span key={uuidv4()}>{i.name}</span>;
                      })}
                    </span>
                  </h4>
                  <h4 className="mt-1 font-semibold text-text_color">
                    Languages:
                    <span className="ml-2 font-light">
                      {languages.map((i) => {
                        return <span key={uuidv4()}>{i.name + ', '}</span>;
                      })}
                    </span>
                  </h4>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text_color">Border Countries: </h4>
                <div className="flex flex-wrap gap-2 mt-4">
                  {borders.map((con) => {
                    return (
                      <div
                        className="py-2 text-xs rounded-sm shadow-lg cursor-pointer px-9 text-text_color bg-element_color"
                        key={uuidv4()}
                      >
                        {con}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default CountryInfo;
