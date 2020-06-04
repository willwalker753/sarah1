const txtArr = ['You mean the world to me',"You're my one and only","You are gorgeous babygirl","You always cheer me up","Don't worry there is more","I love you more than anything Sarah","I can't wait for our future together","I love your smiles and giggles","You are perfect in my eyes","I will always believe in you"];
let arrNum = 0;
let alerted = false;

setInterval(function(){
    let curTxt = txtArr[arrNum];
    $('#message').empty();
    $('#message').append(`<h1>${curTxt}</h1>`);
    arrNum++;
    if(arrNum === txtArr.length) {
        arrNum = 0;
        if(alerted === false) {
            alerted = true;
            alert('Thank you for being the best girlfriend I could of ever dreamed of Sarah');
        }
    }
},3500);


