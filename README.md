# Alpha Decentralized Futures Exchange

## Alpha DeFM
Who creates data? Humans create data. In the digital age, this data is created 
by means of computers, smartphones, tablets or any other electronic device with 
which we interact. But data, I must say, is yet not a digital age invention but 
rather data has always been with us. We as humans are inevitably data producers.
Data is any type of information that can be transmitted and stored.

In that way, humans are data production machines by means of Consciousness. 
Consciousness is what allows us to interact with our world as to interpret and 
describe it to finally store this data and transmit that information. We, humans 
and our brains were the first storage device known to our kind.

In the digital age we have drifted away from being storers of data to solely 
become the producers while delegating the task of storing data to electronic 
devices for the most part. Certainly basic knowledge form which our survival 
depends we remain holders of.

Studies and trends have been showing a massive growth in data production for 
the past 10 years with no sign of decline.

In this way we now know that digital data has become an economy within itself. 
And going further, to think about digital data no only as an economy but rather 
as a commodity.

Commodities are defined to be the raw material with which secondary products 
are built and produced. It because of this that we know then that digital data, 
i.e. 1's and 0's are a commodity since they are the raw material with which we 
have built our digital empire.

This is why the adding of a financial layer is of the utmost importance in order 
for this economy to expand and thrive even further. While knowing that finance 
is the set of tools and technologies that push  forward the economy, adding a 
financial layer to a commodity such as digital data is just the next logical step.

The advancements that we have seen in the past 7 years with the emergence of 
Blockchain technology enabled the creation of a new and sophisticated layer for 
the financial markets providing a complete new set of tools that allow further 
exploration and innovation; namely with the birth of Decentralized Finance or DeFI.

For this is why I see fit the introduction of a **Data Futures Contract (DFC)** 
which will be traded on **Alpha** a **Decentralized Futures Market (DeFM)** on 
the Filecoin Blockchain.

**Filecoin** is the natural choice for the development of this financial market 
due to its robust design in being a network that deals with the state of data 
and data storage rather that just the state of transaction and account balances.

On top of that, the Filecoin Protocol by adding a Virtual Machine, the **Filecoin 
Virtual Machine** or **FVM** gives the opportunity to program logic by means of 
Actors (what are known as Smart Contracts on other chains) and interact with said 
state allowing to build a whole new set of financial technologies, tools and 
applications that enclose digital data.

## What it does
The proposal to create and trade a **Data Futures Contract** on a **Decentralized 
Futures Market or DeFM** aims to provide a way in which by the usage of a 
traditional derivatives such as Futures Contracts to:

- Sell and buy data in the market in a reliable way in which both parties are satisfied.
- Provide with an opportunity for speculators to input their _say_ in price 
discovery for digital data.
- Provide investors (both Data Producers and **Storage Providers**) with a 
financial instrument to hedge against negative price movements of the market.
- Since data is needed for Storage Providers to exist and data _needs_ to be 
stored a symbiosis is therefore needed and a financial instrument such as a 
Futures Contract provides reassures that:
   - The underlying meets a certain quality.
   - The price is agreed beforehand (i.e. before the delivery of the underlying).
   - A delivery date is secured being so that a Storage Provider can plan _ahead_, 
   i.e. it can well serve as crucial piece in the business plan of a Storage Provider.
- At the present moment the only available market that we have for Data Producers 
and Storage Providers is an OTC market trading, or _settling deals_ with what 
resembles to be a Forward Contract, that is, a contract that incurs in counter-party 
risk for both the Data Producer and the Storage Provider since the risk of default 
is high. Although slashing mechanisms are enforced in the Filecoin Protocol to 
prevent default, yet an excellent alternative to enhance trust in the market is 
to move from the OTC approach to a more reliable trading experience for all 
participants, i.e. a Decentralized Futures Market or DeFM.
- A DeFM alternatively will provides with a set of mechanisms that bring 
reliability to the market being one of those at the core of the DeFM the 
Clearinghouse. Futures Markets traditionally were created to provide with 
the reassurance to market participants that their trades were covered once 
executed, i.e. in spite of whether the counter-party defaulted or not. They 
are of course the middlemen. But given the advancements that we have with 
Blockchain we know that decentralizing this middlemen activity is possible while 
at the same time opening the market to anyone that decides to participate.
- The Clearinghouse traditionally takes care of several stages of the process 
one them being the on-time delivery of the underlying, which in this particular 
case is Digital Data.
- Both the Clearinghouse and Futures Market are in charge of guaranteeing that 
the quality of the assets delivered are up to specification which in our case 
is the delivery of digital data in a specific file format such as:
   - Data must be delivered in CAR (Content Addressable Archives) format. (Asset Quality)
   - Data must have a specific size. (Lot sizing)
- We know that the types range widely so in that to correctly price data, data 
of course should be divided creating sub-markets which would be derivatives of 
their own:
    - Audio data.
    - Video data.
    - Audio + Video data.
    - Graphical data.
    - Text data.
- In time there could be an Index for Digital Data which of course would encompass 
the entire Digital Data Market. Which would be a derivative of its own.
- This market has both the potential to serve Data Producers and Storage Providers 
creating a positive outcome for both parties while at the same time _letting_ the 
market to discover the prices for Digital Data and Storage in a Decentralized Fashion.

As we can see here, these are just a couple of the benefits and ideas that can be 
implemented in such market. Remaining that the possibilities yet to explore are vast.

## How we built it
At the moment the v0.1 is composed by 4 Actors written in solidity and deployed 
in Filecoin's Hyperspace Testnet:
### Allows to create and deploy to the network the Futures Contract with the contract's specifications stored on-chain.
#### 0x5B1cB45B5C20a68660315F9AC13D326C93C66964
´´´
FuturesContract.sol
´´´
### Issues the Futures Contracts.
#### 0xd70727B77D7f9263C586601D165741c05D9aDFa7
´´´
FuturesContractIssuer.sol
´´´
### This is were the Futures Contracts are bought and sold.
#### 0x5B1cB45B5C20a68660315F9AC13D326C93C66964
´´´
FuturesExchange.sol
´´´
### An ERC20 implementation of a wrapped Filecoin USDC.
#### 0x8A0C0417434a382604F0DD0aF3146dB6944331B7
´´´
FilecoinUSDC.sol
´´´

And a vanilla JavaScript App on the front-end.
