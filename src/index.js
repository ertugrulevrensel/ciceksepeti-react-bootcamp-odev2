// import other js file
import dog from "./dog.js";
import duck from "./duck.js";

// Set animals property

const animal = [
  { an0: new dog("Boncuk", "./assets/dog/dog1.jpg", 4, 2) },
  { an1: new dog("Çakıl", "./assets/dog/dog2.jpg", 4, 6) },
  { an2: new dog("Fındık", "./assets/dog/dog3.jpg", 4, 5) },
  { an3: new dog("Karamel", "./assets/dog/dog4.jpg", 4, 8) },
  { an4: new dog("Köpük", "./assets/dog/dog5.jpg", 4, 1) },
  { an5: new dog("Taci", "./assets/dog/dog6.jpg", 4, 60) },
  { an6: new duck("Çamur", "./assets/duck/duck1.jpg", 2, 4) },
  { an7: new duck("Çapkın", "./assets/duck/duck2.jpg", 2, 5) },
  { an8: new duck("Joker", "./assets/duck/duck3.jpg", 2, 3) },
  { an9: new duck("Şımarık", "./assets/duck/duck4.jpg", 2, 1) },
  { an10: new duck("Şimşek", "./assets/duck/duck5.jpg", 2, 6) },
  { an11: new duck("Tarçın", "./assets/duck/duck6.jpg", 2, 2) },
];
let output = "";

animal.map((item, index) => {
  const an = item[`an${index}`];
  output += `
    <div class="d-flex flex-d-col align-center gridCell">
                    <img src="${an.img}" alt="">
                    <h3>Name: ${an.name}</h3>
                    <ul class="d-flex">
                        <li>Age: ${an.age}</li>
                        <li>Number Of Legs: ${an.numberOfLegs}</li>
                    </ul>
                </div>  
    `;
});
document.getElementById("outputs").innerHTML = output;
