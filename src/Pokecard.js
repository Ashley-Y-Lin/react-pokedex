
/**
 * Accepts props which describe a single pokemon
 * Gets pokemon image from url
 * Renders a single Pokecard for one pokemon with data from the props
 * Exported to Pokedex.js
 */
function Pokecard({id, name, type, base_experience}){
  const imageSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  return (
    <div>
      <p>{name}</p>
      <img src = {imageSource} alt='Pokecard'/>
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  )
}
export default Pokecard