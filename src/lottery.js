import web3 from "./web3";

const contractAddress = "0xb6E1D2F69db2d427EB67cCa5692EEf6a731C3094";

const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
    constant: undefined,
    payable: undefined,
    signature: "constructor",
  },
  {
    inputs: [],
    name: "enter",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    constant: undefined,
    payable: true,
    signature: "0xe97dcb62",
  },
  {
    inputs: [],
    name: "getPlayers",
    outputs: [[Object]],
    stateMutability: "view",
    type: "function",
    constant: true,
    payable: undefined,
    signature: "0x8b5b9ccc",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [[Object]],
    stateMutability: "view",
    type: "function",
    constant: true,
    payable: undefined,
    signature: "0x481c6a75",
  },
  {
    inputs: [],
    name: "pickWinner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
    constant: undefined,
    payable: undefined,
    signature: "0x5d495aea",
  },
  {
    inputs: [[Object]],
    name: "players",
    outputs: [[Object]],
    stateMutability: "view",
    type: "function",
    constant: true,
    payable: undefined,
    signature: "0xf71d96cb",
  },
];

export default new web3.eth.Contract(abi, contractAddress);
