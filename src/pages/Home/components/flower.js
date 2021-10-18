import React, {useState, useEffect} from "react";

import Fro from '../../../assets/crisantemo.png'
import { Image } from '../styles'

export default function Flower({color}){

    const colors = ['#935AF2', '#E69B56', '#77B3EB', '#58E6C2', '#F0A4E0', '#B8A1F0', '#B5F0A1', '#E6DA81', '#F05B47', '#60EEF0']
    const [colorFlower, setColorFlower] = useState('')
    const [count, setCount] = useState(0)

    useEffect(() => {
        changeColor()
    }, [color])


    function changeColor(){
        setCount(Math.floor(Math.random() * (9 - 0)))
        setColorFlower(colors[count])
    }

    return(
        <Image color={colorFlower}>
            <img src={Fro} alt="Fro"/>
        </Image>
    )
}