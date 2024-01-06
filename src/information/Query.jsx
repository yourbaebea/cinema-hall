import { createBucketClient } from '@cosmicjs/sdk'

const cosmic = createBucketClient({
  bucketSlug: 'cinema-hall-production',
  readKey: 'AXKknWLJxGbDt8tyK8qh0GznjfGy4vSVM76P4sDUd4ktA5svp7'
})


const formatFilterQuery = (selectedGenresArray, selectedDecadesArray, searchText) => {
  const query="";
  if(searchText!=="") query= "LAYOUT: new query [" + searchText + ";" + selectedDecadesArray + ";" + searchText + "]" ;
  else{
    console.log("Query: new filters were empty, working as it should!");

  }

  return query;

};

async function queryFilterFromServer({ genres, decades, searchText }) {
  try {
    let posters;

    if (searchText !== "") {
      posters = await cosmic.objects.find({
        "type": "posters",
        "title": { $regex: searchText, $options: 'i' }
      }).limit(12).skip(0).props("slug,title,metadata").depth(2);
    } else if (genres.length > 0) {
      posters = await cosmic.objects.find({
        "type": "posters",
        "metadata.genres": { $in: genres }
      }).limit(12).skip(0).props("slug,title,metadata").depth(2);
    } else if (decades.length > 0) {
      const decadesRange = decades.map(decade => {
        const [start, end] = decade.split("-");
        return { $gte: start, $lte: end };
      });

      posters = await cosmic.objects.find({
        "type": "posters",
        "metadata.release_date": { $or: decadesRange }
      }).limit(12).skip(0).props("slug,title,metadata").depth(2);
    } else {
      console.log("Query: loading filtered Query NO FILTERS:");
      return [];
    }

    console.log("Query: loading filtered Query:", { genres, decades, searchText });
    return posters;
  } catch (error) {
    console.error('Error fetching posters:', error);
    return [];
  }
}


async function fetchPosters(){
  const posters =  await cosmic.objects.find({"type": "posters"})
    .limit(12)
    .skip(0)
    .props("slug,title,metadata")
    .depth(2)

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

  const poster =  await cosmic.objects.findOne({"type": "posters", "slug": id_data}).props("slug,title,metadata").depth(2);

  return poster;
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
