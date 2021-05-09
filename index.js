const menu = document.getElementById("menu");

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", displayMobileMenu);

const menuItems = [
    {name: 'About', link: '#'},
    {name: 'Services', link: '#'},
    {name: 'Careers', link: '#'},
    {name: 'Blog', link: '#'},
    {name: 'Contact', link: '#'}
];

buildMenu(menuItems);

function buildMenu(items){
    for(let item of items){
        let linkItem = document.createElement("li");
        linkItem.addEventListener("click", toggleActive)
        let link = `<a href="${item.link}">${item.name}</a>`;
        linkItem.innerHTML = link;
        menu.appendChild(linkItem);
    }
}

function toggleActive(){
    let activeLinks = document.querySelectorAll(".active");
    activeLinks.forEach(item => {
        item.classList.remove('active');
    })

    this.classList.add("active");
}

function displayMobileMenu(){
    let menuDisplay = document.getElementById("menu");
    if(menuDisplay.classList.contains("mobileMenu")){
        menuDisplay.classList.remove("mobileMenu");
    } else {
        menuDisplay.classList.add("mobileMenu");
    };

};