// public, private, protected
// These are access modifiers. They control where class members can be accessed.
// Modifier	Access
// public	Anywhere
// private	Only inside its class
// protected	Inside its class and subclasses
class BankAccount {

    public name: string = "Krish";

    private balance: number = 5000;

    protected bankName: string = "SBI";

    showBalance(): void {
        console.log(this.balance);
    }
}

let account = new BankAccount();

console.log(account.name); 
// Allowed

 console.log(account.balance);
// Error: private

  console.log(account.bankName);
// Error: protected

account.showBalance();