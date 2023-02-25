const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };
const displayPerson = (persons) => {
    const personContainer = document.getElementById('person-container');
    for(const person of persons)
    {

        const name = person['name']['common'];
        const age = person['age'];
        const address = `Street: ${person['address']['street']}, House: ${person['address']['house']}`
        const div = document.createElement('div');
        div.classList.add('border', 'flex', 'flex-col', 'gap-4', 'rounded-lg');
        div.innerHTML = `
        <h1 class="bg-stone-400 p-2 rounded-t-lg">Person Name: ${name}</h1>
        <p class="p-2">Age: ${age}</p>
        <p class="p-2">${address}</p>
        `
        personContainer.appendChild(div);
    }

}

document.getElementById('message-field').innerText = person['message'];
displayPerson(person['result']);
console.log(person['result'][0]['address'])