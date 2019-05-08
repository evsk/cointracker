# CoinTracker

A bitcoin blockchain transaction search tool

## Installing Dependencies

- `npm install` from within the root directory

## Starting App
- `npm run react-dev` to generate the webpack bundle
- `npm start` to start the server
- Navigate to `http://localhost:3000`

## Usage
- Input a bitcoin transaction hash into the search bar to view transaction details. Returned results include:
  - Transaction Block
  - Input and Output Addresses
  - Transacted Amounts
- Look up past search results by transaction hash
- Tag search results with easy to remember names for faster future look up
- Notes:
  - App uses the blockchain.com [API](https://www.blockchain.com/api) to access bitcoin blockchain data
  - A [Mongo database](https://www.mongodb.com/) is necessary to persist search results locally
