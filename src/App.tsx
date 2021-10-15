import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DownDetector from "./Downdetctor/DownDetector";
import Forums from "./Forums/Forums";
import HistoryDownDetector from "./historyDownDetector/HistoryDownDetector";

const AppView = styled.div`
   padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  
`;

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
  
`;

const MainView = styled.div`
  
  border:1px rgba(220, 213, 213,0.3) solid;
  margin:3vh;
  padding: 4vh;
  
`;

function App() {
 

  return (
    <AppView>
      <Title>
      <h1 style={{textAlign:"center",marginBottom:"10vh"}} >Qwilt-NOC monitoring</h1>
      </Title>
      <Center>
      <img src={"https://image.flaticon.com/icons/png/512/1055/1055679.png"} width={"90px"} height={"90px"} style={{marginTop:"-70px",marginBottom:"5vh"}}></img>
      </Center>
    
      <Center>
      <MainView>
        <MyRow>
          {/* <DownDetector></DownDetector> */}
          <Forums></Forums>
        </MyRow>
      </MainView>
    
      </Center>
   
     
    </AppView>
  );
}

export default App;
