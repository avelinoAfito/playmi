import React from "react";
import { View,Text,Image } from "react-native";
import { ImagBrowser, ImageSmall ,ImageSmaller,ViewRowItem,Item,ItemCenter} from "../style/styled";
import Icon from "react-native-vector-icons/MaterialIcons"

const ItemPlayer =()=>{
    return(
       <>
    

        <Item>
          <ViewRowItem>
            <ImageSmaller source={require("../files/img/nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg")}/>
            <ItemCenter>
            <Text>Titulo</Text>
            <Text>Nome do artista</Text>
            </ItemCenter>

          </ViewRowItem>
          <ViewRowItem>
            <Text>3:00</Text>
                
                <Icon name="more-vert" color={"black"} size={20}/>
                
          
          </ViewRowItem>

        </Item>
        
       
           
      
        </>

    )
}

export default ItemPlayer