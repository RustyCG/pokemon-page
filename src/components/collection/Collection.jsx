import React, { useContext, useState } from "react";
import "./collection.scss";
// import axios from "axios";
import { PokemonContext } from "../../PokemonContext";
import SinglePokemon from "../single_pokemon/SinglePokemon";
import Bulbasaur from "../bulbasaur/Bulbasaur";

export default function Collection() {
	// const [pokemon, setPokemon] = useState();
	// useEffect(() => {
	// 	axios
	// 		.get(`https://cdn.theprojectfactory.com/pokemon/get.php`)
	// 		.then((res) => {
	// 			setPokemon(res.data.pokemon);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// }, []);

	const { pokemon, poke, setPoke } = useContext(PokemonContext);
	const [bulbasaurOnly, setBulbasaurOnly] = useState(false);
	const [bulbasaur] = pokemon.filter(indv => indv.name === "Bulbasaur");
	const toggleBulbasaurBtn = () => {
		setBulbasaurOnly(!bulbasaurOnly);
	};

	return (
		<div>
			<div className="collection-container">
				<div className="pokedex-wrapper">
					<h2 className="headline">Pokédex</h2>
					<h3 className="counter">
						You've Collected {pokemon.length} Pokémon!!!
					</h3>
					<button
						className="btn"
						onClick={toggleBulbasaurBtn}
					>
						Show Me Bulbasaur Only!
					</button>
				</div>

				<div className="cards">
					{pokemon.map((indv, idx) => (
						<SinglePokemon
							key={indv.number}
							name={indv.name}
							num={indv.number}
							desc={indv.description}
							img={indv.image}
							types={indv.types}
							sprites={indv.sprites}
						/>
					))}
				</div>
				{bulbasaurOnly && (
					<Bulbasaur
						key={bulbasaur.number}
						name={bulbasaur.name}
						num={bulbasaur.number}
						desc={bulbasaur.description}
						img={bulbasaur.image}
						types={bulbasaur.types}
						sprites={bulbasaur.sprites}
						toggle={toggleBulbasaurBtn}
					/>
				)}
			</div>
		</div>
	);
}
