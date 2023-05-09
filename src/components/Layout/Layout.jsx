import styled from "styled-components";
import Header from "../Header/Header";

function Layout({children}) {

    return (
      <>
          <Header />
          <StLayout>{children}</StLayout>
      </>
    )
  }
  
  export default Layout
  
  const StLayout = styled.div`
    height : calc(100vh - 90px);
    background-color : #f2f2f2;
    padding : 25px;
    display: flex;
  `