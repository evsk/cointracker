const axios = require('axios');
const Transaction = require('../database/model');

const queryBlockchain = (url, txHash, res) => {
  axios.get(url)
    .then((response) => {
      const { data } = response;
      console.log(data);
      Transaction.create({
        txHash,
        time: data.time,
        inputs: data.inputs,
        outputs: data.out,
        block: data.block_height,
        txName: '',
      }, (error) => {
        if (error) {
          console.log(error);
          res.sendStatus(500);
        }
        Transaction.findOne({
          txHash: data.hash,
        }, (error, result) => {
          if (error) {
            console.log(error);
            res.sendStatus(500);
          }
          res.send(result);
        });
      });
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
};


module.exports.search = (req, res) => {
  const { txHash } = req.params;
  Transaction.find({ txHash }, (error, result) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else if (result.length > 0) {
      console.log(result);
      res.send(result);
    } else {
      const url = `https://blockchain.info/rawtx/${txHash}`;
      queryBlockchain(url, txHash, res);
    }
  });
};
