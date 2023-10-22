const names = ["Dr.Slice","Mr.Pressure","Prof.Possibility"];
const prices =[20, 30, 44, 75];
const occupations = ["gardener","programmer","teacher","driver"]
const maxPerson = 5;

const freeLancers = [
  {
    name: "Dr.Pressure",
    price: 20,
    occupation:"gardener"
  },
  {
    name: "Dr.Slive",
    price: 30,
    occupation:"teacher",
  },
  
];


 const addFreeLanceInterval = setInterval(addFreeLance,1000)


/*
  
  function render(){
    const persons = document.querySelector("#persons");
    const personElements = freeLancers.map((person)=> {
      const element = document.createElement("li");
      element.classList.add(person.name, person.price, person.occupation);
      return element;
    });

    persons.replaceChildren(...personElements);
 
  }
*/



  function addFreeLance(){
    const name = names[Math.floor(Math.random() * names.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    if (freeLancers.length >= maxPerson) {
      clearInterval(addFreeLanceInterval);
    }

    freeLancers.push({ name, price, occupation });
    console.log(freeLancers)
  
  }

  console.log()