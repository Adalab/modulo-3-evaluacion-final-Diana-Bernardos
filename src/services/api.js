const getDataFromAPi = () => {
   
    return fetch('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
      .then((resp) => resp.json())
      .then((data) => {
        const newArray = data.results.map((results) => {
      console.log(results);
          return {
            id: results.id,
            name: results.name,
            image:results.image,
            species:results.species,
            status:results.status,
            origin:results.origin.name,
            location:results.location.name,
            episode:results.episode,
            
          };
        });
        return newArray;
      });
  };
  export default getDataFromAPi;
  