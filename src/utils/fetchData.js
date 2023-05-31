export const exerciseOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '01f08bfe4amshfdbf7c357c75117p177417jsnc57a2d87a6c3',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };

      export const youtubeOptions={

          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '01f08bfe4amshfdbf7c357c75117p177417jsnc57a2d87a6c3',
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
          }
        };
      



export const fetchData= async (url, options)=>{
const response = await fetch(url, options);
const data = await response.json();
return data;

}