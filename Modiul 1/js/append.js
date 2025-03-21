//     child add
// Where to add---->
const placesList = document.getElementById("places-list");
// What to be added---->
const li = document.createElement('li');
li.innerText ='Bandorbon';
// Add the child---->
placesList.appendChild(li);




//  Where to add---->
const mainContent = document.getElementById("main-content");
// what to be added
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My food list";
section.appendChild(h1);
const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.innerText = 'Biriyani';
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = 'polau';
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = 'Khicuri';
ul.appendChild(li3);

const li4 = document.createElement("li");
li4.innerText = 'Gorur Mangsho';
ul.appendChild(li4);


section.appendChild(ul);
mainContent.appendChild(section);




//     set innerHtml directtlly---->
const sectionDress = document.createElement("section");
 sectionDress.innerHTML = `
    <h1>Favourate dress of Maharob.</h1>
            <ul>
                <li>Lungi</li>
                <li>Jins pant</li>
                <li>Shirt</li>
                <li>T-Shirt</li>
                <li>Sendo Genzi</li>
                <li>Under Ware</li>
            </ul>
 `
   mainContent.appendChild(sectionDress);