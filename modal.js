const modalbackdrop = document.querySelector(".modalBackdrop");
const modal = document.querySelector(".modal");
const modalbtn = document.querySelector(".modalopener");
const modalclosebtn = document.querySelector(".modalCloseButton");
const modalinbtn = document.querySelector(".modalApplyButton");
const modalContent = document.querySelector(".modalContent");
const message = document.querySelector(".message");
let timer;
const form = document.querySelector("form");
const message1 = document.querySelector("#firstinput");
const message2 = document.querySelector("#secondinput");

modalbtn.addEventListener("click", () => {
  modalbackdrop.classList.add("modalBackdropActive");
  modal.classList.add("modalActive");
});

function closemodal() {
  if (timer) {
    clearTimeout(timer);
  }
  modal.classList.remove("modalActive");
  modalbackdrop.classList.remove("modalBackdropActive");
}
function clearinputs() {
  message1.value = "";
  message2.value = "";
}

modal.addEventListener("click", (e) => {
  e.stopPropagation();
});

modalinbtn.addEventListener("click", () => {
  modalContent.classList.add("hideContent");
  timer = setTimeout(closemodal, 4000);
});

modalinbtn.addEventListener("mouseover", () => {
  modalinbtn.classList.add("modalApplyButtoncolor");
});
modalinbtn.addEventListener("mouseout", () => {
  modalinbtn.classList.remove("modalApplyButtoncolor");
});

modalbtn.addEventListener("click", () => {
  modalContent.classList.remove("hideContent");
  message.innerHTML = ``;
});

modalbackdrop.addEventListener("click", () => {
  closemodal();
  clearinputs();
});

modalclosebtn.addEventListener("mouseover", () => {
  modalclosebtn.classList.add("rotate");
});
modalclosebtn.addEventListener("mouseout", () => {
  modalclosebtn.classList.remove("rotate");
});
modalclosebtn.addEventListener("click", () => {
  closemodal();
  clearinputs();
});

const bot = {
  TOKEN: "6088194160:AAGkvrWR3GgIwa9PkdNGzFRWFUc6wGX3nHk",
  chatId: "-937537268",
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (message1.value || message2.value) {
    const telegrammessage = `${message1.value} ${message2.value}`;
    const TELEGRAM_API = `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatId}&text=${telegrammessage}`;
    fetch(TELEGRAM_API)
      .then((response) => {
        if (response.ok) {
          message.innerHTML = `
        <div class='message'>
             <h2>Thank You!</h2>
              <p>Our operator will call you back;)</p>
        </div>`;
          clearinputs();
        }
      })
      .catch((error) => {
        message.innerHTML = `
    <div class='message'>
         <h2>Something wrong with your connection!</h2>
          <p>Please check your internet connection:(</p>
    </div>`;
        clearinputs();
      });
  } else {
    message.innerHTML = `
    <div class='message'>
         <h2>You didn't enter a word!</h2>
          <p>Please try again with words.</p>
    </div>`;
    clearinputs();
  }
});
