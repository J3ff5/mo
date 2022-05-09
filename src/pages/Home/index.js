import React, { useEffect, useState } from "react";

import { Container, TextContainer } from "./styles";
import { colors } from "../../utils/colors";
import { text } from "../../constants/textos";

export default function App() {
	const [color, setColor] = useState();
	const [changeText, setChangeText] = useState(0);

	const [catPicture, setCatPicture] = useState("");

	async function getCatPicture() {
		const response = await fetch("https://api.thecatapi.com/v1/images/search", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"x-api-key": "29700885-a8ba-4bad-8b09-3a3d2b32d488",
			},
		});

    const data = await response.json();
    setCatPicture(data[0].url);
	}
  
  console.log("oi", catPicture);
  
	useEffect(() => {
    getCatPicture();
		handleClick();
	}, []);

	function handleClick() {
		setColor(colors[Math.floor(Math.random() * colors.length)]);
	}

	function handleChangeText() {
		if (changeText === 9) {
			setChangeText(0);
		} else {
			setChangeText(changeText + 1);
		}
	}

	return (
		<Container color={color} onClick={() => {}}>
			<TextContainer onClick={() => getCatPicture()}>
				{/* <h1>{text[changeText]}</h1> */}
				<h1>Clique aqui e veja um gato</h1>
        <img src={catPicture} alt="gato" width={500} height={500} />
			</TextContainer>
		</Container>
	);
}
