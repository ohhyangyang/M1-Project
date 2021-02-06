"use strict"

const questionCardsDiv = document.querySelectorAll('.question-card-container')

questionCardsDiv[0].addEventListener('mouseover',()=>{
    questionCardsDiv[0].style.backgroundColor = "indianred";
    questionCardsDiv[1].style.backgroundColor = "rgb(179, 197, 209)";
    questionCardsDiv[2].style.backgroundColor = "rgb(179, 197, 209)";
    questionCardsDiv[3].style.backgroundColor = "rgb(179, 197, 209)";

    questionCardsDiv[0].innerHTML= 
    `<p style="transform:rotatex(180deg);">CosLib is created as a cosmetic library, for those people who like beauty products. </p>`;
    questionCardsDiv[1].innerHTML= `<p>How many brands do CosLib have?</p>`;
    questionCardsDiv[2].innerHTML= `<p>I’m a blogger, how can I get in touch with you?</p>`;
    questionCardsDiv[3].innerHTML= `<p>Who's the web designer? Your web looks so cool!</p>`;


    questionCardsDiv[0].classList.add('flip-horizontal-bottom');
    questionCardsDiv[1].classList.remove('flip-horizontal-bottom');
    questionCardsDiv[2].classList.remove('flip-horizontal-bottom');
    questionCardsDiv[3].classList.remove('flip-horizontal-bottom');
})

// questionCardsDiv[0].addEventListener('mouseout',()=>{
//     questionCardsDiv[0].innerHTML= 
//     `<p style="transform:rotatex(180deg); ">aaaaa </p>`;
// })

questionCardsDiv[1].addEventListener('mouseover',()=>{
    questionCardsDiv[1].style.backgroundColor = "indianred";
    questionCardsDiv[0].style.backgroundColor = "rgb(179, 197, 209)";
    questionCardsDiv[2].style.backgroundColor = "rgb(179, 197, 209)";
    questionCardsDiv[3].style.backgroundColor = "rgb(179, 197, 209)";

    questionCardsDiv[1].innerHTML= 
    `<p style="transform:rotatex(180deg); ">More than 60, but we didn't post all of them. We will, when we find a better API than this.</p>`;
    questionCardsDiv[0].innerHTML= `<p>What is CosLib for?</p>`;
    questionCardsDiv[2].innerHTML= `<p>I’m a blogger, how can I get in touch with you?</p>`;
    questionCardsDiv[3].innerHTML= `<p>Who's the web designer? Your web looks so cool!</p>`;


    questionCardsDiv[1].classList.add('flip-horizontal-bottom');
    questionCardsDiv[0].classList.remove('flip-horizontal-bottom');
    questionCardsDiv[2].classList.remove('flip-horizontal-bottom');
    questionCardsDiv[3].classList.remove('flip-horizontal-bottom');
})

questionCardsDiv[2].addEventListener('mouseover',()=>{
    questionCardsDiv[2].style.backgroundColor = "indianred";
    questionCardsDiv[0].style.backgroundColor = "rgb(179, 197, 209)";
    questionCardsDiv[1].style.backgroundColor = "rgb(179, 197, 209)";
    questionCardsDiv[3].style.backgroundColor = "rgb(179, 197, 209)";

    questionCardsDiv[2].innerHTML= 
    `<p style="transform:rotatex(180deg); ">You can send us an email at <a href="mailto:hello@coslib.com">hello@coslib.com</a>, maybe we will contact with you.</p>`;
    questionCardsDiv[0].innerHTML= `<p>What is CosLib for?</p>`;
    questionCardsDiv[1].innerHTML= `<p>How many brands do CosLib have?</p>`;
    questionCardsDiv[3].innerHTML= `<p>Who's the web designer? Your web looks so cool!</p>`;


    questionCardsDiv[2].classList.add('flip-horizontal-bottom');
    questionCardsDiv[0].classList.remove('flip-horizontal-bottom');
    questionCardsDiv[1].classList.remove('flip-horizontal-bottom');
    questionCardsDiv[3].classList.remove('flip-horizontal-bottom');

})

questionCardsDiv[3].addEventListener('mouseover',()=>{
    questionCardsDiv[3].style.backgroundColor = "indianred";
    questionCardsDiv[0].style.backgroundColor = "rgb(179, 197, 209)";
    questionCardsDiv[1].style.backgroundColor = "rgb(179, 197, 209)";
    questionCardsDiv[2].style.backgroundColor = "rgb(179, 197, 209)";

    questionCardsDiv[3].innerHTML= 
    `<p style="transform:rotatex(180deg); ">We're glad you like it, the designer and also programmer is called Yang Ge, write her an email for project or job interests at <a href="mailto:holayangge@gmail.com">holayangge@gmail.com</a>.</p>`;
    questionCardsDiv[0].innerHTML= `<p>What is CosLib for?</p>`;
    questionCardsDiv[1].innerHTML= `<p>How many brands do CosLib have?</p>`;
    questionCardsDiv[2].innerHTML= `<p>I’m a blogger, how can I get in touch with you?</p>`;


    questionCardsDiv[3].classList.add('flip-horizontal-bottom');
    questionCardsDiv[0].classList.remove('flip-horizontal-bottom');
    questionCardsDiv[1].classList.remove('flip-horizontal-bottom');
    questionCardsDiv[2].classList.remove('flip-horizontal-bottom');

})
   
