import React from "react";
import { ScrollView,Image,Text,View, Button, Touchable, TouchableOpacity } from "react-native";
import { ImagBrowser} from "../style/styled";
import { HorizontalScrowll } from "../style/styled";
import { Title_5,Title_3,Title_4,Title_2  } from "../style/textStyled";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";



const Browser =()=>{
    const navigation =useNavigation()
return(
    <HorizontalScrowll horizontal>
        <ScrollView>
            
        </ScrollView>
        <TouchableOpacity onPress={()=>navigation.navigate("PlayIt")}>
            <View>

            </View>
            <Title_3>
                Categoria
               
            </Title_3>
            <Title_4>
                Titulo
            </Title_4>
            <Text>
                Artista
            </Text>
            <ImagBrowser source={require("./../files/img/nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg")} 
            onPress={()=>alert("ola mundo")}/>
        </TouchableOpacity>
        <View>
            <Title_3>
                Categoria
            </Title_3>
            <Title_4>
                Titulo
            </Title_4>
            <Text>
                Artista
            </Text>
            <ImagBrowser source={require("./../files/img/jakayla-toney-TTiO8ilzeQA-unsplash.jpg")}/>
        </View>
        <View>
            <Text>
                Categoria
            </Text>
            <Title_4>
                Titulo
            </Title_4>
            <Text>
                Artista
            </Text>
            <ImagBrowser source={require("./../files/img/christian-buehner-XiWX754jx0s-unsplash.jpg")}/>
        </View>
        <View>
            <Text>
                Categoria
            </Text>
            <Title_4>
                Titulo
            </Title_4>
            <Text>
                Artista
            </Text>
            <ImagBrowser source={require("./../files/img/austin-neill-hgO1wFPXl3I-unsplash.jpg")}/>
        </View>
    </HorizontalScrowll>
)
}

export default Browser