import React from "react";
import { View,Text, TextInput } from "react-native";
import { IconInput, Input,InputArea,InputText } from "../style/styled";
import Icon  from "react-native-vector-icons/MaterialIcons";
import { ImageSmall } from "../style/styled";
const Search =()=>{
    return(
        <View>
            <InputArea>
            <Input>
           <TextInput/>
           <IconInput>
            <Icon name="search" size={25} color={"black"}/>
           </IconInput>
            </Input>
            
            </InputArea>

            <View>
            <View>
      
      <ImageSmall source={require("./../files/img/austin-neill-hgO1wFPXl3I-unsplash.jpg")}/>
      <Text>
          Categoria
      </Text>
      <Text>
          Titulo
      </Text>
      <Text>
          Artista
      </Text>
  </View>
            </View>
      

        </View>

    )
}
export default Search