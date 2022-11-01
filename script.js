let addBtn = document.querySelector(".add-btn");
let modalcont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let flag = false;
let removeFlag = false;
let removebtn = document.querySelector(".remove-btn");

addBtn.addEventListener("click", function (e) {
  flag = !flag;
  if (flag == true) {
    modalcont.style.display = "flex";
  } else {
    modalcont.style.display = "none";
  }
});

let allPriorityColors = document.querySelectorAll(".priority-color");
//this method is the alternate for e.currentTarget
allPriorityColors.forEach(function (colorElem) {
  // saare colors ki div ek saath loop main chalenge is loop se
  colorElem.addEventListener("click", function (e) {
    // ab jis color pr bhi click hoga wo colorElem main aajayega aur bache hue sabhi divs main se active hata do,
    // and sirf clicked class par active lag jaye
    // active class outline laga rha hai, selected color pe
    allPriorityColors.forEach(function (priorityColorElem) {
      priorityColorElem.classList.remove("active");
    });
    //jo color div abhi click hui hai wo colorElem main hoga.
    colorElem.classList.add("active");

    modalPriorityColor = colorElem.classList[0];
    // 0th index isliye le rhe hain, bcz color wali class o index pr hai sabke
  });
});

let taskAreaCont = document.querySelector(".textarea-cont");

// for generating a ticket.
// on click shift in text area, the ticket should be addedd
modalcont.addEventListener("keydown", function (e) {
  let key = e.key;
  if (key == "Shift") {
    createTicket(modalPriorityColor, taskAreaCont.value);
    modalcont.style.display = "none";
    flag = false;
    taskAreaCont.value = "";
    //jo pop up hoke aaye hai text area task input ka, use band krne ke liye kiya hai none.
  }
});

// classes will be in colors not color names
let colors = ["color1", "color2", "color3", "color4"];
let modalPriorityColor = colors[colors.length - 1];

// jo color modalPriorityColor main hai, wo aayega na ticket ki, as a ticket priority color ke liye.
function createTicket(ticketColorClass, task) {
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = `<div class="ticket-color ${ticketColorClass}"></div>
  <div class="ticket-id">${"sample"}</div>
  <div class="task-area">${task}</div>`;

  // maincont class main aayenegi na saari tickets, isliye ismein append kiya hai
  mainCont.appendChild(ticketCont);
  handleRemoval(ticketCont);
}

removebtn.addEventListener("click", function (e) {
  removeFlag = !removeFlag;
  if(removeFlag==true)
  removebtn.style.color='red'
  else
  removebtn.style.color='none'

});

function handleRemoval(ticket) {
  ticket.addEventListener("click", function () {
    if (removeFlag == true) {
      ticket.remove();
      removeFlag = false;
    }
  });
}
