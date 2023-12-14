import queryfromserver from '../information/poster_result.json';
import aboutfromserver from '../information/about.json';
import imagesHomepage from '../information/home.json';


const formatFilterQuery = (selectedGenresArray, selectedDecadesArray, searchText) => {
  let query="";
  if(searchText!="") query= "LAYOUT: new query [" + searchText + ";" + selectedDecadesArray + ";" + searchText + "]" ;
  else{
    console.log("Query: new filters were empty, working as it should!");

  }

  return query;

}

const queryFilterFromServer = (value) => {
  if(value=="") console.log("Query: loading filtered Query NO FILTERS:");
  else{
    console.log("Query: loading filtered Query:" + value);
  }
  return queryfromserver;
};

const queryArchive = () => {
  console.log("Query: loading Archive Query")
  return queryfromserver;
};

const queryAbout = () => {
  console.log("Query: loading About Query")
  return aboutfromserver[0];
};

const queryHome = () => {
  console.log("Query: loading some Elements for Home")
  return imagesHomepage;
};

const queryDetailsPoster = (id_data) => {
  console.log("Query: loading Details Poster Query")
  return queryfromserver[id_data];
};

const Query = {
  queryFilterFromServer,
  queryArchive,
  queryDetailsPoster,
  formatFilterQuery,
  queryAbout,
  queryHome
};

export default Query;
