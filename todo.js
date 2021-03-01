document.addEventListener('DOMContentLoaded', () => {
    const task = document.querySelector('form').onsubmit = () => {
        const task = document.querySelector("#task").value;

        const li = document.createElement('li');

        li.innerHTML = task;

        document.querySelector('#tasks').append(li);

        return false;
    }
});