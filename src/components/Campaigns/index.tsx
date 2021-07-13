import React from "react";
import CampaignsTable from "./CampaignsTable";
import { TABS } from "../../utils";
import { CampaignContext } from "../../store";
import "./Campaigns.css";
import { Campaign as ICampaign } from "./types";
import { LocalizeContext } from "../../store/Localiser";

export default function Campaign() {
  const [active, setActive] = React.useState<number>(TABS[0].value);
  const [data, setData] = React.useState<ICampaign[]>([]);

  const { campaigns } = React.useContext(CampaignContext);
  const { messages } = React.useContext(LocalizeContext);
  const getTabWiseCampaign = (campaignType: number, campaigns: ICampaign[]) => {
    let today = new Date().getTime();
    let todayTimeFrame = today + 24 * 60 * 60 * 1000; //24 hours
    switch (campaignType) {
      case TABS[0].value: {
        //upcoming
        return campaigns.filter((item) => item.campaignData > todayTimeFrame);
      }
      case TABS[1].value: {
        //Live
        return campaigns.filter(
          (item) =>
            item.campaignData >= today && item.campaignData <= todayTimeFrame
        );
      }

      case TABS[2].value: {
        //past
        return campaigns.filter((item) => item.campaignData < today);
      }
    }
  };

  React.useEffect(() => {
    let data = getTabWiseCampaign(active, campaigns);
    console.log(data);
    setData(data || []);
  }, [active, campaigns]);

  return (
    <div className="container campaigns-container">
      <h1 className="font-weight-bold my-4">{messages.manage_campaigns}</h1>

      <div className="tabs">
        <ul className="list-unstyled d-flex campaign-tabs-list">
          {TABS.map((item, index) => {
            return (
              <li
                key={index}
                className={item.value === active ? "active" : ""}
                onClick={() => setActive(item.value)}
              >
                {messages[item.key]}
              </li>
            );
          })}
        </ul>
      </div>

      <CampaignsTable data={data} />
    </div>
  );
}
