"use strict"

const questionCardsDiv = document.querySelectorAll('.question-card-container')
const questions = {
    "aaaaa":"bbbbb",
    "ccccc":"ddddd",
    "eeeee":"fffff"
}
questionCardsDiv[0].addEventListener('click',()=>{
    questionCardsDiv[0].innerHTML= 
    `<p style="transform:rotatex(180deg); color:hotpink;">CosLib is created as a cosmetic library, for all the people who’s interested in beauty products. </p>`;
    questionCardsDiv[1].innerHTML= `<p>How do I know what product is right for me?</p>`;
    questionCardsDiv[2].innerHTML= `<p>I’m a blogger, how can I get in touch with you?</p>`;
    questionCardsDiv[0].classList.add('flip-horizontal-bottom');
    questionCardsDiv[1].classList.remove('flip-horizontal-bottom');
    questionCardsDiv[2].classList.remove('flip-horizontal-bottom');
})

questionCardsDiv[1].addEventListener('click',()=>{
    questionCardsDiv[1].innerHTML= 
    `<p style="transform:rotatex(180deg); color:hotpink;"">You can find all the products info, as you enter every brand secition, and also 9am–5pm we’ll help you out.</p>`;
    questionCardsDiv[0].innerHTML= `<p>What is CosLib?</p>`;
    questionCardsDiv[2].innerHTML= `<p>I’m a blogger, how can I get in touch with you?</p>`;
    questionCardsDiv[1].classList.add('flip-horizontal-bottom');
    questionCardsDiv[0].classList.remove('flip-horizontal-bottom');
    questionCardsDiv[2].classList.remove('flip-horizontal-bottom');
})

questionCardsDiv[2].addEventListener('click',()=>{
    questionCardsDiv[2].innerHTML= 
    `<p style="transform:rotatex(180deg); color:hotpink;"">You can send us an email at <a href="mailto:hello@coslib.com">hello@coslib.com</a>, we will get in
    touch with you as soon as possble.</p>`;
    questionCardsDiv[0].innerHTML= `<p>What is CosLib?</p>`;
    questionCardsDiv[1].innerHTML= `<p>How do I know what product is right for me?</p>`;
    questionCardsDiv[2].classList.add('flip-horizontal-bottom');
    //questionCardsDiv[2].style.transform="rotateY(180deg)"

    questionCardsDiv[0].classList.remove('flip-horizontal-bottom');
    questionCardsDiv[1].classList.remove('flip-horizontal-bottom');

    //transform: rotateY(360deg);
})
   
