import React from "react";
import { View ,Text, ScrollView} from "react-native";
import Browser from "../components/browser";
import Destaques from "../components/destaques";
import Header from "../components/header";
import MiniPlayer from "../components/miniplayer";
import { GlobalView } from "../style/styled";

import { BodyTitle,Title_3,Title_4,Title_5 ,Title_2} from "../style/textStyled";

const Explorer =()=>{
  return(
    <View>
        <Header />
   <GlobalView>
 
   <View>
    <BodyTitle>
    <Title_5>
      Browser
    </Title_5>
    </BodyTitle>
    
    <Browser/>
   </View>
   <View>
    <View>
<BodyTitle>
<Title_3>Destaque</Title_3>
<Title_2>Ver tudo</Title_2>
</BodyTitle>
</View>
 
    <Destaques/>
   </View>
   <View>
    <View>
<BodyTitle>
<Title_3>Melhores Kizombas</Title_3>
<Title_2>Ver tudo</Title_2>
</BodyTitle>
</View>
 
    <Destaques/>
   </View>
   <View>
    <View>
<BodyTitle>
<Title_3>Melhor do trap</Title_3>
<Title_2>Ver tudo</Title_2>
</BodyTitle>

</View>
 
    <Destaques/>
   </View>
   <View>
    <View>
<BodyTitle>
<Title_3>Novos Lancamentos</Title_3>
<Title_2>Ver tudo</Title_2>
</BodyTitle>

</View>
 
    <Destaques/>
   </View>

   <MiniPlayer/>
   </GlobalView>   
      
      
   
    </View>
  )
}
export default Explorer