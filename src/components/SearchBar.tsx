import styled from "styled-components"

export default function SearchBar(){
    return(
        <SearchBody>
            <Input placeholder="Busque por marca, ano, modelo, cor..."/>
        </SearchBody>
    )
}

const SearchBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #3f73b8;
    width: 100%;
    height: 50px;
    padding: 8px;
`
const Input = styled.input`
    width: 70%;
    height: 28px;
    font-size: 16px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-family: 'Raleway', sans-serif;
`