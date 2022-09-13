# Rosetta API for Sui

[Rosetta](https://www.rosetta-api.org/docs/welcome.html) is an open-source specification and set of tools for blockchain
integration. Rosetta’s goal is to make blockchain integration simpler, faster, and more reliable than using a native
integration.

## Overview

Sui-Rosetta is an implementation of the Rosetta API for the Sui network, the Sui-Rosetta server uses the Sui fullnode to
read and write transactions to the Sui network.

## Local network quick start

### 1. Genesis

`./sui genesis -f`  
The Sui genesis process will create configs and coins for testing, the config files are stored in `~/.sui/sui_config` by
default.

### 2. Start local network

`./sui start`

### 3. Start Rosetta Online server

`./sui-rosetta start-online-server`

### 4. Start Rosetta Offline server

`./sui-rosetta start-offline-server`

### 5. Generate configuration with prefunded accounts for rosetta-cli

`./sui-rosetta generate-rosetta-cli-config`
This will generate the `rosetta-cli.json` and `sui.ros` file to be used by the [Rosetta-CLI]()

## Supported APIs

### Account
| Method | Endpoint         | Description                    | Sui Supported? |  Server Type  |
|--------|------------------|--------------------------------|:--------------:|:-------------:|
| POST   | /account/balance | Get an Account's Balance       |      Yes       |    Online     |
| POST   | /account/coins   | Get an Account's Unspent Coins |      Yes       |    Online     |

### Block
| Method | Endpoint           | Description             |                                      Sui Supported?                                       |  Server Type  |
|--------|--------------------|-------------------------|:-----------------------------------------------------------------------------------------:|:-------------:|
| POST   | /block             | Get a Block             | Yes (One transaction per block in phase 1, will be replaced by Sui checkpoint in phase 2) |    Online     |
| POST   | /block/transaction | Get a Block Transaction |                                            Yes                                            |    Online     |

### Call
| Method | Endpoint | Description                            | Sui Supported? | Server Type |
|--------|----------|----------------------------------------|:--------------:|:-----------:|
| POST   | /call    | Make a Network-Specific Procedure Call |       No       |     --      |

### Construction
| Method | Endpoint                 | Description                                           | Sui Supported? | Server Type |
|--------|--------------------------|-------------------------------------------------------|:--------------:|:-----------:|
| POST   | /construction/combine    | Create Network Transaction from Signatures            |      Yes       |   Offline   |
| POST   | /construction/derive     | Derive an AccountIdentifier from a PublicKey          |      Yes       |   Offline   |
| POST   | /construction/hash       | Get the Hash of a Signed Transaction                  |      Yes       |   Offline   |
| POST   | /construction/metadata   | Get Metadata for Transaction Construction             |      Yes       |   Online    |
| POST   | /construction/parse      | Parse a Transaction                                   |      Yes       |   Offline   |
| POST   | /construction/payloads   | Generate an Unsigned Transaction and Signing Payloads |      Yes       |   Offline   |
| POST   | /construction/preprocess | Create a Request to Fetch Metadata                    |      Yes       |   Offline   |
| POST   | /construction/submit     | Submit a Signed Transaction                           |      Yes       |   Online    |

### Events
| Method | Endpoint       | Description                          | Sui Supported? | Server Type |
|--------|----------------|--------------------------------------|:--------------:|:-----------:|
| POST   | /events/blocks | [INDEXER] Get a range of BlockEvents |       No       |     --      |

### Mempool
| Method | Endpoint             | Description                  | Sui Supported? | Server Type |
|--------|----------------------|------------------------------|:--------------:|:-----------:|
| POST   | /mempool             | Get All Mempool Transactions |       No       |     --      |
| POST   | /mempool/transaction | Get a Mempool Transaction    |       No       |     --      |

### Network
| Method | Endpoint         | Description                    | Sui Supported? |  Server Type   |
|--------|------------------|--------------------------------|:--------------:|:--------------:|
| POST   | /network/list    | Get List of Available Networks |      Yes       | Online/Offline |
| POST   | /network/options | Get Network Options            |      Yes       | Online/Offline |
| POST   | /network/status  | Get Network Status             |      Yes       |     Online     |

### Search
| Method | Endpoint             | Description                       | Sui Supported? | Server Type |
|--------|----------------------|-----------------------------------|:--------------:|:-----------:|
| POST   | /search/transactions | [INDEXER] Search for Transactions |       No       |     --      |
