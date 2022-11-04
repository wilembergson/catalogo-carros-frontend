import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import api from "../api/apiConnections"
import { Button, Title } from "../components/vehicleData"
import { erroMessage } from "../utils/toasts"
import { Form, Input, Label } from "./Login"

type VehicleInsertData = {
    name: string;
    brand: string;
    model: string;
    price: string;
    picture: string;
}

export default function RegisterForm(){
    const initialData:VehicleInsertData = {
        name: '',
        brand: '',
        model: '',
        price: '',
        picture: ''
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
            /*const {data} = await api.login(login)
            localStorage.setItem("token", data.token)
            navigate("/")*/
            window.location.reload()
        }catch(error:any){
            erroMessage(error.response.data.error)
        }
    }
    return(
        <Body>
            <Title>Adicionar carro</Title>
            <Content>
                <Form>
                    <Label>Nome</Label>
                    <Input
                            placeholder="Nome"
                            type="text"
                            onChange={(e) => handleChange(e)}
                            name="name"
                            value={formData.name}
                            required
                    />
                    <Label>Marca</Label>
                    <Input
                            placeholder="Marca"
                            type="text"
                            onChange={(e) => handleChange(e)}
                            name="brand"
                            value={formData.brand}
                            required
                    />
                    <Label>Modelo</Label>
                    <Input
                            placeholder="modelo"
                            type="text"
                            onChange={(e) => handleChange(e)}
                            name="model"
                            value={formData.model}
                            required
                    />
                    <Label>Preço</Label>
                    <Input
                            placeholder="Preço"
                            type="number"
                            onChange={(e) => handleChange(e)}
                            name="price"
                            value={formData.price}
                            required
                    />
                    <Label>Foto</Label>
                    <Input
                            placeholder="Insira o link da foto"
                            type="text"
                            onChange={(e) => handleChange(e)}
                            name="picture"
                            value={formData.picture}
                            required
                    />
                    <ButtonsContainer>
                        <Button>Salvar</Button>
                        <ButtonCancel onClick={() => navigate("/")}>Cancelar</ButtonCancel>
                    </ButtonsContainer>
                    
                </Form>
            </Content>
        </Body>
    )
}

const Body = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`
const Content = styled.div`
    display: flex;
    justify-content: center;
    width: 70%;
    height: 700px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
export const ButtonCancel = styled.button`
    width: fit-content;
    color: #fff;
    background: #b83f3f;
    border: none;
    border-radius: 5px;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    padding: 10px 20px;
    margin-top: 40px;
    cursor: pointer;
    :hover{
        background: #ec5d5d;
    }
`
const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`