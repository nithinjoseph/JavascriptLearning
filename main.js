const outputList = document.getElementById("outputList");
const btn = document.querySelector(".btn-primary");
let persons = [];

btn.addEventListener("click", function (e) {
  e.preventDefault();
  btnSubmission();
});
function btnSubmission() {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const emailEntry = document.getElementById("emailEntry");
  const addressEntry = document.getElementById("addressEntry");
  if (firstName.value === "") {
    firstName.classList.add("is-invalid");
  }
  if (lastName.value === "") {
    lastName.classList.add("is-invalid");
  }
  if (emailEntry.value === "") {
    emailEntry.classList.add("is-invalid");
  }
  if (addressEntry.value === "") {
    addressEntry.classList.add("is-invalid");
  } else {
    addItem();
  }

  function addItem() {
    let person = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      emailEntry: document.getElementById("emailEntry").value,
      addressEntry: document.getElementById("addressEntry").value,
    };
    persons.push(person);
    document.forms[0].reset();

    let ouputListItem = document.createElement("li");
    ouputListItem.classList.add("card", "p-2", "mt-2", "mb-2");
    for (let i = 0; i < persons.length; i++) {
      ouputListItem.innerHTML = `<div>First name: <b> ${persons[i].firstName}</b> </div><div>Last name:<b>${persons[i].lastName} </b></div><div>Email:<b>${persons[i].emailEntry} </b></div><div>Address:<b>${persons[i].addressEntry}</b></div>`;
    }
    outputList.appendChild(ouputListItem);
  }
}
