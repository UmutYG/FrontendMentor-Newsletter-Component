const containerEl = document.querySelector('.container');

const submitBtnEl = document.querySelector('button');

const successEl = document.querySelector('.success');

submitBtnEl.addEventListener('click', (event) => {
    event.preventDefault();
    containerEl.innerHTML = '';
    containerEl.style.gridTemplateColumns = "1fr";
    containerEl.style.maxWidth = "50rem";
    successEl.classList.remove('hidden');
    containerEl.append(successEl);
});