import React from "react";
import styled from "styled-components";


export const ViewHeader =styled.View`
flex-direction:row;
align-items:center;
justify-content:space-between;
padding:10px;
border: 1px solid #ccc;
height: 50px;
` 
export const ImageSmaller =styled.Image`
width: 70px;
height:70px;
border-radius:80px;`

export const Item = styled.TouchableOpacity`
flex-direction: row;
justify-content: space-between;
box-shadow: 5px 5px 15px #000000;

padding: 10px;
align-items: center;
`
export const ImageBack = styled.ImageBackground `
height: 400px;
justify-content: flex-end;
padding: 10px;
`
export const ItemCenter = styled.View`
width: 200px;
padding-left: 10px;
justify-content:center;
`
export const Card = styled.View`
align-items: center;
padding: 10px;
`
export const ImagBrowser = styled.Image`
height: 170px;
width: 300px;
border-radius: 10px;
margin-right: 10px;
`
export const ImageSmall= styled.Image`
height: 150px;
width: 150px;
border-radius: 10px;
margin-right: 10px;

`
export const SmallView = styled.View`
flex-direction: row;

`
export const BTn= styled.TouchableOpacity`
background-color: #e63946;
border-radius: 5px;
padding: 10px;



`

export const HorizontalScrowll = styled.ScrollView`
border-top: 1px;
padding: 0 10px;

flex-direction: row;

`
export const HorizontalScrowllSmall = styled.ScrollView`
border-top: 1px;
padding-top: 10px;
width: 100%;
flex-direction: row;
`
export const GlobalView = styled.ScrollView`

`
export const ViewRowItem = styled.View`
flex-direction:row;
justify-content:space-between;
width:100px;`
export const BaseScrollView=styled.ScrollView`
padding:0 10px;`

export const ViewRowItemSpaced = styled.View`
flex-direction: row;
justify-content:space-around;
`
export const InputArea = styled.View`

justify-content: center;

width: 100%;
align-items:center;
padding: 10px;`


export const Input = styled.View`
width: 95%;
border: 1px solid #ccc;
border-radius:5px;
flex-direction: row;
justify-content: space-between;

`
export const IconInput = styled.TouchableOpacity`
width: 50px;
align-content:center;
align-items: flex-end;
background-color: #ccc;
justify-content: center;

`
