class Person {
    name: string;
    
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, I am ${this.name}!`;
    }
}

function AddIAm(myName) {
    /**
     * Exercise:  Add another decorator that appends "I am myName" to the end
     * Eg: "Hello Josh I am Andy"
     * Hint: This will be a decorator factory (refer to branch 2DecoratorFactory)
     */
    return function(constructor, methodName, methodDescriptor) {
        const originalMethod = methodDescriptor.value;
        const newMethodDescriptor = {
            configurable: methodDescriptor.configurable,
            enumerable: methodDescriptor.enumerable,
            value: () => `${originalMethod()} I am ${myName}`
        };
        return newMethodDescriptor;
    }
}

function AddNameCustom(name) { // wrapping in a function: This is the Decorator-Maker (or Decorator-Factory)
    return function (constructor, methodName, methodDescriptor) {
        // This is the decorator itself
        const originalMethod = methodDescriptor.value;
        const newMethodDescriptor = {
            configurable: methodDescriptor.configurable,
            enumerable: methodDescriptor.enumerable,
            value: () => `${originalMethod()} ${name}` // Where you modify the method
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
