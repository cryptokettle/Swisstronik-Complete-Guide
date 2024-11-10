/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BytesLike,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { PayableOverrides } from "../../common";
import type {
  TransparentUpgradeableProxy,
  TransparentUpgradeableProxyInterface,
} from "../../contracts/TransparentUpgradeableProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "ERC1967InvalidAdmin",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "ERC1967InvalidImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1967NonPayable",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
] as const;

const _bytecode =
  "0x6080604052604051620016df380380620016df833981810160405281019062000029919062000731565b82816200003d82826200005960201b60201c565b50506200005082620000e660201b60201c565b5050506200086d565b6200006a82620000fa60201b60201c565b8173ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a2600081511115620000d157620000ca8282620001d260201b60201c565b50620000e2565b620000e16200026260201b60201c565b5b5050565b620000f781620002a060201b60201c565b50565b60008173ffffffffffffffffffffffffffffffffffffffff163b036200015957806040517f4c9c8ce3000000000000000000000000000000000000000000000000000000008152600401620001509190620007bd565b60405180910390fd5b806200018e7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b620002fe60201b60201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606000808473ffffffffffffffffffffffffffffffffffffffff1684604051620001fe919062000827565b600060405180830381855af49150503d80600081146200023b576040519150601f19603f3d011682016040523d82523d6000602084013e62000240565b606091505b5091509150620002588583836200030860201b60201c565b9250505092915050565b60003411156200029e576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f620002d1620003a660201b60201c565b82604051620002e292919062000840565b60405180910390a1620002fb816200040560201b60201c565b50565b6000819050919050565b60608262000327576200032182620004f360201b60201c565b6200039e565b6000825114801562000350575060008473ffffffffffffffffffffffffffffffffffffffff163b145b156200039557836040517f9996b3150000000000000000000000000000000000000000000000000000000081526004016200038c9190620007bd565b60405180910390fd5b8190506200039f565b5b9392505050565b6000620003dc7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b620002fe60201b60201c565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036200047a5760006040517f62e77ba2000000000000000000000000000000000000000000000000000000008152600401620004719190620007bd565b60405180910390fd5b80620004af7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b620002fe60201b60201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600081511115620005075780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200057a826200054d565b9050919050565b6200058c816200056d565b81146200059857600080fd5b50565b600081519050620005ac8162000581565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200060782620005bc565b810181811067ffffffffffffffff82111715620006295762000628620005cd565b5b80604052505050565b60006200063e62000539565b90506200064c8282620005fc565b919050565b600067ffffffffffffffff8211156200066f576200066e620005cd565b5b6200067a82620005bc565b9050602081019050919050565b60005b83811015620006a75780820151818401526020810190506200068a565b60008484015250505050565b6000620006ca620006c48462000651565b62000632565b905082815260208101848484011115620006e957620006e8620005b7565b5b620006f684828562000687565b509392505050565b600082601f830112620007165762000715620005b2565b5b815162000728848260208601620006b3565b91505092915050565b6000806000606084860312156200074d576200074c62000543565b5b60006200075d868287016200059b565b935050602062000770868287016200059b565b925050604084015167ffffffffffffffff81111562000794576200079362000548565b5b620007a286828701620006fe565b9150509250925092565b620007b7816200056d565b82525050565b6000602082019050620007d46000830184620007ac565b92915050565b600081519050919050565b600081905092915050565b6000620007fd82620007da565b620008098185620007e5565b93506200081b81856020860162000687565b80840191505092915050565b6000620008358284620007f0565b915081905092915050565b6000604082019050620008576000830185620007ac565b620008666020830184620007ac565b9392505050565b610e62806200087d6000396000f3fe608060405261000c61000e565b005b6060600080357fffffffff00000000000000000000000000000000000000000000000000000000169050610040610348565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff160361028057633659cfe660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916036100cd576100c6610357565b9150610278565b634f1ef28660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191603610128576101216103b4565b9150610277565b638f28397060e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916036101835761017c6103ff565b9150610276565b63f851a44060e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916036101de576101d761044c565b9150610275565b635c60da1b60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19160361023957610232610488565b9150610274565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026b90610a99565b60405180910390fd5b5b5b5b5b815160208301f35b63f851a44060e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916036102de576102d461044c565b9150815160208301f35b635c60da1b60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19160361033c57610332610488565b9150815160208301f35b6103446104c4565b5050565b60006103526104d6565b905090565b606061036161052d565b60008036600490809261037693929190610acd565b8101906103839190610b70565b905061039e816040518060200160405280600081525061053c565b6040518060200160405280600081525091505090565b606060008060003660049080926103cd93929190610acd565b8101906103da9190610ce3565b915091506103e8828261053c565b604051806020016040528060008152509250505090565b606061040961052d565b60008036600490809261041e93929190610acd565b81019061042b9190610b70565b90506104368161054a565b6040518060200160405280600081525091505090565b606061045661052d565b6000610460610348565b9050806040516020016104739190610d60565b60405160208183030381529060405291505090565b606061049261052d565b600061049c610556565b9050806040516020016104af9190610d60565b60405160208183030381529060405291505090565b6104d46104cf610556565b610565565b565b60006105047fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b61058b565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000341461053a57600080fd5b565b6105468282610595565b5050565b61055381610608565b50565b6000610560610654565b905090565b3660008037600080366000845af43d6000803e8060008114610586573d6000f35b3d6000fd5b6000819050919050565b61059e826106ab565b8173ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a26000815111156105fb576105f58282610778565b50610604565b6106036107fc565b5b5050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6106316104d6565b82604051610640929190610d7b565b60405180910390a161065181610839565b50565b60006106827f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61058b565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008173ffffffffffffffffffffffffffffffffffffffff163b0361070757806040517f4c9c8ce30000000000000000000000000000000000000000000000000000000081526004016106fe9190610d60565b60405180910390fd5b806107347f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61058b565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606000808473ffffffffffffffffffffffffffffffffffffffff16846040516107a29190610e15565b600060405180830381855af49150503d80600081146107dd576040519150601f19603f3d011682016040523d82523d6000602084013e6107e2565b606091505b50915091506107f285838361091c565b9250505092915050565b6000341115610837576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036108ab5760006040517f62e77ba20000000000000000000000000000000000000000000000000000000081526004016108a29190610d60565b60405180910390fd5b806108d87fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b61058b565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6060826109315761092c826109ab565b6109a3565b60008251148015610959575060008473ffffffffffffffffffffffffffffffffffffffff163b145b1561099b57836040517f9996b3150000000000000000000000000000000000000000000000000000000081526004016109929190610d60565b60405180910390fd5b8190506109a4565b5b9392505050565b6000815111156109be5780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600082825260208201905092915050565b7f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60008201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f7879207461726760208201527f6574000000000000000000000000000000000000000000000000000000000000604082015250565b6000610a836042836109f0565b9150610a8e82610a01565b606082019050919050565b60006020820190508181036000830152610ab281610a76565b9050919050565b6000604051905090565b600080fd5b600080fd5b60008085851115610ae157610ae0610ac3565b5b83861115610af257610af1610ac8565b5b6001850283019150848603905094509492505050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b3d82610b12565b9050919050565b610b4d81610b32565b8114610b5857600080fd5b50565b600081359050610b6a81610b44565b92915050565b600060208284031215610b8657610b85610b08565b5b6000610b9484828501610b5b565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610bf082610ba7565b810181811067ffffffffffffffff82111715610c0f57610c0e610bb8565b5b80604052505050565b6000610c22610ab9565b9050610c2e8282610be7565b919050565b600067ffffffffffffffff821115610c4e57610c4d610bb8565b5b610c5782610ba7565b9050602081019050919050565b82818337600083830152505050565b6000610c86610c8184610c33565b610c18565b905082815260208101848484011115610ca257610ca1610ba2565b5b610cad848285610c64565b509392505050565b600082601f830112610cca57610cc9610b9d565b5b8135610cda848260208601610c73565b91505092915050565b60008060408385031215610cfa57610cf9610b08565b5b6000610d0885828601610b5b565b925050602083013567ffffffffffffffff811115610d2957610d28610b0d565b5b610d3585828601610cb5565b9150509250929050565b6000610d4a82610b12565b9050919050565b610d5a81610d3f565b82525050565b6000602082019050610d756000830184610d51565b92915050565b6000604082019050610d906000830185610d51565b610d9d6020830184610d51565b9392505050565b600081519050919050565b600081905092915050565b60005b83811015610dd8578082015181840152602081019050610dbd565b60008484015250505050565b6000610def82610da4565b610df98185610daf565b9350610e09818560208601610dba565b80840191505092915050565b6000610e218284610de4565b91508190509291505056fea2646970667358221220d55e5d6a44e9ea28bbeabb47dcd67d5ada44a6bbf7d2a2843305f6ee6cbe19c764736f6c63430008140033";

type TransparentUpgradeableProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TransparentUpgradeableProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TransparentUpgradeableProxy__factory extends ContractFactory {
  constructor(...args: TransparentUpgradeableProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _logic: AddressLike,
    admin_: AddressLike,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_logic, admin_, _data, overrides || {});
  }
  override deploy(
    _logic: AddressLike,
    admin_: AddressLike,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(_logic, admin_, _data, overrides || {}) as Promise<
      TransparentUpgradeableProxy & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): TransparentUpgradeableProxy__factory {
    return super.connect(runner) as TransparentUpgradeableProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransparentUpgradeableProxyInterface {
    return new Interface(_abi) as TransparentUpgradeableProxyInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TransparentUpgradeableProxy {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as TransparentUpgradeableProxy;
  }
}