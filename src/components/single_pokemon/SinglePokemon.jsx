import React from "react";
import "./singlePokemon.scss";

export default function SinglePokemon(props) {
	return (
		<div className="card">
			<h4 className="num">{props.num}</h4>
			<h3 className="name">{props.name}</h3>
			<div className="images">
				<img src={props.img} alt="" className="hero-img" />
				<div className="sprites">
					<img
						src={props.sprites.front_default}
						alt=""
						className="sprite front default"
					/>
					<img
						src={props.sprites.back_default}
						alt=""
						className="sprite back default"
					/>
					<img
						src={props.sprites.front_shiny}
						alt=""
						className="sprite front shiny"
					/>
					<img
						src={props.sprites.back_shiny}
						alt=""
						className="sprite back shiny"
					/>
				</div>
			</div>
			<h5 className="type">{props.types[0]}</h5>

			<div className="desc-wrapper">
				<p className="desc">{props.desc}</p>
			</div>
		</div>
	);
}
