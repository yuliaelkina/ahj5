document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (e) => {
    const button = e.target.closest('.show-popover');
    if (!button) {
      return;
    }
    const number = button.getAttribute('data-number');
    const popover = document.querySelector(`.popover[data-number="${number}"]`);
    popover.classList.toggle('popover--display');
    popover.style.top = `${button.offsetTop - popover.offsetHeight}px`;
    popover.style.left = `${button.offsetLeft + button.offsetWidth / 2 - popover.offsetWidth / 2}px`;
  });
})
