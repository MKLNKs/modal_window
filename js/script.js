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
    clearTimeout(openModalAfterTimeout);
}

escBtn.addEventListener('click', closeModal);

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('modal');
}

closeModal();

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
})

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('modal')) closeModal();
})

const openModalAfterTimeout = setTimeout(openModal, 5000);
