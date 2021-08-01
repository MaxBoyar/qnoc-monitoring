import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table } from "antd";
import 'antd/dist/antd.css'
import { Badge } from 'antd';
import { Spin } from 'antd';

const DownDetectorStyled = styled.div`
 // padding: 1rem 3rem;
 margin-right: 4vh;
`;

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const LinksList = styled.div``;
const TableStyled = styled.div`
padding-left:1vh;
padding-right: 1vh;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.05);
`;

interface ApiResponse{
    Merryl:string;
    Disney:string;
    Steam:string;
    Verizon:string;
    Amazon:string;
    DailyMotion:string;
    BT:string;
    Mediacom:string;
}
interface DataFromApi{
    key: string;
    cp: string;
    status: string;
    imgLink:string
}
function DownDetector() {
    const [downStatus,setDownStatus] = useState<DataFromApi[]>();
    const [loading,setLoading] =useState(true);
    
    const fetchApi=async()=>{
        const response = await fetch("https://63410.wayscript.io/");
        const json:ApiResponse = await response.json();
        console.log(json)
        setDownStatus([
        {key:'Disney+',cp:"Disney+",status:json.Disney,imgLink:"https://cdn2.downdetector.com/static/uploads/c/300/e0ecf/Disney_logo_2.png"},
        {key:'Steam',cp:"Steam",status:json.Steam,imgLink:"https://cdn2.downdetector.com/static/uploads/c/300/07eb1/Steam-Logo.png"},
        {key:'Verizon',cp:"Verizon",status:json.Verizon,imgLink:"https://cdn2.downdetector.com/static/uploads/c/300/2e248/verizon-logo.png"},
        {key:'Amazon',cp:"Amazon",status:json.Amazon,imgLink:"https://cdn2.downdetector.com/static/uploads/c/300/7d4a1/Amazon_Prime_Video_logo.png"},
        {key:'DailyMotion',cp:"DailyMotion",status:json.DailyMotion,imgLink:"https://cdn2.downdetector.com/static/uploads/c/300/d05b0/Dailymotion_logo.png"},
        {key:'BT',cp:"BT",status:json.BT,imgLink:"https://cdn2.downdetector.com/static/uploads/c/300/5f3af/image3.png"},
        {key:'Mediacom',cp:"Mediacom",status:json.Mediacom,imgLink:"https://cdn2.downdetector.com/static/uploads/c/300/76b00/Mediacom_Communications.png"},
    ]);
    setLoading(false);
    }

    useEffect(()=>{
       fetchApi(); 
    },[]);

      
      const columns = [
        {
          title: 'CP/SP',
          dataIndex: 'cp',
          key: 'cp',

        },
        {
            title: '',
            dataIndex: 'imgLink',
            key: 'imgLink',
            render: (text:string, record:DataFromApi) =>  <img src={text} width={"40px"} ></img>
  
          },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
        {
            title: 'Indicator',
            dataIndex: 'status',
            key: 'indicator',
            render: (text:string, record:DataFromApi) => {
                if(text.includes("no"))
                {
                    return(<Badge status="processing"  />)
                }
                else{
                  return(<Badge status="error" />)
                }
            }
  
          },
         
      ];
      
      

  return (
    <DownDetectorStyled>
        <h2 style={{textAlign:"center"}}>Downdetector status</h2>
        {!loading?<TableStyled> <Table dataSource={downStatus} columns={columns}  pagination={false}/></TableStyled>:<Spin size="small" /> }
            
    </DownDetectorStyled>
  );
}

export default DownDetector;