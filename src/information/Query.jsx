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

};




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
};

async function aboutPosters(){
  try {
  const  posters = await cosmic.objects.find({"type": "about-posters"})
  .props("slug,title,metadata")
  .depth(1)
  return posters;
  } catch (error) {
    console.error('Error fetching objects:', error);
    return null;
  }
};
async function aboutText() {
  try {
    const text = await cosmic.objects.findOne({
      type: "about-text"
    }).props("slug,title,metadata")
    .depth(1)
    console.log(text);
    return text;
  } catch (error) {
    console.error('Error fetching objects:', error);
    return null;
  }
};
async function queryHome() {

 
  try {
    const objects = await cosmic.objects.find({"type": "home-elements"})
    .props("slug,title,metadata")
    .depth(1)


    
    return objects;
  } catch (error) {
    console.error('Error fetching objects:', error);
    return null;
  }
};


async function queryDetailsPoster(id_data){

  console.log("QUERY: "+ id_data);
  const numericId = Number(id_data);

  console.log("QUERY: "+ numericId);

  if (isNaN(numericId)) {
    throw new Error('Invalid id_data. It cannot be converted to a number.');
  }
  const poster =  await cosmic.objects.findOne({"type": "posters", "id": numericId}).props("slug,title,metadata").depth(2);

  console.log(poster);
  return poster;
};

const Query = {
  queryFilterFromServer,
  fetchPosters,
  queryDetailsPoster,
  formatFilterQuery,
  aboutPosters,
  aboutText,
  queryHome
};

export default Query;
