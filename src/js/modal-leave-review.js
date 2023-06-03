(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-review]"),
    closeModalBtn: document.querySelector("[data-modal-close-review]"),
    modal: document.querySelector("[data-modal-review]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();