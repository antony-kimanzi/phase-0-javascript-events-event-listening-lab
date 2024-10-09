function addingEventListener() {
    const input = document.getElementById('button');

    input.addEventListener("click", ()=> {
        alert("Button clicked!");
    });
}

addingEventListener();
