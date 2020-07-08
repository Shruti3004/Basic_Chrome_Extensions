const input = document.getElementById('name') ;
input.addEventListener('keyup', (e) => {
    document.getElementById('greet').textContent = `Hello ${input.value}`;
});
