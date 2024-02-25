# <h1 align="center">🌱 Waste-to-Energy Platform 🌞</h1>

<p align="center">
  <img src="https://www.clearias.com/up/waste-to-energy.png" alt="Waste-to-Energy Platform" width="300">
</p>

<p align="center">Welcome to the Waste-to-Energy Platform – your gateway to sustainable waste management and renewable energy production! 💡</p>

# Index

- [🌱 Waste-to-Energy Platform 🌞](#-waste-to-energy-platform-)
- [Index](#index)
- [🚀 Introduction](#-introduction)
  - [Techstack](#techstack)
  - [✨ Features](#-features)
- [How to setup](#how-to-setup)
  - [Clone the repo](#clone-the-repo)
  - [Install dependencies](#install-dependencies)
  - [.env file creation](#env-file-creation)
  - [Deploying the smart contract](#deploying-the-smart-contract)
- [Finally run the webapp](#finally-run-the-webapp)
- [📝 License](#-license)

# 🚀 Introduction

The Waste-to-Energy Platform is a decentralized solution designed to revolutionize how we manage organic waste and harness renewable energy. By connecting households and businesses with local waste-to-energy conversion facilities, our platform incentivizes eco-friendly waste disposal while promoting the generation of clean energy. ♻️

## Techstack
     
    - Polygon zkEVM Used
    - ReactJS
    - Solidity
    - Hardhat
    - Ether.js
    - TailwindCSS
    - Javascript
    - Gemini
    - Tinkercad

## ✨ Features

- **Organic Waste Exchange**: Easily exchange organic waste for energy credits, encouraging sustainable waste disposal practices.
- **Transparent Transactions**: Utilize blockchain technology for secure and transparent energy transactions, ensuring accountability and trust.
- **Real-Time Monitoring**: Monitor energy consumption and production in real-time, detecting anomalies and preventing electricity theft.
- **Community Engagement**: Engage with local communities through educational resources, incentives, and collaborative initiatives.
- **Government Collaboration**: Partner with government agencies for regulatory compliance, funding opportunities, and policy advocacy.
- 
# How to setup

## Clone the repo

Fork and clone the repo

```bash
git clone git@github.com:Sanjeev12357/electronToken.git
cd electronToken
```

## Install dependencies

```bash
npm install
```

## .env file creation
 - Create the .env file in contract folder
```bash
cd contract
touch .env
```
copy this code and paste it in your .env file
``` bash
INFURA_API_KEY="------Enter Your Infura API Key--------"
PRIVATE_KEY="------Enter Your Private Key of metamask wallet--------"
```
If you don't have INFURA API KEY then [click here](https://app.infura.io/) and copy your api key

## Deploying the smart contract

 - Install this dependecy
  ```bash
  cd ..
  npm install @nomicfoundation/hardhat-toolbox
  ```

  - Run this command to deploy the smart contract
  ``` bash
  cd contract
  npx hardhat run scripts/deploy.js --network zkEVM
```

# Finally run the webapp

```bash
cd ..
npm start
```

The webapp will be running on `localhost:3000`

To open the same application of another device for testing purposes, make sure that the device is connected to the same network as the device on which the webapp is running. Then visit `http://<IP_ADDRESS_OF_THE_DEVICE_RUNNING_THE_WEBAPP>:3000`

# 📝 License

The projects is licensed under [MIT](https://choosealicense.com/licenses/mit/)
