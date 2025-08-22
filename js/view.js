// slider script 
let arrowBtn = document.querySelector('.arrowBtn');
let rightArrow = document.querySelector('.rightArrow');
let silderBlogs = document.querySelector('.silderBlogs');

silderBlogs.addEventListener('wheel', (e) => {
    e.preventDefault();
    silderBlogs.style.scrollBehavior = "smooth";
    silderBlogs.scrollLeft += e.deltaY;
})
arrowBtn.addEventListener('click', () => {
    silderBlogs.style.scrollBehavior = "smooth";
    silderBlogs.scrollLeft += 615;
})
rightArrow.addEventListener('click', () => {
    silderBlogs.style.scrollBehavior = "smooth";
    silderBlogs.scrollLeft -= 615;
})