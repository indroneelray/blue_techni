import localForage from "localforage";
import { Campaign } from "../components/Campaigns/types";
import data from "./store";
const STORE_KEY = "campaign_store"
const sortByDate = (a:Campaign, b:Campaign) => {
  return a.campaignData - b.campaignData;
};

export default {
  initiateStore: async () => {
    let store = await localForage.getItem(STORE_KEY);
    if (store) {
      return store;
    } else {
      await localForage.setItem("campaign_store", data.sort(sortByDate));
      return data;
    }
  },

    updateStore: async (data:Campaign[]) => {
      await localForage.setItem(STORE_KEY, data)
      // console.log(data, ' updated store')
    }
};
