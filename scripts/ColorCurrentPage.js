//FUNCTION TO HOVER CURRENT NAVBAR ITEM
const getPageName = (raw) => {
    return raw.substring(0, raw.indexOf('.'));
}

const HoverCurrentPageNavItem = (name) => {
    if (name === 'index') {
        let navIndex = document.getElementById('nav-index');
        navIndex.style.backgroundColor = "rgb(13,124,255)";
    }
    if (name === 'description') {
        let descIndex = document.getElementById('nav-description');
        descIndex.style.backgroundColor = "rgb(13,124,255)";
    }
    if (name === 'cryptomining') {
        let galleryIndex = document.getElementById('nav-cryptomining');
        galleryIndex.style.backgroundColor = "rgb(13,124,255)";
    }
    if (name === 'links') {
        let aboutmeIndex = document.getElementById('nav-links');
        aboutmeIndex.style.backgroundColor = "rgb(13,124,255)";
    }
}

let path = window.location.pathname;
let page = path.split("/").pop();
let pageName = getPageName(page);

HoverCurrentPageNavItem(pageName);