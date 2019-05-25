import React, { Component } from 'react';
const yelp = require('yelp-fusion');
require('./../../config/keys');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app

class Location extends Component {

    state = {
        name: '',
        hours: '',
        data: ''
    }

    componentDidMount() {

        const apiKey = process.env.APIkey;

        const searchRequest = {
            term: 'Cigerettes 4 U 4 Less',
            location: 'walnut creek, ca'
        };

        fetch('https://api.yelp.com/v3/businesses')
            .then(response => {

                const client = yelp.client(apiKey);

                client.search(searchRequest).then(response => {
                    const firstResult = response.jsonBody.businesses[0];
                    const prettyJson = JSON.stringify(firstResult, null, 4);
                    console.log(prettyJson);
                }).catch(e => {
                    console.log(e);
                });

            }
            )

       
        return (
            <div>
                Hello
            </div>
        )   
       }
    }


export default Location;