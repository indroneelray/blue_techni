import React, { useEffect } from 'react';
import Header from './components/Header'
import Campaigns from './components/Campaigns'
import service from './database/service'
import {CampaignContext} from './store'
import './App.css';
import { Campaign } from './components/Campaigns/types';

function App() {

  const {setCampaigns} = React.useContext(CampaignContext)


  const initiateStore = async () => {
    let data:Campaign[] | any = await service.initiateStore()
    setCampaigns(data)
  }

  useEffect(() => {
    initiateStore()
    return () => {
      
    }
  }, [])

  return (
    <div className="">
      <Header />
      <Campaigns />
    </div>
  );
}

export default App;
