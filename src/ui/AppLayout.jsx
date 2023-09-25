import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import HeadBar from "./HeadBar";
import styled from "styled-components";

const StyleAppLayOut=styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr; 
  height: 100vh;
`;

const Main= styled.main`
background-color: var(--color-grey-100);
padding: 4rem 4.8rem 6.4rem;
overflow-x: scroll;
`;
const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
const AppLayout=()=>{

    return(
        <StyleAppLayOut>
            <HeadBar/>
            <Sidebar/>
            <Main>
                <Container>
                    <Outlet/>
                </Container>
            </Main>

        </StyleAppLayOut>
    )


}

export default AppLayout;