import React from "react";
import CampaignsTable from "./CampaignsTable";
import dataJson from "../../database/store";
import { TABS } from "../../utils";
import './Campaigns.css'

export default function Campaign() {
  const [active, setActive] = React.useState<number>(TABS[0].value);
  const [data, setData] = React.useState<any[]>(dataJson)


  React.useEffect(()=>{
    setData(data)
  },[active])

  return (
    <div className="container campaigns-container">
      <h1 className="font-weight-bold my-4">Manage Campaigns</h1>

      <div className="tabs">
        <ul className="list-unstyled d-flex campaign-tabs-list">
          {TABS.map((item,index) => {
            return (
              <li key={index} className={item.value === active ? "active" : ""} onClick={()=>setActive(item.value)}>
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>

      <CampaignsTable data={data} />
    </div>
  );
}
