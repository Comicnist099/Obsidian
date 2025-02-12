<%*
async function getPokemon(pokemonName) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await res.json();
    return `
## ${data.name.toUpperCase()}
- **ID:** ${data.id}
- **Tipo:** ${data.types.map(t => t.type.name).join(", ")}
- **Peso:** ${data.weight} kg
`;
}

// Ejecuta la función para Ditto
tR += await getPokemon("ditto");
%>
