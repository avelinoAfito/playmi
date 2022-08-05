import React from "react";
import { TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { ViewHeader,ViewRowItem } from "../style/styled";
import { Text,BoldText } from "../style/textStyled";


const Header =()=>{
    return(
        <ViewHeader>
       <TouchableOpacity>
        <Text>PlayMI</Text>
        </TouchableOpacity>

        <ViewRowItem>
        <Icon name="bells" size={20} color="#4a90e2"/> 
        <Icon name="setting" size={20} color="#4a90e2"/> 
        <Icon name="user" size={20} color="#4a90e2"/> 
        </ViewRowItem>
        
       </ViewHeader>  
          
           
        
      )
}

export default Header;