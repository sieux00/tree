require('dotenv').config({ path: '../../.env' });
const mongodb = require('../../db')
const fs = require('fs')

var dbo;
async function run() {
    dbo = await mongodb.connect();

    var transfer = await getTransfer()

    let result = {
        name: convertAddress(transfer.from, transfer.amount),
    }

    var arr = []
    var obj = await handleData(transfer)
    arr.push(obj)
    result.children = arr;


    fs.writeFileSync('../../tree.json', JSON.stringify(result))

    console.log("DONE")
}

async function handleData(transfer) {
    var result = {
        name: convertAddress(transfer.to, transfer.amount),
    }

    var listChild = await getTransferByFrom(transfer.to)

    var arr = []
    for (let i = 0; i < listChild.length; i++) {
        let child = listChild[i]

        let obj = await handleData(child)
        arr.push(obj)

    }

    result.children = arr.length === 0 ? false : arr;

    return result;

}

function getTransferByFrom(from) {
    return new Promise((resolve, reject) => {
        const collection = dbo.collection('transfers');
        collection.find({ from })
            .sort({ time: 1 })
            .toArray((err, docs) => {
                if (err) return resolve([])
                resolve(docs)
            })
    })
}


function getTransfer() {
    return new Promise((resolve, reject) => {
        const collection = dbo.collection('transfers');
        collection.find({})
            .limit(1)
            .sort({ time: 1 })
            .toArray((err, docs) => {
                if (err) return resolve({})
                resolve(docs[0])
            })
    })
}

function convertAddress(address, amount) {
    let str = address.substr(38, 4)
    let amountFormat = amount.toLocaleString()
    str += ` (${amountFormat})`
    return str;
}

run()