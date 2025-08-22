let educationBtn = document.getElementById('Education');
let informatoinBtn = document.getElementById('Information');
let inspirationBtn = document.getElementById('Inspiration');
let All = document.getElementById('All');

let BlogContainer = document.getElementById('BlogContainer');


function filterFunction(topic){
    const post = BlogContainer.querySelectorAll('.singleBlogPost');

    post.forEach(blog => {
        if (blog.dataset.topic === topic || topic === "") {
            blog.style.display = "block";
            
        } else {
            blog.style.display = "none";
        }
    })

}


// Even is every button click
educationBtn.addEventListener('click', () => {
    filterFunction('Educative');
});

informatoinBtn.addEventListener('click', () => {
    filterFunction('Informative');
});

inspirationBtn.addEventListener('click', () => {
    filterFunction('Inspirative');
});

All.addEventListener('click', () => {
    filterFunction("");
})

filterFunction("");


