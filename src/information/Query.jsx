import queryfromserver from '../information/poster_result.json';


const formatFilterQuery = (selectedGenresArray, selectedDecadesArray, searchText) => {
  const query="";
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

const queryDetailsPoster = (id_data) => {
  console.log("Query: loading Details Poster Query")
  return queryfromserver[id_data];
};

const Query = {
  queryFilterFromServer,
  queryArchive,
  queryDetailsPoster,
  formatFilterQuery
};

export default Query;
