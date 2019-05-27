const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'Ul9dIbNf4q_t9U_jNe_u40qxXepqK-SKRZnGkaVl5zr8oRxhX5Gvf4jgZVI1I7XwdXFeP5F2ur_WyxIsisT8gLJQokRzFlbbExODb8goroTbpnAKTErdqtwJoe7kXHYx';

// const searchRequest = {
//   term:'Cigarettes 4 Less',
//   location: 'walnut creek, ca'
// };

export default {
  client: yelp.client(apiKey),
  searchRequest: {
    term:'Cigarettes 4 Less',
    location: 'walnut creek, ca'
  }
} 

// client.search(searchRequest).then(response => {
//   const firstResult = response.jsonBody.businesses[0];
//   const prettyJson = JSON.stringify(firstResult, null, 4);
//   console.log(prettyJson);
// }).catch(e => {
//   console.log(e);
// })