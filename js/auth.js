const button = document.querySelector('button');
const role = localStorage.getItem('roleCode');

console.log(role,"ROLE");

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   itemsArray.push(input.value);
//   localStorage.setItem('items', JSON.stringify(itemsArray));
//   liMaker(input.value);
//   input.value = "";
// });

// data.forEach(item => {
//   liMaker(item);
// });

button.addEventListener('click', function () {
  if(localStorage.getItem('roleCode') == "SR003") {
    alert("Logged In");
  }
  else {
        alert("Plz Log In");
  }
});
