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

export interface ApiResponse {
    company: string;
    date: string;
    time: string;
  }
  
  
interface TableData{
    company:string;
    date:string;
    time:string;
}

interface Props{
    company?:string;
    data:TableData[];
}
function HistoryDownDetector(props:Props) {
     //const [forumsStatus,setForumsStatus] = useState<TableData[]>();
    
    // const fetchApi=async()=>{
        
    //     const response = await fetch("https://64170.wayscript.io/?text="+props.company);
    //     const json:ApiResponse[] = await response.json();
    //     setForumsStatus(json)
    // }

    // useEffect(()=>{
    //    fetchApi(); 
    // },[]);

      
      const columns = [
        {
          title: 'Company',
          dataIndex: 'company',
          key: 'company',

        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
  
          },
        {
          title: 'Time',
          dataIndex: 'time',
          key: 'time',
        },
      ];
      
      

  return (
    <DownDetectorStyled>
        {props.data?<Table dataSource={props.data} columns={columns} pagination={false} />:null}
    </DownDetectorStyled>
  );
}

export default HistoryDownDetector;