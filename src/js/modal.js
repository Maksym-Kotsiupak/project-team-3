(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      openSecModalBtn: document.querySelector("[data-modal-open-sec]"),
      openThirdModalBtn: document.querySelector("[data-modal-open-third]"),
      openFourModalBtn: document.querySelector("[data-modal-open-four]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openSecModalBtn.addEventListener("click", toggleModal);
  refs.openThirdModalBtn.addEventListener("click", toggleModal);
  refs.openFourModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      console.log('first')
    }
  })();