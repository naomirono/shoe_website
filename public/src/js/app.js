let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
    image_1.addEventListener('click', () =>{
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image-1').src = src;
    });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
    image_2.addEventListener('click', () =>{
        var src = image_2.getAttribute('src');
        document.querySelector('.big-image-2').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
    image_3.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-3').src = src;
    });
});

document.querySelectorAll('.featured-image-4').forEach(image_4 =>{
    image_4.addEventListener('click', () =>{
        var src = image_4.getAttribute('src');
        document.querySelector('.big-image-4').src = src;
    });
});

document.querySelectorAll('.featured-image-5').forEach(image_5 =>{
    image_5.addEventListener('click', () =>{
        var src = image_5.getAttribute('src');
        document.querySelector('.big-image-5').src = src;
    });
});

document.querySelectorAll('.featured-image-6').forEach(image_6 =>{
    image_6.addEventListener('click', () =>{
        var src = image_6.getAttribute('src');
        document.querySelector('.big-image-6').src = src;
    });
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXTl-UevtVBMZvSTOmwGfWuG5sDIWVhcA",
  authDomain: "shoe-website-neyo.firebaseapp.com",
  projectId: "shoe-website-neyo",
  storageBucket: "shoe-website-neyo.appspot.com",
  messagingSenderId: "35781957175",
  appId: "1:35781957175:web:60c3e37e69d2693cf551b2",
  measurementId: "G-TF76R9SGSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);