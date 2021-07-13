import React from "react";
import { LocalizeContext } from "../../store/Localiser";

export default function CampaignsTableHeader() {

  const {messages} = React.useContext(LocalizeContext)

  return (
   <div className="container-fluid d-none d-lg-block">
      <div className="table-header row align-items-center">
      <div className="col-2">
        <span>{messages.date}</span>
      </div>
      <div className="col-3">
        <span>{messages.campaign}</span>
      </div>
      <div className="col-2">
        <span>{messages.view}</span>
      </div>
      <div className="col-5">
        <span>{messages.actions}</span>
      </div>
    </div>
   </div>
  );
}
