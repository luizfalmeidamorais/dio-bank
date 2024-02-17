import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
	constructor(name: string, accountNumber: number) {
		super(name, accountNumber);
		this.setPrefix("[CompanyAccount]");
	}

	getLoan = (value: number): void => {
		if (this.validateStatus()) {
			if (value <= 10000) {
				this.balance += value;
				console.log(
					`${this.getPrefix()} Empréstimo aprovado no valor de R$ ${value},00`,
				);
			} else {
				console.log(`${this.getPrefix()} Empréstimo negado. Valor muito alto.`);
			}
		}
	};
}
