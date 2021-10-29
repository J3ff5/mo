import React from "react";

import { Cat, DrawerStyles } from './styles'
import blackCat from '../../assets/blackCat.png'

export default function Drawer(){
    return(
        <DrawerStyles>
            <text>Menu</text>
            <Cat src={blackCat} />
        </DrawerStyles>
    )
}