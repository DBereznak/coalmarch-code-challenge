const menu = document.getElementById("menu");
const cardTable = document.getElementById("cards")

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", displayMobileMenu);

const menuItems = [
    {name: 'About', link: '#'},
    {name: 'Services', link: '#'},
    {name: 'Careers', link: '#'},
    {name: 'Blog', link: '#'},
    {name: 'Contact', link: '#'}
];

const cards = [
    {title: "Justo Placerat", body: "Eu non-col commodo accumsan anti mi. Commodo consectetur sed mi adipiscing accumsan ac nunc tincidunt lobortis"},
    {title: "Justo Placerat", body: "Eu non-col commodo accumsan anti mi. Commodo consectetur sed mi adipiscing accumsan ac nunc tincidunt lobortis"},
    {title: "Justo Placerat", body: "Eu non-col commodo accumsan anti mi. Commodo consectetur sed mi adipiscing accumsan ac nunc tincidunt lobortis"},
]

buildMenu(menuItems);
buildCards(cards)

function buildCards(cards){
 for(let card of cards){
     let cardItem = document.createElement("div");
     cardItem.classList.add("card");
     let face = `
     <div class="circle">
   </div>
   <h3>${card.title}</h3>
   <p>
    ${card.body}
   </p>`;
   cardItem.innerHTML = face;
   cardTable.appendChild(cardItem);
 }
}

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