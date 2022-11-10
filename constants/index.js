export const contractAddress = "0x56DD73feB306689a29f64C86ca839EAe44Cf66D2";
export const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "action",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "body",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "updated",
        type: "uint256",
      },
    ],
    name: "Action",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_body",
        type: "string",
      },
    ],
    name: "createMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_messageId",
        type: "uint256",
      },
    ],
    name: "deleteMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMessages",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "messageId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "string",
            name: "body",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "created",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "updated",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isDeleted",
            type: "bool",
          },
        ],
        internalType: "struct SuperchatDapp.Message[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_messageId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_newBody",
        type: "string",
      },
    ],
    name: "updateMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
