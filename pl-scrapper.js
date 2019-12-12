const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://twitter.com/policia?lang=en';

const recoveredTweets = [];

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const tweets = $('.tweet');
        tweets.each(function() {
            const user = $(this).find('.fullname').text();
            const body = $(this).find('.tweet-text').text();
            recoveredTweets.push({
                user,
                body
            })
        });
        console.log(recoveredTweets);
    })
    .catch(console.error);