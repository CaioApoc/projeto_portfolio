


var button = document.querySelector(".show-more");

button.addEventListener("click", function(){
    var divShow = document.querySelector(".row-2");
    

    if(divShow.style.display === "none"){
        divShow.style.display = "flex"
        button.value = "Mostrar -"
    }else{
        divShow.style.display = "none"
        button.value = "Mostrar +"

    }
})


//PARA CHAMAR UMA 3 LINHA DE PROJETOS CASO PRECISE
// button.addEventListener("click", function(){
//     var divShow = document.querySelector(".row-3");
    

//     if(divShow.style.display === "none"){
//         divShow.style.display = "flex"
//         button.value = "Mostrar -"
//     }else{
//         divShow.style.display = "none"
//         button.value = "Mostrar +"

//     }
// })


