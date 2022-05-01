
//主要問題：可執行但變成stylesheet無法套用

customElements.define("header-test3", class headerTemplate extends HTMLElement{
    constructor(){
        super();
        this.setAttribute("class","header");
        const shadowRoot = this.attachShadow({ mode: 'open' });

//創造Routes部分-->內含 beforeclicked(indludes logo,smallbar)+navbar
    
        let route = document.createElement("div");
        route.setAttribute("class","routes");
        shadowRoot.appendChild(route);
        let beforeClicked = document.createElement("div");
        beforeClicked.setAttribute("class", "before-clicked");
        route.appendChild(beforeClicked);
        let logo = document.createElement("div");
        logo.setAttribute("class","logo");
        logo.innerHTML = `<img src="images/logo.png" alt="logo">`
        beforeClicked.appendChild(logo);
        let smallbar = document.createElement("form");
        smallbar.setAttribute("class", "small-search-bar");
        smallbar.innerHTML=`
        <input class="small-search-bar-input" type="text">
        <button class="small-search-bar-button" type="submit">
            <img class="small-search-bar-img" src="images/search.png">
        </button>`
        beforeClicked.appendChild(smallbar);

        let navbar = document.createElement("div");
        navbar.setAttribute("class", "navbar")
        navbar.innerHTML = `
        <span class="nav-text" id="colored-text">
            女裝
            </span>
            <span class="nav-text"  id="nav-text-middle-bar">
             |
            </span>
            <span class="nav-text">
            男裝
            </span>
            <span class="nav-text"  id="nav-text-middle-bar">
             |
            </span>
            <span class="nav-text">
            配件
            </span> `
        route.appendChild(navbar);
    
    //創造 action部分=searchbar+icon-cart+icon-member

        let actions = document.createElement("div");
        actions.setAttribute("class","actions");
        shadowRoot.appendChild(actions);

        let searchBar = document.createElement("form");
        searchBar.setAttribute("class","search-bar");
        searchBar.innerHTML=`<input type="text" class="data-search">
        <button type="submit"><img src="images/search.png"></button>`;
        actions.appendChild(searchBar);

        let iconCart=document.createElement("div");
        iconCart.setAttribute("class","icon-cart");
        iconCart.innerHTML=
        `<a href="#"><img src="images/cart.png" class="shopping-cart"></a>`;
        actions.appendChild(iconCart);

        let iconMember=document.createElement("div");
        iconMember.setAttribute("class","icon-member");
        iconMember.innerHTML=`<a href="#"><img src="images/member.png" class="member"></a>`;
        actions.appendChild(iconMember);

        <style> @import "style.css" </style>
};
});




//custom element客製化tag












// const headerTemplate = document.createElement('template');
// headerTemplate.innerHTML = `

// <style src="style.css"></style>
// <header class="header">
//     <div class="routes">
//         <div class="before-clicked">
//             <div class="logo" onclick="directToHome()">
//                 <img src="images/logo.png" alt="logo">
//             </div> 
//             <form class="small-search-bar">
//                 <input class="small-search-bar-input" type="text">
//                 <button class="small-search-bar-button" type="submit">
//                     <img class="small-search-bar-img" src="images/search.png">
//                 </button>
//             </form>
//         </div>
//         <div class="navbar">
//             <span class="nav-text" id="colored-text">
//             女裝
//             </span>
//             <span class="nav-text"  id="nav-text-middle-bar">
//              |
//             </span>
//             <span class="nav-text">
//             男裝
//             </span>
//             <span class="nav-text"  id="nav-text-middle-bar">
//              |
//             </span>
//             <span class="nav-text">
//             配件
//             </span> 
//         </div>
//     </div>
//     <div class="actions">

//         <form action="" class="search-bar">
//             <input type="text" class="data-search">
//             <button type="submit"><img src="images/search.png"></button>
//         </form>

//         <div class="icon-cart">
//             <a href="#"><img src="images/cart.png" class="shopping-cart"></a>
//         </div>

//         <div class="icon-member">
//             <a href="#"><img src="images/member.png" class="member"></a>
//         </div>
//     </div>

// </header>
// `

// class Header extends HTMLElement {
//     constructor() {
//         super();
//     }

//     connectedCallback() {
//         const shadowRoot = this.attachShadow({ mode: 'open' });
//         shadowRoot.appendChild(headerTemplate.content);
//     }
// }

// customElements.define('header-component', Header);