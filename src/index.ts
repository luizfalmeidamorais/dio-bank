import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { PremiumAccount } from "./class/PremiumAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(
	"John Doe",
	123456,
	1234567890,
);
peopleAccount.deposit(100);
peopleAccount.withdraw(50);
peopleAccount.getBalance();

const companyAccount: CompanyAccount = new CompanyAccount(
	"Doe Company",
	654321,
);
companyAccount.deposit(100);
companyAccount.withdraw(50);
companyAccount.getBalance();
companyAccount.getLoan(1000);
companyAccount.getBalance()

const premiumAccount: PremiumAccount = new PremiumAccount("John Doe", 345464);
premiumAccount.deposit(100);
premiumAccount.withdraw(50);
premiumAccount.getBalance();
