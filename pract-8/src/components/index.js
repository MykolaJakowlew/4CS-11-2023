import { getName } from 'country-list';
import { getLangNameFromCode } from 'language-name-map';
import NewsItemComponent from './news-item';
import './style.css';

import newsService from '../services/news.api';
import { useEffect, useState } from 'react';
import LoaderComponent from './loader';
import SelectorComponent from './selectors';
import SearchContext from '../context/search.context';

const IS_DEV = false;

const CountryCodes = [
  "MY", "GB", "CN", "TW", "AU", "BW", "ET", "KR", "GH", "IE", "KE", "LV", "NA", "IN", "BD", "TH", "NZ", "NG", "PK", "PH", "SG", "ZA", "TZ", "UG", "ZW", "ID", "CZ", "DE", "AT", "CH", "AR", "EG", "CL", "CO", "CU", "US", "MX", "PE", "VE", "LB", "CA", "FR", "MA", "SN", "IT", "LT", "HK", "JP", "HU", "BE", "NL", "NO", "PL", "BR", "PT", "RO", "SK", "SI", "SE", "VN", "TR", "GR", "BG", "RS", "UA", "IL", "AE", "SA",
].map(code => ({ value: code, name: getName(code) }));

const LanguageCodes = [
  "en", "id", "cs", "uk", "uk2", "he", "ar", "de", "ja", "ko", "fr", "it", "lv", "lt", "ml", "th", "hu", "nl", "no", "pl", "ro", "sk", "sl", "sv", "vi", "tr", "el", "bg", "sr", "mr", "hi", "bn", "ta", "te",
].map(code => ({
  value: code,
  name: getLangNameFromCode(code)?.name
}))
  .filter(el => el.name);

const Categories = [
  "business", "science", "sports", "entertainment", "health", "technology"
].map(category => ({ value: category, name: category }));

function App () {
  const [newsItems, setNewsItems] = useState({ articles: [] });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    newsService.topNews({ isDev: IS_DEV })
      .then((data) => {
        setNewsItems(data);
        setIsLoaded(true);
      });
  }, []);

  const [searchParams, setSearchParams] = useState({});

  const addSearchParams = (key, value) => {
    setSearchParams((prevSearchParams) => {
      return {
        ...prevSearchParams,
        [key]: value
      };
    });
  };

  const searchClick = async () => {
    console.log('searchParams', searchParams);

    setIsLoaded(false);
    const response = await newsService.topNews({
      isDev: IS_DEV,
      ...searchParams
    });
    setNewsItems(response);
    setIsLoaded(true);
  };

  return (
    <div className="App">
      <SearchContext.Provider
        value={{
          addSearchParams
        }}
      >
        <header>
          <SelectorComponent
            keyName="country"
            title="country"
            dataSet={CountryCodes}
          />
          <SelectorComponent
            keyName="language"
            title="language"
            dataSet={LanguageCodes}
          />
          <SelectorComponent
            keyName="category"
            title="Categories"
            dataSet={Categories}
          />
          <div className='search-wrapper'>
            <button onClick={searchClick}>Search</button>
          </div>
        </header>
      </SearchContext.Provider>
      <div className='news-wrapper'>
        {!isLoaded && <LoaderComponent />}
        {
          newsItems.articles.map(item => {
            return <NewsItemComponent
              date={new Date(item.published_date)}
              title={item.title}
              description={item.description}
              publisher={{
                name: item.publisher.name,
                url: item.publisher.url
              }}
              category={item.keywords ? item.keywords[0] : ''}
              imageSrc={item.thumbnail}
              subTitle={null}
            />;
          })
        }
      </div>

    </div>
  );
}

export default App;
