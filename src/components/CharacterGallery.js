import characterData from "../characterData.json";
import Character from "./Character"

export default function CharacterGallery(){
    return <div data-test="component-char-gallery">
    {characterData.map(character=> <Character {...character}></Character>)}
    </div>
}

