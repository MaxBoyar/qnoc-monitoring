import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table } from "antd";
import 'antd/dist/antd.css'
import { Spin } from 'antd';
import {BarChartOutlined } from '@ant-design/icons';

const DownDetectorStyled = styled.div`
  
`;



const LinksList = styled.div``;
const TableStyled = styled.div`
padding-left:1vh;
padding-right: 1vh;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.05);
`;

export interface ForumsApiResponse {
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
    downLink:string;
}

function Forums() {
    const [forumsStatus,setForumsStatus] = useState<TableData[]>();
    const [loading,setLoading] =useState(true);
    const [date,setDate] = useState<string>("");

    const fetchWithTimeout= async (link:string, time:number)=>{      
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), time);
      const response = await fetch(link, {
        signal: controller.signal  
      });
      clearTimeout(id);
      return response;
    }

    const fetchApi=async()=>{
      try{
        const response = await fetchWithTimeout("https://dd-api-maximus.herokuapp.com/forums",30000)
        if (!response.ok) {
          // make the promise be rejected if we didn't get a 2xx response
          throw new Error("Not 2xx response")
        } else {
            // go the desired response
            const json:ForumsApiResponse = await response.json();
            console.log(json)
            setForumsStatus([
                {key:"SteamCqloud",name:"Steam",word:"cqloud",status:json.SteamCqloud,downLink:"https://steamcommunity.com/discussions/forum/search/?q=cqloud&sort=time"},
                {key:"VerizonSteam",name:"Verizon",word:"steam",status:json.VerizonSteam,downLink:"https://forums.verizon.com/t5/forums/searchpage/tab/message?q=steam&noSynonym=false&inactive=false&sort_by=-topicPostDate&collapse_discussion=true"},
                {key:"VerizonDM",name:"Verizon",word:"Dailymotion",status:json.VerizonDailymotion,downLink:"https://forums.verizon.com/t5/forums/searchpage/tab/message?q=Dailymotion&noSynonym=false&inactive=false&sort_by=-topicPostDate&collapse_discussion=true"},
                {key:"VerizonSony",name:"Verizon",word:"sony",status:json.VerizonSony,downLink:"https://forums.verizon.com/t5/forums/searchpage/tab/message?q=Sony&noSynonym=false&inactive=false&sort_by=-topicPostDate&collapse_discussion=true"},
                {key:"VerizonXbox",name:"Verizon",word:"xbox",status:json.VerizonXbox,downLink:"https://forums.verizon.com/t5/forums/searchpage/tab/message?q=xbox&noSynonym=false&inactive=false&sort_by=-topicPostDate&collapse_discussion=true"},
                {key:"VerizonCqloud",name:"Verizon",word:"cqloud",status:json.VerizonCloud,downLink:"https://forums.verizon.com/t5/forums/searchpage/tab/message?sort_by=-topicPostDate&collapse_discussion=true&q=cqloud&noSynonym=false&inactive=false&q=cqloud&nospellcheck=true"},
                {key:"VerizonDisney",name:"Verizon",word:"disney",status:json.VerizonDisney,downLink:"https://forums.verizon.com/t5/forums/searchpage/tab/message?q=Disney%2B&noSynonym=false&nospellcheck=true&inactive=false&sort_by=-topicPostDate&collapse_discussion=true"},
            ])
            setDate(json.month+" "+json.year)
            setLoading(false);
        } 
      }
      catch(err)
      {
        console.log(err)
        setLoading(false);

      }
        
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
        {
            title: 'Link',
            dataIndex: 'downLink',
            key: 'downLink',
            render: (text:string, record:TableData) => <a href={text} target="_blank"><BarChartOutlined /></a>
          },
         
      ];
      
      

  return (
    <DownDetectorStyled>
        <h2 style={{textAlign:"center"}} >Forums</h2>
        <p style={{textAlign:"center"}}>{date}</p>
        {!loading?<TableStyled> <Table dataSource={forumsStatus} columns={columns} pagination={false} /></TableStyled>:<Spin size="small" />}
        
    </DownDetectorStyled>
  );
}

export default Forums;