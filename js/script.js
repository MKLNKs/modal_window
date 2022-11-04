const btn = document.querySelector('.btn'),
    modal = document.querySelector('.modal'),
    escBtn = document.querySelector('.escBtn');

function activeBtn() {
    btn.addEventListener('mouseover', () => btn.innerHTML = 'перфекці онізм ❤️');
    btn.addEventListener('mouseout', () => btn.innerHTML = 'перфекціо нізм ❤️');
}

activeBtn();
closeModal();

btn.addEventListener('click', openModal);

function openModal() {
    modal.classList.remove('hide');
    modal.classList.add('modal');
}

openModal();

escBtn.addEventListener('click', closeModal);

function closeModal() {
    modal.classList.add('hide');
}

closeModal();

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
})

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('modal')) closeModal();
})