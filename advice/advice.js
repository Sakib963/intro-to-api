const url = `https://api.adviceslip.com/advice`
const getAdvice = (url) => {
    fetch(url)
        .then(res => res.json())
        .then(data => displayAdvice(data))
}

const displayAdvice = (data) => {
    document.getElementById('advice-text').innerText = data['slip']['advice'];
    document.getElementById('advice-id').innerText = `ADVICE #${data['slip']['id']}`
}
getAdvice(url)

document.getElementById('refresh-button').addEventListener('click', function(){
    getAdvice(url)
})