window.onload = function() { 


 let buttons = document.getElementsByClassName("card-item-btn");
 
 for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', openWindow)
};

 document.getElementById("close_modal").addEventListener("click", closeWindow );

  
document.getElementById("modal_window").addEventListener("click", function(event){

if(event.target.id =='modal_window')
document.getElementById("modal_window").classList.remove("modal_show");
        });


document.getElementById("btn-casual").addEventListener("click", function () {
  document.getElementById("tab-btn-1").checked = true;
  document.getElementById("tab-btn-2").checked = false;
} );

document.getElementById("btn-erotic").addEventListener("click", function () {
  document.getElementById("tab-btn-2").checked = true;
  document.getElementById("tab-btn-1").checked = false;
} );
  
      };

function openWindow(){
  document.getElementById("modal_window").classList.add("modal_show");
};

function closeWindow(){
  document.getElementById("modal_window").classList.remove("modal_show");
  };







    