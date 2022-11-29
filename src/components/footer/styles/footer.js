import styled from 'styled-components'

export const Container = styled.div`
    margin-top:300px;
    padding: 60px 40px;
    background:rgb(14, 14, 124)
`

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    max-width:1200px;
    margin: 0 auto;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

export const Column = styled.div`
    display:flex;
    flex-direction:column;
    text-align: left;
    margin-left: 30px
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 30px;
`

export const Link = styled.a`
    color: rgb(209, 209, 243);
    margin-bottom: 10px;
    font-size: 15px;
    text-decoration: none;
    padding-top: 10px;

    &:hover{
        color: rgb(24, 197, 168);
        transition: 200ms ease-in;
        cursor:pointer;
    }
`

export const Title = styled.p`
    font-size: 25px;
    font-weight: bold;
    color:yellow;
    text-decoration: underline;
    margin-bottom: 10px;
    margin-top: 30px

`
export const Paragraph = styled.div`
    font-size:18px;
    color:white;
    margin-bottom: 10px;
`
export const Span = styled.span`
    margin-right: 2.5px;
    margin-left: -3px;
    `

