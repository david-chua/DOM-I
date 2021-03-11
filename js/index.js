const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br> Is<br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let services = document.querySelectorAll('a')[0];
services.textContent = siteContent["nav"]["nav-item-1"];

let product = document.querySelectorAll('a')[1];
product.textContent = siteContent["nav"]["nav-item-2"];

let vision = document.querySelectorAll('a')[2];
vision.textContent = siteContent["nav"]["nav-item-3"];

let features = document.querySelectorAll('a')[3];
features.textContent = siteContent["nav"]["nav-item-4"];

let about = document.querySelectorAll('a')[4];
about.textContent = siteContent["nav"]["nav-item-5"];

let contact = document.querySelectorAll('a')[5];
contact.textContent = siteContent["nav"]["nav-item-6"];

let cta = document.querySelector(".cta-text h1");
cta.innerHTML = siteContent["cta"]["h1"];

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent['cta']["button"];

let ctaLogo = document.getElementById("cta-img");
ctaLogo.setAttribute('src', siteContent["cta"]["img-src"]);

let textContentH4 = document.querySelectorAll('.text-content h4');

textContentH4[0].textContent = siteContent["main-content"]["features-h4"];
textContentH4[1].textContent = siteContent["main-content"]["features-h4"];
textContentH4[2].textContent = siteContent["main-content"]["features-h4"];
textContentH4[3].textContent = siteContent["main-content"]["features-h4"];
textContentH4[4].textContent = siteContent["main-content"]["features-h4"];

let textContentP = document.querySelectorAll('.text-content p');

textContentP[0].textContent = siteContent["main-content"]["features-content"];
textContentP[1].textContent = siteContent["main-content"]["features-content"];
textContentP[2].textContent = siteContent["main-content"]["features-content"];
textContentP[3].textContent = siteContent["main-content"]["features-content"];
textContentP[4].textContent = siteContent["main-content"]["features-content"];

let middleImg = document.getElementsByClassName("middle-img")[0];
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let contactInfo = document.getElementsByClassName("contact")[0];
contactInfo.getElementsByTagName("h4")[0].textContent = siteContent["contact"]["contact-h4"];
contactInfo.getElementsByTagName("p")[0].textContent = siteContent["contact"]["address"];
contactInfo.getElementsByTagName("p")[1].textContent = siteContent["contact"]["phone"];
contactInfo.getElementsByTagName("p")[2].textContent = siteContent["contact"]["email"];


let footer = document.getElementsByTagName('footer')[0].getElementsByTagName('p')[0];
footer.textContent = siteContent["footer"]["copyright"];
