import styled from 'styled-components'

const Header = styled.div`
  width:100%;
  background: #2c19c6;
  padding: 20px 40px 5px 24px;
  height:auto;
  margin-bottom:10px;
  
  > h2 {
    position:absolute;
    display:inline-block;
    right:0;
    color:white;
    margin:0 50px 0 0;
  }

  @media only screen and (max-width: 768px) {
    > h2 {
      font-size: 1.5rem
      position:relative;
      display:block;
      padding:0 0 10px 20px;
    }  
  }

  @media only screen and (max-width: 425px) {
    padding: 20px 10px 5px 5px;
    > h2{
      font-size: 1rem;
    }  
  }

`
const ListBlock = styled.div`
  margin: 20px 40px;
  padding: 10px 50px 0 50px;
  border: 1px solid #dee0e0;
  border-left: 8px solid #183cb2;

  > h2 span{
    margin-right: 10px;
  }

  @media only screen and (max-width: 768px) {
    > h2 span{
      font-size: 1.5rem;
      display:block;
    }  
  }

  @media only screen and (max-width: 425px) {
    margin: 20px 20px;
    padding: 10px 20px 0 20px;
    > h2 span{
      font-size: 1rem;
      display:block;
    }  
  }
`
const Footer = styled.div`
  margin: 0 40px;  
  @media only screen and (max-width: 768px) {
    
    > a button{
      width:100%;
      padding: 20px 40px;
    }  
    > button{
      width:100%;
      padding: 20px 40px;
    }  
  }

  @media only screen and (max-width: 425px) {
    margin: 0px 20px; 
  }
`

const InputBlock = styled.div`
  margin: 10px 40px 0 40px; 
  @media only screen and (max-width: 425px) {
    margin: 0px 20px; 
  }
  
`

export {
  Header,
  ListBlock,
  Footer,
  InputBlock
}
