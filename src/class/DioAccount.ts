export abstract class DioAccount {
	private readonly name: string;
	private readonly accountNumber: number;
	balance: number = 0;
	private status: boolean = true;
	private prefix: string = "";

	constructor(name: string, accountNumber: number) {
		this.name = name;
		this.accountNumber = accountNumber;
	}

	closeAccount = (): void => {
		if (this.balance > 0) {
			console.log(
				`${this.getPrefix()} Conta com saldo positivo. Retire o valor para fechar a conta`,
			);
		} else if (this.balance < 0) {
			console.log(
				`${this.getPrefix()} Conta com saldo negativo. Regularize o valor para fechar a conta`,
			);
		} else {
			this.status = false;
			console.log(`${this.getPrefix()} Conta fechada com sucesso`);
		}
	};

	setPrefix = (prefix: string): void => {
		this.prefix = prefix;
	};

	getPrefix = (): string => {
		return this.prefix;
	};

	deposit = (value: number): void => {
		if (this.validateStatus()) {
			this.balance += value;
			console.log(`${this.getPrefix()} Você depositou R$ ${value},00`);
		}
	};

	withdraw = (value: number): void => {
		if (this.validateStatus()) {
			if (this.balance >= value) {
				this.balance -= value;
				console.log(`${this.getPrefix()} Você sacou R$ ${value},00`);
			} else {
				console.log(`${this.getPrefix()} Saldo insuficiente`);
			}
		}
	};

	getBalance = (): void => {
		console.log(`${this.getPrefix()} Seu saldo é R$ ${this.balance},00`);
	};

	public validateStatus = (): boolean => {
		if (this.status) return this.status;

		throw new Error(`${this.getPrefix()} Conta inativa. Não é possível realizar operações.`);
	};
}
