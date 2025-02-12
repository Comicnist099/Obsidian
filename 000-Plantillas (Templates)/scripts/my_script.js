// getPokemon.js
async function my_script() {
    const res = await fetch(`http://localhost:5054/todoitems`);
    const data = await res.json();
    return `${data.map((todo) => {
        ({ todo });
    })}`

}

module.exports = my_script


