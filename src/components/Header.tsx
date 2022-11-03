import styled from "styled-components"

import logo from "../assets/logo.png"

export default function Header(){
    return(
        <HeaderBody>
            <Content>
                <Logo src={logo}/>
                <LoginLabel>login</LoginLabel>
            </Content>
        </HeaderBody>
    )
}

const HeaderBody = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
`
const Logo = styled.img`
    cursor: pointer;
`
const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
`
const LoginLabel = styled.label`
    color: #363636;
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    cursor: pointer;
    :hover{
        color: #000;
    }
`