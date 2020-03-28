# An Intro to Decorators

## 1. Setup

### 1a. Fork this repository

In the top right corner of [this page](https://github.com/han-yan-ds/typescript-decorator-talk), click on **Fork**.

### 1b. Clone the forked repository

```shell script
cd <whatever you want to be the parent directory>
git clone https://github.com/<your username>/typescript-decorator-talk.git
cd typescript-decorator-talk
```

### 1c. Check out all branches

This is because we will actually _use_ those branches!

```shell script
git checkout -b 0Setup origin/0Setup
git checkout -b 1DecoratorIntro origin/1DecoratorIntro
git checkout -b 2DecoratorFactory origin/2DecoratorFactory
git checkout -b 3MultipleDecoratorExercise origin/3MultipleDecoratorExercise
git checkout -b 4MultipleDecoratorSolution origin/4MultipleDecoratorSolution
git checkout -b 5MakingItInteractive origin/5MakingItInteractive
git checkout -b 6Getters origin/6Getters
```

### 1d. Install TypeScript

Install all project dependencies (which in this case is just TypeScript).

```shell script
npm install
```

### 1e. Start the application

Run the TypeScript compiler.

TypeScript compiles into regular JavaScript. But to have it "Hot-Compile" (re-compile upon saving changes), use the
`--watch` flag when you're in the project folder.

```shell script
npm run build --watch
```

**IMPORTANT**: You should see in your terminal `Found 0 errors. Watching for file changes`. The TypeScript compiler will
tell you when there's an error that needs addressing.

Now, actually start the application!!

```shell script
google-chrome index.html
```

## 2. Explore the code

There are 6 branches in this repo that we will work with. To switch branches, type this in the terminal:

```shell script
git checkout <branchName>
```

### The Branches:

<<<<<<< HEAD
-   **0Setup**
    -   Exploring our starter code and our button
-   **1DecoratorIntro**
    -   What is a Decorator? What does it do?
    -   For this talk, we're only exploring METHOD DECORATORS
-   **2DecoratorFactory**
    -   Customizing a Decorator?
-   **3MultipleDecoratorExercise**
    -   Use what you just learned!
-   **4MultipleDecoratorSolution**
    -   Multiple Decorators and Order of operations
-   **5MakingItInteractive**
    -   Interactive = Fun
-   **6Getters**
    -   Extra addendum
=======
- **5MakingItInteractive**
  - Interactive = Fun

- **6Getters
  - Extra addendum
>>>>>>> updated readme, changed var name

## 3. I Want Answers!

### What is a Decorator?

A Decorator allows you to modify a function (or a class/property/etc) _without_ diving into that function's code and
changing it.

It's used extensively in many libraries and frameworks where you may want to write a function, and use the framework to
add a bunch of cool features to it.

### What is a Method Decorator and why are we only focusing on that today?

I had a bit of trouble understanding decorators at first, and functions were the easiest for me to grasp, so we'll only
go over Method Decorators today.

TypeScript has Decorators for Classes, Methods, Class Properties, Accessors (basically also methods), and even Method
Parameters!

### What is a Decorator Factory?

At the end of the day, a Decorator is a function (defined in a particular way). Functions can be customized and returned
out of another function. For example, this is a function that customizes and spits out another function:

```typescript
function specifyNumPigs(num) {
	return function() {
		return num + 'Little Pigs'
	}
}
```

So a Decorator Factory is a function that customizes and spits out a Decorator.

### What are these weird parameters in the Method decorator?

The Method Decorator must take 3 parameters: `constructor, methodName, methodDescriptor`

-   **constructor**
    -   Every TypeScript Decorator takes in the constructor function.
    -   So you can create a new instance of the class inside a decorator!
    -   You can also get the class' _name_ by calling `constructor.name` eg: Person
-   **methodName**
    -   Similar to how you can get the class' name, you can get the method's name from this parameter!
-   **methodDescriptor**
    -   This object stores properties of the method.
    -   Of particular importance are the `methodDescriptor.value` **OR** `methodDescriptor.get()` values
        -   This is where the actual function live.
        -   Notice I said **OR**. A `methodDescriptor` **CANNOT** have both `.value` and `.get()` - there will be a
            conflict (_which one should I call when the method gets called??_)

### What is a Getter?

In Object Oriented Programming, a getter is a method that accesses a class' property. It's a way to _finely control_
access information in an object.

```typescript
class BankAccount {
	constructor(private balance) {
		this.balance = balance
	}

	get balance() {
		return balance
	}
}

const myAccount = new BankAccount(1000)
console.log(myAccount.balance) // calls balance() getter, prints 1000
myAccount.balance = 1000000000 // not allowed, balance is access controlled (private)
```

A setter is a method that writes/sets the value of a property. It can also be finely tuned to restrict certain things.

```typescript
    set balance(newBalance) {
        if (newBalance < balance * 50){
            this.balance = newBalance
        } else {
            console.log('Stop artificially inflating your wealth!')
        }
    }
```
