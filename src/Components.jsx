import styled from "styled-components"
import { Link } from "react-router-dom"
const  Navigation = styled.p`
    display: flex;
    justify-content: space-evenly;
`
const StyledLink = styled(Link)`
    background:${props=>props.$primary?"#BF4F74" :"white"};
    text-decoration:none;
    color:${props=>props.$primary?"white":"#BF4F74"};
    font-size: 1em;
    margin-top: 1.5em;
    padding: 0.25em 1em;
    border: 2px solid #BF4F74;
    border-radius: 3px;
    display:flex;
    flex-direction:column;
    height:auto;
    justify-content:center;
    align-items:center;
    width:250px;
`
const FancyText = styled.p`
    color:${props=>props.$primary?"white":"black"};
    font-size: 2em;
    margin-bottom: 0em;
    padding: 0.25em;
`
const FancyContainer = styled.div`
    display: grid;
    grid-template-columns:repeat(5,1fr);
`
const FancyImage = styled.img`
    width:1em;
`
const StyledButton = styled.button`
    display:flex;
    flex-direction:column;
    color:white;
    background:#BF4F74;
    text-decoration:none;
    font-size: 1em;
    margin-top: 1.5em;
    padding: 0.25em 1em;
    border: 2px solid #BF4F74;
    border-radius: 3px;
    height:25px;
    justify-content:center;
    align-items:center;
    width:150px;
    cursor:pointer;
`
//Tamir don't touch any of this
export {Navigation,StyledLink,FancyText,FancyContainer,FancyImage,StyledButton}