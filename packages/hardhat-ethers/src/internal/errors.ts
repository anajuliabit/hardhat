import { NomicLabsHardhatPluginError } from "hardhat/plugins";

export class HardhatEthersError extends NomicLabsHardhatPluginError {
  constructor(message: string, parent?: Error) {
    super("@nomicfoundation/hardhat-ethers", message, parent);
  }
}

export class NotImplementedError extends HardhatEthersError {
  constructor(method: string) {
    super(`Method '${method}' is not implemented`);
  }
}

export class NonStringEventError extends HardhatEthersError {
  constructor(method: string, event: any) {
    super(`Method '${method}' only supports string events, got '${event}'`);
  }
}

export class AccountIndexOutOfRange extends HardhatEthersError {
  constructor(accountIndex: number, accountsLength: number) {
    super(
      `Tried to get account with index ${accountIndex} but there are ${accountsLength} accounts`
    );
  }
}

export class BroadcastedTxDifferentHash extends HardhatEthersError {
  constructor(txHash: string, broadcastedTxHash: string) {
    super(
      `Expected broadcasted transaction to have hash '${txHash}', but got '${broadcastedTxHash}'`
    );
  }
}
