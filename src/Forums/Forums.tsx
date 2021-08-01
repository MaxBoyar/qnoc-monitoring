import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table } from "antd";
import 'antd/dist/antd.css'
import { Spin } from 'antd';


const DownDetectorStyled = styled.div`
  
`;



const LinksList = styled.div``;
const TableStyled = styled.div`
padding-left:1vh;
padding-right: 1vh;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.05);
`;

export interface ApiResponse {
    SteamCqloud: string;
    VerizonSteam: string;
    VerizonDailymotion: string;
    VerizonSony: string;
    VerizonXbox: string;
    VerizonCloud: string;
    VerizonDisney: string;
    status: string;
    month: string;
    year: string;
  }
  
interface TableData{
    key: string;
    name: string;
    word:string;
    status: string;
    imgLink?:string
}
function Forums() {
    const [forumsStatus,setForumsStatus] = useState<TableData[]>();
    const [loading,setLoading] =useState(true);
    
    const fetchApi=async()=>{
        const response = await fetch("https://63445.wayscript.io/");
        const json:ApiResponse = await response.json();
        console.log(json)
        setForumsStatus([
            {key:"1",name:"Steam",word:"cqloud",status:json.SteamCqloud},
            {key:"1",name:"Verizon",word:"steam",status:json.VerizonSteam},
            {key:"1",name:"Verizon",word:"Dailymotion",status:json.VerizonDailymotion},
            {key:"1",name:"Verizon",word:"sony",status:json.VerizonSony},
            {key:"1",name:"Verizon",word:"xbox",status:json.VerizonXbox},
            {key:"1",name:"Verizon",word:"cqloud",status:json.VerizonCloud},
            {key:"1",name:"Verizon",word:"disney",status:json.VerizonDisney},
        ])
        setLoading(false);
    }

    useEffect(()=>{
       fetchApi(); 
    },[]);

      
      const columns = [
        {
          title: 'Forum',
          dataIndex: 'name',
          key: 'name',

        },
        {
            title: 'Search word',
            dataIndex: 'word',
            key: 'word',
  
          },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
         
      ];
      
      

  return (
    <DownDetectorStyled>
        <h2 style={{textAlign:"center"}} >Forums</h2>
        {!loading?<TableStyled> <Table dataSource={forumsStatus} columns={columns} pagination={false} /></TableStyled>:<Spin size="small" />}
        
    </DownDetectorStyled>
  );
}

export default Forums;