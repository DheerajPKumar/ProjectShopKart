function changeBg(event) {
    const activeBtn = document.querySelectorAll('.topDeals2__navigation-link');
    activeBtn.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');
}
