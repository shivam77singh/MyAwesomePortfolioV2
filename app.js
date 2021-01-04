
let mid = document.getElementsByClassName('mid');
let para = document.getElementsByClassName('move-para');

window.addEventListener('scroll', () => {
    let arr = [0, 680];
    for (let i = 0; i < 2; i++) {
        let text = para[i].innerText.toUpperCase();
        para[i].innerText = text;
        mid[i].style.transform = `translateY(${-scrollY + arr[i]}px)`;
        para[i].style.transform = `translateX(${scrollY - 400 - i * 600}px) `;
        para[i].style.top = `${scrollY - 120 - i * 680}px `;
    }

    // para[1].style.color = `#C81414`;

});


// <===mouse cursor===>

// if (window.innerWidth > 1000) {

//     window.addEventListener('mousemove', cursor);
//     let mouse_cursor = document.querySelector('.mouse-cursor')
//     function cursor(e) {
//         mouse_cursor.style.top = e.pageY + 'px';
//         mouse_cursor.style.left = e.pageX + 'px';
//     }
// }
