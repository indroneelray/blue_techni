import React, { Dispatch, SetStateAction } from "react";
import { Campaign } from "../components/Campaigns/types";

type Props = {
  children: JSX.Element[] | JSX.Element
}


export const CampaignContext = React.createContext<{
  setCampaigns: Dispatch<SetStateAction<any[]>>;
  campaigns: Campaign[];
}>({
  setCampaigns: () => {},
  campaigns: [],
});

export const StoreProvider = ({ children } : Props) => {
  const [campaigns, setCampaigns] = React.useState<any[]>([]);

  return (
    <CampaignContext.Provider
      value={{
        campaigns,
        setCampaigns,
      }}
    >
      {children}
    </CampaignContext.Provider>
  );
};
