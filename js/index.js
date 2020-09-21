function main(){
    loadMonsters()
    const createMonDiv = document.querySelector('#create-monster')
    createMonDiv.addEventListener('submit', createMonster)

    

}
// Variables







// Event Listeners








// Functions


function monsterMaker(monster) {
    const monsterCont = document.querySelector('#monster-container')
    monsterCont.innerHTML += 
    `<h1>Name: ${monster.name}</h1>
    <h2>Age: ${monster.age}</h2>
    <h2>Description: ${monster.description}</h2>`
}

function loadMonsters() {
    fetch('http://localhost:3000/monsters/?_limit=50')
    .then(resp => resp.json())
    .then(monsters => renderMonsters(monsters))
}

function renderMonsters(monsters) {
    monsters.forEach(monster => {
    monsterMaker(monster)
    })
}

function createMonster(e){
    e.preventDefault()
    let newMonster = {
       name: e.target['monster-name'].value,
       age: e.target['monster-age'].value,
       description: e.target['monster-description'].value
    }
    let reqObj = {
        method: 'POST', 
        headers: { 
        "Content-Type": "application/json"
        },
        body: JSON.stringify(newMonster)
    }
    fetch('http://localhost:3000/monsters', reqObj)
    .then(resp => resp.json())
    .then(monster => {
        monsterMaker(monster)
        const createMonDiv = document.querySelector('#create-monster')
        debugger
        form.reset()
    })

}






// Invoked Functions



























main()