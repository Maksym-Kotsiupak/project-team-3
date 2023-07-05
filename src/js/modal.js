(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      openThirdModalBtn: document.querySelector("[data-modal-open-third]"),
      openFourModalBtn: document.querySelector("[data-modal-open-four]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
    if (document.documentElement.scrollWidth <= 767) {
      const addBtn= document.querySelector('[data-menu-modal-open]') //цей селектор на кнопку в бургері для відкриття модалки
      addBtn.addEventListener('click', toggleModal);
   }
    refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openThirdModalBtn.addEventListener("click", toggleModal);
  refs.openFourModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();