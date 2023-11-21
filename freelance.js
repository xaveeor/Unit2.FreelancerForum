
//name price and job holders
const names = ["Dr.Slice","Mr.Pressure","Prof.Possibility", "Carol","AwildSeacow", "Xavier"];
const prices =[20, 30, 50, 75];
const occupations = ["gardener","programmer","teacher","driver"]
const maxPerson = 20
//set state for a person 
const freeLanceWriters = [
  {
    name: "Dr.Pressure",
    price: 20,
    occupation:"Gardener"
  },
  {
    name: "Dr.Slive",
    price: 30,
    occupation:"Teacher",
  },
  {
    name: "Prof.Possibility",
    price: 75,
    occupation:"Programmer",
  }
];
const addFreelancerIntervalId = setInterval(addFreeLance, 1000);
render();

  //Create render function to rdnder a persons name job and price
  function render(){
    const averagePrice = document.querySelector("#average-price");
    const freeLanceWritersEl = document.querySelector("tbody");
    const template = freeLanceWriters.map((person)=> {
      const tr = document.createElement("tr");
      const td1 =document.createElement("td");
      td1.textContent = person.name;
      const td2 =document.createElement("td");
      td2.textContent = person.occupation;
      const td3 =document.createElement("td");
      td3.textContent = `$${person.price}`;
      tr.append(td1,td2,td3);
      return tr;
    });
    freeLanceWritersEl.replaceChildren(...template);
    const newAverage = calculateAveragePrice();
    averagePrice.innerText = `$${newAverage}`;
  }
  //call the render function to make it show 
 render()
//creating a random person from my holders
  function addFreeLance(){
    const name = names[Math.floor(Math.random() * names.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    if (freeLanceWriters.length >= maxPerson) {
      clearInterval(addFreeLanceInterval);
    }
    freeLanceWriters.push({ name, price, occupation });
    //call the render fucntion to show 
  render();
  }

  function calculateAveragePrice() {
    const total = freeLanceWriters.reduce(
      (subtotal, current) => subtotal + current.price,0);
    return Math.round(total / freeLanceWriters.length);
    }