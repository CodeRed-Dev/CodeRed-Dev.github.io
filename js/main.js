let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("open-menu")
    menu.classList.toggle("move");
};
window.onscroll=()=>{
    navbar.classList.remove("open-menu")
    menu.classList.remove("move");
}

//Reviews section
var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

//email js
function validate(){
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener("click",(e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" ||msg.value == ""){
            emptyerror();
        }
        else{
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}
validate();

function sendmail(name,email,msg){
    emailjs.send("service_dr7ib0r","template_tbc2sjk",{
        to_name: email,
        from_name: name,
        message: msg,
        });
}

function emptyerror() {
    swal({
        title: "ERROR",
        text: "Fields can't be empty!",
        icon: "error",
      });
}

function success() {
    swal({
        title: "Email sent succesfully",
        text: "we try to reply in 24 hours",
        icon: "Success",
      });
}

// header bg

let header = documentListner('scroll',() => {
    header.classList.toggle("header-active",window.scrollY > 0);
});

