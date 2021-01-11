
const mid = document.getElementsByClassName('mid');
const para = document.getElementsByClassName('move-para');
const mouse_cursor = document.querySelector('.mouse-cursor')


window.addEventListener('scroll', () => {
    let arr = [0, 700];
    for (let i = 0; i < 2; i++) {
        let text = para[i].innerText.toUpperCase();
        para[i].innerText = text;
        mid[i].style.transform = `translateY(${-scrollY + arr[i]}px)`;
        para[i].style.transform = `translateX(${scrollY - 400 - i * 600}px) `;
        para[i].style.top = `${scrollY - 120 - i * 680}px `;
    }

    mouse_cursor.style.display = 'none';

});

// window.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('.menu');
//     const nav_links = document.querySelector('.nav-links');
//     menu.addEventListener('click', () => {
//         nav_links.style.display = 'grid';
//         nav_links.style.animation = 'AnimNav 0.7s ease';
//         menu.style.position = 'absolute';
//         menu.style.right = '2rem';
//         menu.style.top = '1.5rem';

//         nav_links.addEventListener('animationend', () => {
//             const links = document.querySelectorAll('.nav-links li')
//             console.log(links);
//             let i = 0.5;
//             links.forEach((link) =>{
//                 link.style.animation = `AnimLink ${i}s forwards`;
//                 i += 0.4;
//             });
//         });
//     });
// });


//hover animation

// new hoverEffect({
//     parent: document.querySelector('.projects-image'),
//     intensity: 0.2,
//     image1: './news.jpg',
//     image2: './pro-2.jpg',
//     displacementImage: './anim/heightMap.png'
    
// })
// console.log('klk');
