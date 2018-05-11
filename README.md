# blockchain-data
Bitcoin quotes in multiple currencies from blockchain.info

## Install
```
$ npm install blockchain-data --save
```

## Usage
```javascript

var blockchain = require("blockchain-data");

(async () => {
    try {
        let data = await blockchain.getBitcoinPrice();
        console.log(JSON.stringify(data, null, 2));
    }
    catch (ex) {
        console.log('caught error:' + ex.stack);
    }
})();

/*
{
  "time": "Fri May 11 2018 17:40:23 GMT-0500 (CDT)",
  "USD": {
    "last": 8430.63,
    "symbol": "$",
    "bid": 8430.63,
    "ask": 8430.63
  },
  "currencies": [
    {
      "currency": "USD",
      "last": 8430.63,
      "symbol": "$",
      "bid": 8430.63,
      "ask": 8430.63
    },
    {
      "currency": "AUD",
      "last": 11176.83,
      "symbol": "$",
      "bid": 11176.83,
      "ask": 11176.83
    },
    {
      "currency": "BRL",
      "last": 30346.05,
      "symbol": "R$",
      "bid": 30346.05,
      "ask": 30346.05
    },
    {
      "currency": "CAD",
      "last": 10798.81,
      "symbol": "$",
      "bid": 10798.81,
      "ask": 10798.81
    },
    {
      "currency": "CHF",
      "last": 8437.68,
      "symbol": "CHF",
      "bid": 8437.68,
      "ask": 8437.68
    },
    {
      "currency": "CLP",
      "last": 5221930.94,
      "symbol": "$",
      "bid": 5221930.94,
      "ask": 5221930.94
    },
    {
      "currency": "CNY",
      "last": 53322.04,
      "symbol": "¥",
      "bid": 53322.04,
      "ask": 53322.04
    },
    {
      "currency": "DKK",
      "last": 52601.22,
      "symbol": "kr",
      "bid": 52601.22,
      "ask": 52601.22
    },
    {
      "currency": "EUR",
      "last": 7054.44,
      "symbol": "€",
      "bid": 7054.44,
      "ask": 7054.44
    },
    {
      "currency": "GBP",
      "last": 6223.7,
      "symbol": "£",
      "bid": 6223.7,
      "ask": 6223.7
    },
    {
      "currency": "HKD",
      "last": 66180.85,
      "symbol": "$",
      "bid": 66180.85,
      "ask": 66180.85
    },
    {
      "currency": "INR",
      "last": 568168.68,
      "symbol": "₹",
      "bid": 568168.68,
      "ask": 568168.68
    },
    {
      "currency": "ISK",
      "last": 862463.61,
      "symbol": "kr",
      "bid": 862463.61,
      "ask": 862463.61
    },
    {
      "currency": "JPY",
      "last": 912862.4,
      "symbol": "¥",
      "bid": 912862.4,
      "ask": 912862.4
    },
    {
      "currency": "KRW",
      "last": 9002983.27,
      "symbol": "₩",
      "bid": 9002983.27,
      "ask": 9002983.27
    },
    {
      "currency": "NZD",
      "last": 12099.22,
      "symbol": "$",
      "bid": 12099.22,
      "ask": 12099.22
    },
    {
      "currency": "PLN",
      "last": 30120.53,
      "symbol": "zł",
      "bid": 30120.53,
      "ask": 30120.53
    },
    {
      "currency": "RUB",
      "last": 521813.72,
      "symbol": "RUB",
      "bid": 521813.72,
      "ask": 521813.72
    },
    {
      "currency": "SEK",
      "last": 72495.81,
      "symbol": "kr",
      "bid": 72495.81,
      "ask": 72495.81
    },
    {
      "currency": "SGD",
      "last": 11266.37,
      "symbol": "$",
      "bid": 11266.37,
      "ask": 11266.37
    },
    {
      "currency": "THB",
      "last": 268696.76,
      "symbol": "฿",
      "bid": 268696.76,
      "ask": 268696.76
    },
    {
      "currency": "TWD",
      "last": 250929.21,
      "symbol": "NT$",
      "bid": 250929.21,
      "ask": 250929.21
    }
  ]
}
*/

```

## License
MIT license; see [LICENSE](./LICENSE).
