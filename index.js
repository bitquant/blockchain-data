'use strict';

const request = require('request-promise-native').defaults({timeout: 9999});

var getBitcoinPrice = async (symbol) => {

    const options = {
        uri: "https://blockchain.info/ticker",
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:45.0) Gecko/20100101 Firefox/45.0'
        },
    };

    const responseBody = await request(options);
    const bitcoinData = JSON.parse(responseBody);
    const currencyList = [];

    const bitcoinPrice = {
        time: new Date().toString(),
        USD: null,
        currencies: currencyList
    }

    for (const currency in bitcoinData) {

        const currencyInfo = {
            currency: currency,
            last: bitcoinData[currency].last,
            symbol: bitcoinData[currency].symbol,
            bid: bitcoinData[currency].sell,
            ask: bitcoinData[currency].buy
        }
        if (currency === "USD") {
            bitcoinPrice.USD = {
                last: bitcoinData[currency].last,
                symbol: bitcoinData[currency].symbol,
                bid: bitcoinData[currency].sell,
                ask: bitcoinData[currency].buy
            }
        }
        currencyList.push(currencyInfo);
    }

    return bitcoinPrice;
};

exports.getBitcoinPrice = getBitcoinPrice;
