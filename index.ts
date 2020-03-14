class Greeter {
    @AddNameCustom('Josh') // "Decorating a method"
    greet() {
        return 'Hello';
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
    const greet = new Greeter();
    return greet.greet();
}

document.getElementById('create-greeter-button')!.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault();
    alert(buttonPress());
});
