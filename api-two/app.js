const data = [
  {
    _id: "60795d4e0489a32f948c4167",
    name: "Honda Sedan",
    price: "132",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
    imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
  },
  {
    _id: "60795e440489a32f948c4168",
    name: "MitoSedan",
    price: "221",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
    imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
  },
  {
    _id: "60795fc20489a32f948c4169",
    name: "Isuzu Tacoma",
    price: "105",
    description:
      "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
    imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
  },
  {
    _id: "6079615d0489a32f948c416a",
    name: "Chevrolet Crossover",
    price: "434",
    description:
      "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
  },
];

const getCars = (cars) => {
    const carContainer = document.getElementById('car-container');
    for(const car of cars){
        if(car['name'].includes('Sedan')){
            const image = car['imageURL'];
            const carName = `Car Name: ${car['name']}`;
            const description = `Car Detail: ${car['description']}`
            const price = `Car Price: ${car['price']}`

            const div = document.createElement('div');
            div.classList.add('card', 'bg-gray-300', 'shadow-xl', 'text-black')
            div.innerHTML = `
            <figure><img src="${image}"/></figure>
            <div class="card-body">
              <h2 class="card-title">${carName}</h2>
              <p>${description}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">${price}</button>
              </div>
            </div>
            `
            carContainer.appendChild(div)
        }
        else
        {
            return;
        }
    }
}

getCars(data);