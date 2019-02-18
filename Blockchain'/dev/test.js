var Blockchain = require('./blockchain.js');

const bitcoin = new Blockchain();


const bc1 = {
"chain": [
{
"index": 1,
"timeStamp": 1529929002561,
"transactions": [],
"nonce": 100,
"hash": "0",
"previousBlockHash": "0"
},
{
"index": 2,
"timeStamp": 1529929047110,
"transactions": [],
"nonce": 18140,
"hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
"previousBlockHash": "0"
},
{
"index": 3,
"timeStamp": 1529929054993,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"transactionId": "11285ed337c54e37939860efd37855fb"
}
],
"nonce": 8120,
"hash": "00002bded398e3c288aceca201011d040c25fd933f572931e5d358142a6f55c7",
"previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
},
{
"index": 4,
"timeStamp": 1529929103167,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"transactionId": "11285ed337c54e37939860efd37855fb"
},
{
"amount": 10,
"sender": "KJKHMLKFRSSJULwwwS785JH",
"rec": "KUYOSAADKDF9223dd4486795KK",
"transactionId": "11285ed337c54e37939860efd37855fb"
},
{
"amount": 20,
"sender": "KJKHMLKFRSSJULwwwS785JH",
"rec": "KUYOSAADKDF9223dd4486795KK",
"transactionId": "11285ed337c54e37939860efd37855fb"
},
{
"amount": 30,
"sender": "KJKHMLKFRSSJULwwwS785JH",
"rec": "KUYOSAADKDF9223dd4486795KK",
"transactionId": "11285ed337c54e37939860efd37855fb"
}
],
"nonce": 48715,
"hash": "0000b4639d1d234676511cc7f8af551b0620909fc727cf6c915298b49b02ccae",
"previousBlockHash": "00002bded398e3c288aceca201011d040c25fd933f572931e5d358142a6f55c7"
},
{
"index": 5,
"timeStamp": 1529929180214,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"transactionId": "11285ed337c54e37939860efd37855fb"
}
],
"nonce": 73721,
"hash": "00000f5c862f4e3aee8c41a905f0b2e1e55a52b513e5edc0904038034769fd9b",
"previousBlockHash": "0000b4639d1d234676511cc7f8af551b0620909fc727cf6c915298b49b02ccae"
},
{
"index": 6,
"timeStamp": 1529929184972,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"transactionId": "11285ed337c54e37939860efd37855fb"
}
],
"nonce": 136274,
"hash": "00007cbba8e0d45984a2e8d9e61bd1bcc730735b0bcd1b30b696e0631de6f296",
"previousBlockHash": "00000f5c862f4e3aee8c41a905f0b2e1e55a52b513e5edc0904038034769fd9b"
}
],
"pendingTransactions": [
{
"amount": 12.5,
"sender": "00",
"transactionId": "11285ed337c54e37939860efd37855fb"
}
],
"currentNodeUrl": "http://localhost:3001",
"networkNodes": []
};

console.log(bitcoin.chainIsValid(bc1.chain));


             