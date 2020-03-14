class Greeter {
    /**
     * IMPORTANT: Multiple decorators run in "inside out" order
     */
    @AddIAm('Han')
    @AddNameCustom('Josh') // "Decorating a method"
    greet() {
        return 'Hello';
    }
}

function AddIAm(myName) {
    /**
     * Exercise:  Add another decorator that appends "I am myName" to the end
     * Eg: "Hello Josh I am Andy"
     * Hint: This will be a decorator factory (refer to AddNameCustom below)
     */
    return function(constructor, methodName, methodDescriptor) {
        const originalMethod = methodDescriptor.value;
        const newMethodDescriptor = {
            configurable: methodDescriptor.configurable,
            enumerable: methodDescriptor.enumerable,
            value: () => `${originalMethod()} I am ${myName}`
        };
        return newMethodDescriptor;
    };
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
    const greet = new Greeter();
    return greet.greet();
}

document.getElementById('create-greeter-button')!.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault();
    alert(buttonPress());
});
