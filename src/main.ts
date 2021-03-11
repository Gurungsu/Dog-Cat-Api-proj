import axios, {AxiosResponse} from "axios";
axios.get(`https://dog.ceo/api/breeds/image/random/3`)
  .then((r:AxiosResponse) => r.data)
  .then((dogData:any) => {
    console.log(dogData); // Access the entire response
    // or
    console.log(dogData.message)})
    
    let row:any = document.querySelector(".row");
    const button = document.querySelector("button");
      button?.addEventListener("click", () => {
      row.textContent = "";
      images();
    });
    
    async function images() {
      try {
    
        const input:any =  document.querySelector("input").value;
        let table = [];
        let result = await fetch (`https://picsum.photos/v2/list?limit=${input}`);
        let res:any = await result.json();
        let tab:any = Object.values(res);
        let filtered = tab.map((item) => {
          const col = document.createElement("div");
          col.classList.add("col");
          let image = document.createElement("img");
          image.setAttribute("src", item.download_url);
         col.appendChild(image);
          row.appendChild(col);
           
        });
      } catch (err) {
        console.log(err);
      }
    }
    
    
    



interface meowPic{url: string;}
interface Meow{name: string; description: string;image: meowPic}



let theButton: HTMLButtonElement | null;
let theInput: HTMLInputElement | null;
theInput = document.querySelector("#userInput > input[type=text]");
theButton = document.querySelector("#userInput > button");

theButton?.addEventListener("click", () => {
  const inputLen = theInput?.value.length ?? 0;
  if (inputLen > 0)  
    console.log("You entered", theInput?.value);
  else
    console.log("Please enter some text");
});
let breedLimit = Number(theInput?.value)
if(isNaN(breedLimit)) breedLimit=2 ;
const catURL =  `https://api.thecatapi.com/v1/breeds`;
axios
.get(catURL, {
  params: {
    limit: breedLimit,}})
.then((r: AxiosResponse) => r.data)
.then((breeds: any[]) => {
  const meowArr = breeds.map((b: any): Meow =>{
  return{ name: b.name,description: b.description,image: b.image,}})
  return meowArr;
})

.then((meows: Meow[]) => {
  let tableBody: HTMLTableSectionElement | null;
  
  tableBody = document.querySelector("#progOutput table > tbody");
  meows.forEach((m:Meow)=>{
    const catImage: HTMLImageElement = document.createElement("img");
    catImage.setAttribute("src",m.image.url);
    let oldRows: NodeListOf<HTMLTableRowElement> | undefined;
    
    const row = document.createElement("tr");
    const Cell1 = document.createElement("td");
    const Cell2 = document.createElement("td");
    const Cell3 = document.createElement("td");

    Cell3.appendChild(catImage)
    row.appendChild(Cell3);
    row.appendChild(Cell2);
    row.appendChild(Cell1)

    Cell1.appendChild(document.createTextNode(m.name))
    Cell2.appendChild(document.createTextNode(m.description))
    tableBody?.appendChild(row);
  })})
const dogList = document.getElementById('DogSelector');
const listButton = document.querySelector('.list');                                                                                                           
addEventListener('load', listing);
addEventListener('load', dogList);
//click and change
dogList.addEventListener('change', breedImage);
listButton?.addEventListener('click', breedImage);
//populate List
function listing(){
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(status)
    .then(response => response.json())
    .then(data => listItems(data.message))
    .catch(error => user(error))
}
//breedImage
function breedImage(){
  //get list value
  let selectedBreed = dogList.options[dogList.selectedIndex].value;
  //build url
  let url = `https://dog.ceo/api/breed/${selectedBreed}/images`;
  //fetch call
  fetch(url)
    .then(status)
    .then(response => response.json())
    .then(data => getImageURL(data.message))
    .catch(error => console.log(error))
}
//status
function status(response: { ok: any; statusText: string | undefined; }){
  if(response.ok){
    return Promise.resolve(response);
  }else{
    return Promise.reject(new Error(response.statusText));
  }
}
//display Dog Info
function displayDogInfo(data: any[]){
  //populate paragraph
  document.getElementById('dogInfo').innerHTML =
   `<strong>${cap+-italize(data[1])}:</strong> ${data} 
   <a href="${data[3][3]}" 
   alt="read more on wikipedia"> 
   Read more on wikipedia</a>`;
}
function getImageURL(data: string | any[1]){
  //get random number
  let randomNumberURL = data[Math.floor(Math.random()*data.length)+1];
  listImageContainer.innerHTML =
   `<img src="${randomNumberURL}" alt="${moreBreeds(data)}"/>`;
}
//listItems
function listItems(data: {}){
  let output = '';
  Object.keys(data).forEach(key => 
    output+=`<option value="${key}">${breedNames(key)}</option>`);
  document.getElementById(newFunction()).innerHTML = output;

  function newFunction(): string {
    return 'DogSelector';
  }
  
}
//breedNames
function breedNames(breedName: string){
  if(breedName === 'germanshepherd'){
    return 'German Shepherd';
  }else if(breedName === 'mexicanhairless'){
    return 'Mexican Hairless';

  }
  return capitalize(breedName);
}

//capitalize breed name
function capitalize(breedName: string){
  return breedName.replace(/\-/g,' ')
  .split(" ").map((word: string) =>
  word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
}
//extract breed name
function moreBreeds(data: string){
  let regex = newFunction();
  let mapBreed = regex.exec(data);
  return breedNames(mapBreed[1]);

  function newFunction() {
    return /https:\/\/images\.dog\.ceo\/breeds\/(\w+-?\w+)\/\w+\.\w+/g;
  }
}
function user(error: any): any {
    throw new Error("Function not implemented.");
}
function handleData(data: any): any {
  throw new Error("Function not implemented.");
}



