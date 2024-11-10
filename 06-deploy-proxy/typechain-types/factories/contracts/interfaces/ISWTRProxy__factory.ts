/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ISWTRProxy,
  ISWTRProxyInterface,
} from "../../../contracts/interfaces/ISWTRProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "originalData",
        type: "bytes",
      },
    ],
    name: "decodeQuadrataPassportV1OriginalData",
    outputs: [
      {
        internalType: "uint8",
        name: "aml",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "country",
        type: "string",
      },
      {
        internalType: "string",
        name: "did",
        type: "string",
      },
      {
        internalType: "bool",
        name: "isBusiness",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "investorStatus",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "originalData",
        type: "bytes",
      },
    ],
    name: "decodeWorldcoinV1OriginalData",
    outputs: [
      {
        internalType: "string",
        name: "merkle_root",
        type: "string",
      },
      {
        internalType: "string",
        name: "nullifier_hash",
        type: "string",
      },
      {
        internalType: "string",
        name: "proof",
        type: "string",
      },
      {
        internalType: "string",
        name: "verification_level",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint32[]",
        name: "version",
        type: "uint32[]",
      },
    ],
    name: "getIssuerAddressesByNameAndVersions",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "issuerAddress",
        type: "address",
      },
    ],
    name: "getIssuerRecordByAddress",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint32",
            name: "version",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "issuerAddress",
            type: "address",
          },
        ],
        internalType: "struct ISWTRProxy.Issuer",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "issuerAddress",
        type: "address",
      },
      {
        internalType: "enum ISWTRProxy.VerificationType",
        name: "verificationType",
        type: "uint8",
      },
    ],
    name: "getVerificationCountry",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "issuerAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "verificationId",
        type: "bytes",
      },
    ],
    name: "getVerificationDataById",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "verificationType",
            type: "uint32",
          },
          {
            internalType: "bytes",
            name: "verificationId",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "issuerAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "originChain",
            type: "string",
          },
          {
            internalType: "uint32",
            name: "issuanceTimestamp",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "expirationTimestamp",
            type: "uint32",
          },
          {
            internalType: "bytes",
            name: "originalData",
            type: "bytes",
          },
          {
            internalType: "string",
            name: "schema",
            type: "string",
          },
          {
            internalType: "string",
            name: "issuerVerificationId",
            type: "string",
          },
          {
            internalType: "uint32",
            name: "version",
            type: "uint32",
          },
        ],
        internalType: "struct ISWTRProxy.VerificationData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "enum ISWTRProxy.VerificationType",
        name: "verificationType",
        type: "uint8",
      },
    ],
    name: "isUserVerified",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "enum ISWTRProxy.VerificationType",
        name: "verificationType",
        type: "uint8",
      },
      {
        internalType: "address[]",
        name: "allowedIssuers",
        type: "address[]",
      },
    ],
    name: "isUserVerifiedBy",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "issuerRecordCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
    ],
    name: "listIssuersRecord",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint32",
            name: "version",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "issuerAddress",
            type: "address",
          },
        ],
        internalType: "struct ISWTRProxy.Issuer[]",
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
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "issuerAddress",
        type: "address",
      },
    ],
    name: "listVerificationData",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "verificationType",
            type: "uint32",
          },
          {
            internalType: "bytes",
            name: "verificationId",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "issuerAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "originChain",
            type: "string",
          },
          {
            internalType: "uint32",
            name: "issuanceTimestamp",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "expirationTimestamp",
            type: "uint32",
          },
          {
            internalType: "bytes",
            name: "originalData",
            type: "bytes",
          },
          {
            internalType: "string",
            name: "schema",
            type: "string",
          },
          {
            internalType: "string",
            name: "issuerVerificationId",
            type: "string",
          },
          {
            internalType: "uint32",
            name: "version",
            type: "uint32",
          },
        ],
        internalType: "struct ISWTRProxy.VerificationData[]",
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
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "issuerAddress",
        type: "address",
      },
      {
        internalType: "enum ISWTRProxy.VerificationType",
        name: "verificationType",
        type: "uint8",
      },
    ],
    name: "passedVerificationType",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "issuerAddress",
        type: "address",
      },
    ],
    name: "walletPassedAML",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class ISWTRProxy__factory {
  static readonly abi = _abi;
  static createInterface(): ISWTRProxyInterface {
    return new Interface(_abi) as ISWTRProxyInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ISWTRProxy {
    return new Contract(address, _abi, runner) as unknown as ISWTRProxy;
  }
}