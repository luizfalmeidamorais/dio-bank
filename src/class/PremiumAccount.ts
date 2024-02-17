import { DioAccount } from "./DioAccount";

export class PremiumAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
        this.setPrefix("[PremiumAccount]");
    }

    deposit = (value: number): void => {
        if (this.validateStatus()) {
            this.balance += value + 10;
            console.log(`${this.getPrefix()} Você depositou R$ ${value},00, mas como você é cliente Premium, ganhou mais R$ 10,00`);
        }
    }
}