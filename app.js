
const mid = document.getElementsByClassName('mid');
const para = document.getElementsByClassName('move-para');
const mouse_cursor = document.querySelector('.mouse-cursor')


window.addEventListener('scroll', () => {
    let arr = [0, 680];
    for (let i = 0; i < 2; i++) {
        let text = para[i].innerText.toUpperCase();
        para[i].innerText = text;
        mid[i].style.transform = `translateY(${-scrollY + arr[i]}px)`;
        para[i].style.transform = `translateX(${scrollY - 400 - i * 600}px) `;
        para[i].style.top = `${scrollY - 120 - i * 680}px `;
    }

    mouse_cursor.style.display = 'none';

});

