import axios from 'axios';
import NewsMock from './news.api.mock.json';

class NewsService {

 mock = NewsMock;

 constructor() {
  this.baseUrl = 'https://news-api14.p.rapidapi.com';
  this.headers = {
   'X-RapidAPI-Key': 'd2860f0695msh568b183d1650a8ap19b5a2jsn5d21488f1f5a',
   'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
  };
 }

 async topNews (params = {}) {
  const {
   isDev = true,
   country = 'us',
   language = 'en',
   pageSize = '10',
   category = 'sports'
  } = params;

  if (isDev) {
   await new Promise(res => setTimeout(res, 1500));
   return this.mock;
  }

  const response = await axios.get(
   `${this.baseUrl}/top-headlines`,
   {
    headers: this.headers,
    params: {
     country,
     language,
     pageSize,
     category
    }
   }
  );

  return response.data;
 }
}

const service = new NewsService();

export default service;