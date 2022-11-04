import { useEffect, useState } from "react"
import styled from "styled-components"
import { ToastContainer } from "react-toastify"
import { useNavigate } from "react-router-dom"

import api, { LoginBody } from "../api/apiConnections"
import { erroMessage } from "../utils/toasts"
import { getToken } from "../utils/checkAuthentication"
import { Button, Form, Input, Label } from "../components/SharedStyles"

export default function Login(){
    const initialData:LoginBody = {
        userLogin:'',
        password:''
    }
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialData)

    function handleChange(e:any) {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e:any){
        e.preventDefault()
        const login = {...formData}
        try{
            const {data} = await api.login(login)
            localStorage.setItem("token", data.token)
            navigate("/")
            window.location.reload()
        }catch(error:any){
            alert(error.response.data.error)
        }
    }
    
    useEffect(() => {
        if(getToken()) navigate("/")
    }, [])

    return (
        <>
            <LoginPage>
                <LoginContent>
                    <Title>Login</Title>
                    <Form onSubmit={handleSubmit}>
                        <Label>USUÁRIO</Label>
                        <Input
                            placeholder="usuário"
                            type="text"
                            onChange={(e) => handleChange(e)}
                            name="userLogin"
                            value={formData.userLogin}
                            required
                        />
                        <Label>SENHA</Label>
                        <Input
                            placeholder="Digite aqui sua senha"
                            type="password"
                            onChange={(e) => handleChange(e)}
                            name="password"
                            value={formData.password}
                            required
                        />
                        <Button>Entrar</Button>
                    </Form>
                </LoginContent>
            </LoginPage>
        </>
    )
}

const LoginPage = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
`
const LoginContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 400px;
    height: 450px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-top: 100px;
`
const Title = styled.h1`
    color: #6e6eec;
    font-size: 40px;
    font-family: 'Raleway', sans-serif;
`