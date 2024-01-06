import { createBucketClient } from '@cosmicjs/sdk'

const cosmic = createBucketClient({
  bucketSlug: 'cinema-hall-production',
  readKey: 'AXKknWLJxGbDt8tyK8qh0GznjfGy4vSVM76P4sDUd4ktA5svp7'
})


async function fetchGenres() {
  try {
    const response = await cosmic.objects.find({
      "type": "poster-genres"
    }).props("slug,title,metadata").depth(1);

    const genres = response && response.objects ? response.objects : [];


    return genres;
  } catch (error) {
    console.error('Error fetching genres:', error);
    return [];
  }
}

async function fetchPosterYears() {
  try {
    const posters = await cosmic.objects.find({
      "type": "posters"
    }).limit(12).skip(0).props("slug,title,metadata").depth(2);

    const posterYears = posters && posters.objects ? posters.objects.map(poster => poster.metadata.details.metadata.year) : [];

    return posterYears;
  } catch (error) {
    console.error('Error fetching poster years:', error);
    return [];
  }
}


async function queryFilterFromServer({ searchText }) {
  try {
    const posters = await cosmic.objects.find({
      "type": "posters",
      "title": { $regex: searchText, $options: 'i' }
    }).limit(12).skip(0).props("slug,title,metadata").depth(2);

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
  fetchGenres,
  fetchPosterYears,
  queryFilterFromServer,
  fetchPosters,
  queryDetailsPoster,
  aboutPosters,
  aboutText,
  queryHome
};

export default Query;
