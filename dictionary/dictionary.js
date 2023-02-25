const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function(){
    const searchKey = document.getElementById('input-field');
    getDictionary(searchKey.value);
    searchKey.value = '';
})

const getDictionary = async(word) => {
    try {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const res = await fetch(url);
        const data = await res.json();
        displayResult(data[0]);
        console.log(data[0])
    } catch (error) {
        const resultContainer = document.getElementById('result-container');
        resultContainer.innerHTML = `
        <div class="alert alert-error shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Error! Check The word spelling</span>
        </div>
      </div>
        `
    }
}

const displayResult = (word) => {
    const resultContainer = document.getElementById('result-container');
    console.log(word['meanings']);

    resultContainer.innerHTML = `
    <h1 class="text-3xl">${word['word']}</h1>
    <h1 class="text-3xl text-violet-600 mt-3">${word['phonetic']}</h1>
    `
    const meanings = word['meanings'];

    for(const meaning of meanings){
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex justify-start items-center mt-8">
                <h1 class="text-xl font-bold text-rose-300">${meaning['partOfSpeech']}</h1>
                <hr class="w-full ml-4">
            </div>
            <h1 class="text-xl mt-5 mb-5">Meaning</h1>
        `
        const definitions = meaning['definitions'];
        const ul = document.createElement('ul')
        for(const definition of definitions){
            const li = document.createElement('li')
            li.innerHTML = `
                <li class="ml-4">${definition['definition']}</li>
            `
            ul.appendChild(li);
        }
        div.appendChild(ul);
        resultContainer.appendChild(div);
    }
    const sourceDiv = document.createElement('div');
    sourceDiv.innerText = word['sourceUrls'][0];
    sourceDiv.classList.add('mt-5')
    resultContainer.appendChild(sourceDiv);
}