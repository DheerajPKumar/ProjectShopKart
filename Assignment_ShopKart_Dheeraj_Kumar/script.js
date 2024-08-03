function changeBg(event) {
    const paginationButtons = document.querySelectorAll('.topDeals2__navigation-link');
    paginationButtons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');
}
