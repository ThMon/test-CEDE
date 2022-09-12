# Frontend Challenge
The CEDE Engineering Team appreciates your interest.
The tasks from this repository are used for all levels of frontend engineering roles.

TO DO:
- complete the coding tasks
- upload the code to your personal github repo 
- share the link to your repo

## Prerequisites
To build and run the sample code please make sure you have the following prerequisites
- Node v16 or higher
- Yarn

## Getting Started
This repository contains a sample ReactJs application. When launched the sample web application displays NFTs for a hardcoded address.

You can follow the instruction below to launch the sample application.
1. Install dependencies using `yarn`
2. Launch the web application using `yarn start`
3. Navigate to [http://localhost:3000](http://localhost:3000)

Please feel free to make your own decisions about Web UI development. Though you are can use any UI library to build the web page, please see if you can avoid them. Also, you may use any state management technique.

## Before you start
Please, create you own API key [here](https://moralis.io) in order to fetch NFT data. Once created, put it in .env
like in the .env.example.

## Coding Exercise
Please complete the following coding exercises and submit your code to us.

### Exercise 1: Design a web page in line with the mockup.
> Requirement 1: As a user, I want to see a home page with a brief project description before going to the app and explore collections.

> Requirement 2: As a user, I want to see a responsive page similar to the mockup.

> Requirement 3: As a user, I want to add NFTs to my wishlist displayed on right section of the web page.
![](./mockup.png)

Please test your code for accessibility and make sure it is accessible.

### Exercise 2: Add instant search capabilities
> Requirement 1: As a user, I want to see NFT results as I am typing in the search field. I'd like to be able to type the collection name, the contract address, or the user's wallet address (please, check [here](https://blockdaemon.com/documentation/ubiquity-api/nft-api/get-nft-assets/)). I don't want to have to submit the form to view search results.

Please make sure you are not spamming the API with too many calls. No more than one request every 500 ms.

### Exercise 3: Unit tests
Write unit tests for your code.

### Bonus
> Requirement 1: As a user, I want to connect my metamask and have an overview of my NFT assets.


## How to submit code?
Please upload completed code to a personal git repository and share the link to your repository with us.
