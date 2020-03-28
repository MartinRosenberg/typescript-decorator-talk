class Greeter {
    greet() {
        return 'Hello';
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
