var nameInput=document.getElementById("name");
var nameInput1=document.getElementById("surname");
var kullanıcıadı=document.getElementById("username");
var button = document.querySelectorAll("button")[0];
var passinput = document.getElementById("password");
var passinput2 = document.getElementById("password2");
var kayıt_başarılı= document.getElementById("başarı");
var kayıt_başarısız = document.getElementById("hata");


nameInput1.addEventListener("keyup", function () {
    kullanıcıadı.value = "@" + nameInput.value + nameInput1.value;

});

button.addEventListener("click", function() {
      
        if(passinput.value === passinput2.value) {
         button.innerText = "Gönderildi"
        button.classList.add("grey");
        kayıt_başarılı.classList.remove("d-none");
        
        }

    else{

        if(passinput.value =="" || passinput2.value =="")
            kayıt_başarısız.classList.remove("d-none");
            
        else if(passinput.value.length !== passinput2.value.length)
            kayıt_başarısız.classList.remove("d-none");
            
        else if(passinput.value !== passinput2.value)
            kayıt_başarısız.classList.remove("d-none");
         
           
    }

});