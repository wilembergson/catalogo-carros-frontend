import styled from "styled-components"
import { useNavigate } from "react-router-dom"

import logo from "../assets/logo.png"
import { useContext, useEffect, useState } from "react"
import UserContext from "../context/UserContext"


export default function Header(){
    const navigate = useNavigate()
    const { logged } = useContext(UserContext)

    function logout(){
        localStorage.clear()
        navigate("/")
        window.location.reload()
    }
    
    return(
        <HeaderBody>
            <Content>
                <Logo src={logo} onClick={() => navigate("/")}/>
                {
                    logged ? <LoginLabel onClick={() => logout()}>Sair</LoginLabel>
                    : <LoginLabel onClick={() => navigate("/login")}>login</LoginLabel>
                }
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