// window.addEventListener('scroll', () => {
//     document.querySelector('.home img').style.bottom = `${scrollY}px`;
// });
let mid = document.getElementsByClassName('mid');
window.addEventListener('scroll', () => {

    // about_mid.forEach(elem => {
    //     elem.style.transform = `translateY(${-scrollY}px)`;
    // });
    let arr = [0,680];
    for (let i = 0; i < 2; i++) {
        mid[i].style.transform = `translateY(${-scrollY+arr[i]}px)`;
    }
    // document.querySelector('.projects-right').style.right = `${scrollY-1100}px`;
    // document.querySelector('.projects-right').style.position = `absolute`;

    // document.querySelector('.projects-left').style.left = `${scrollY-1100}px`;
    // document.querySelector('.projects-left').style.position = `absolute`;

});


// <===mouse cursor===>

if (window.innerWidth > 1000) {

    window.addEventListener('mousemove', cursor);
    let mouse_cursor = document.querySelector('.mouse-cursor')
    function cursor(e) {
        mouse_cursor.style.top = e.pageY + 'px';
        mouse_cursor.style.left = e.pageX + 'px';
    }
}