const form = document.querySelector('#userForm');
const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#height");
const countryInput = document.querySelector("#country");
const name1 = document.querySelector("#names");
const list1 = document.querySelector("#kheight");
const list2 = document.querySelector("#kcountry");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const fname = nameInput.value
    const kage = ageInput.value
    const kcountry = countryInput.value

    const newP = document.createElement("P");
    const newLI = document.createElement("LI");
    const newLi = document.createElement("LI")

    newP.innerText = fname;
    console.log(newP);
    name1.append(newP);

    newLI.innerText = kage;
    console.log(newLI);
    list1.append(newLI);

    newLi.innerText = kcountry;
    console.log(newLi);
    list2.append(newLi);
});


// for (var i =1; i<5; i++) 
//     { a++; i--; }

// for (var i = 0; i <= 6; i = i+2) {
//     console.log(i);
// }


// var name1="john";
// var name2="jack";
// var name3="jason"
// var x=name1[0]+name2[3]+name3[5];

