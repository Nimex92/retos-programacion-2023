//Declaracion de variables
let passwordField = document.querySelector('#password-field');
let range = document.getElementById('password-range');
let rangeField = document.getElementById('lenght-field');
let generateButton = document.getElementById('generate-password');


//Set de valores
range.value=8;
rangeField.value=8;

//Cuando deslizamos el rango de caracteres ue tendra la contraseña
range.addEventListener('input', () => {
    rangeField.value = range.value;
});



//Cuando hacemos click en el botón de generar
generateButton.addEventListener('click', () => {
    let string = ''; //Recojo el texto del input por si hay algo escrito
    let maxLenght = range.value; //Recojo la largura maxima que se ha seleccionado
    //Recojo las opciones que he seleccionado para ver que añadimos al string
    let options = document.querySelectorAll('input[type="checkbox"]:checked');
    let regex = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','z'];
    
    options.forEach(option => {
        //Compruebo ue debemos añadir al regex
        switch(option.value){
            case "1":
                regex.forEach(r => {
                    regex.push(r.toUpperCase());
                });
                break;
            case "2":
                for(i=0;i<=9;i++){
                    regex.push(i);
                }
                break;
            case "3":
                let symbols = ['!','$','%','&','@'];
                symbols.forEach(symbol =>{
                    regex.push(symbol);
                })
                break;
        }
    });
    for(i=0;i <= maxLenght-1;i++){
        string += regex[getRandomInt(regex.length)];
    }
    passwordField.value=string;
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }