import React from "react";
import { View,Text,Image, ScrollView, Button, ImageBackground } from "react-native";
import { ImagBrowser, ImageSmall ,ImageSmaller,ViewRowItem,Item,ItemCenter ,Card,BTn,ImageBack,ViewRowItemSpaced} from "../style/styled";
import Icon from "react-native-vector-icons/MaterialIcons"
import ItemPlayer from "../components/itemPlayer";
import { Title_2, Title_5,Title_2_ligth  } from "../style/textStyled";
import Back from "../components/Back";

const PLayIt =()=>{
    return(
       <ScrollView>
    
    <ImageBack source={require("../files/img/nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg")} resizeMode="cover">
        <Back/>
        <View>
           
            <Title_5>
                Browser
            </Title_5>
         
           
            
           
        </View>

        <ViewRowItemSpaced>
        <BTn><Title_2_ligth>encontre mais faixas</Title_2_ligth></BTn>
        <BTn><Title_2_ligth>encontre mais faixas</Title_2_ligth></BTn>
        </ViewRowItemSpaced>
       
        </ImageBack>
 
       <View>
       <ItemPlayer/>
        <ItemPlayer/>
        <ItemPlayer/>
        <ItemPlayer/>
        <ItemPlayer/>
        <ItemPlayer/>
        <ItemPlayer/>
        <ItemPlayer/>
        <ItemPlayer/>
        <ItemPlayer/>
        <ItemPlayer/>
        <ItemPlayer/>
        <ItemPlayer/>
        <ItemPlayer/>
        <ItemPlayer/>
       </View>
       

       
           
      
        </ScrollView>

    )
}

export default PLayIt