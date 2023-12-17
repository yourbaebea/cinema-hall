import queryfromserver from '../information/poster_result.json';
import aboutfromserver from '../information/about.json';
import imagesHomepage from '../information/home.json';

import { createBucketClient } from '@cosmicjs/sdk'

const cosmic = createBucketClient({
  bucketSlug: 'cinema-hall-production',
  readKey: 'AXKknWLJxGbDt8tyK8qh0GznjfGy4vSVM76P4sDUd4ktA5svp7'
})


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
async function fetchPosters(){
const posters =  await cosmic.objects.find({"type": "posters"})
  .props("slug,title,metadata")
  .depth(2);

  return posters;
}

const queryAbout = () => {
  console.log("Query: loading About Query")
  return aboutfromserver[0];
};

const queryHome = () => {
  console.log("Query: loading some Elements for Home")
  return imagesHomepage;
};

async function queryDetailsPoster(id_data){
  const poster =  await cosmic.objects.findOne({"type": "posters", "id": id_data})
  .props("slug,title,metadata")
  .depth(2);

  return poster;
};

const Query = {
  queryFilterFromServer,
  fetchPosters,
  queryDetailsPoster,
  formatFilterQuery,
  queryAbout,
  queryHome
};

export default Query;
