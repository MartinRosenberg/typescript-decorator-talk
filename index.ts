class Person {
    name: string;
    
    constructor(name) {
        this.name = name;
    }

    @AddGreet('Josh')
    greet() {
        return `Hello, I am ${this.name}!`;
    }
}

function AddGreet(name) { // wrapping in a function: This is the Decorator-Maker (or Decorator-Factory)
    return function (constructor, methodName, methodDescriptor) {
        // This is the decorator itself
        const originalMethod = methodDescriptor.value;
        const newMethodDescriptor = {
            configurable: methodDescriptor.configurable,
            enumerable: methodDescriptor.enumerable,
            value: () => `${originalMethod} Nice to meet you!` // Where you modify the method
            // value: () => methodDescriptor.value
        };
        return newMethodDescriptor;
    }
}

function buttonPress() {
    const josh = new Person('Josh');
    return josh.greet();
}

document.getElementById('create-person-button')!.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault();
    alert(buttonPress());
});
