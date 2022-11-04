import { useEffect, useState } from "react"
import styled from "styled-components"
import { toast, ToastContainer } from "react-toastify"
import { useNavigate } from "react-router-dom"

import api, { LoginBody } from "../api/apiConnections"
import { Button } from "../components/vehicleData"
import { erroMessage } from "../utils/toasts"
import { getToken } from "../utils/checkAuthentication"

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
            erroMessage(error.response.data.error)
        }
    }
    
    useEffect(() => {
        if(getToken()) navigate("/")
    }, [])

    return (
        <>
            <LoginPage>
                <ToastContainer/>
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
                            placeholder="No mínimo 8 dígitos"
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
export const Title = styled.h1`
    color: #6e6eec;
    font-size: 40px;
    font-family: 'Raleway', sans-serif;
`
export const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 30px;
`
export const Input = styled.input`
    all: unset;
    box-sizing: border-box;
    font-family: 'Lexend Deca', sans-serif;
    width: 100%;
    color: #000;
    background: rgba(255, 255, 255, 0.05);
    padding: 15px;
    margin: 5px;
    border: 1px solid #6e6eec;;
    border-radius: 7px;
    ::placeholder {
      color: #686565;
    }
`
export const Label = styled.label`
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 15px;
  margin-top: 28px;
  margin-left: 5px;
  @media (max-width:399px){
        width: 100%;
        margin-left: 0;
    }
`