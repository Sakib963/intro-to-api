const getUser = user => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(user => displayUser(user))
}

const displayUser = (user) => {
    const nameField = document.getElementById('name')
    const genderField = document.getElementById('gender')

    const titleName = user['results'][0]['name']['title']
    const firstName = user['results'][0]['name']['first']
    const lastName = user['results'][0]['name']['last']
    const fullName = titleName.concat(' ', firstName, ' ', lastName)
    nameField.innerText = fullName;

    genderField.innerText = user['results'][0]['gender'];

    const cityField = document.getElementById('city');
    const city = user['results'][0]['location']['city']
    cityField.innerText = city;

    const streetField = document.getElementById('street-address');
    const streetNumber = user['results'][0]['location']['street']['number']
    const streetName = user['results'][0]['location']['street']['name']
    const street = streetNumber.toString().concat(' ', streetName);
    streetField.innerText = street;

    const image = document.getElementById('image-profile');
    image.src = user['results'][0]['picture']['large']

    console.log(user['results'][0])
}

getUser()