import React from "react";

export default function CampaignsTableHeader() {
  return (
    <div className="table-header d-flex align-items-center">
      <div>
        <span>Date</span>
      </div>
      <div>
        <span>Campaign</span>
      </div>
      <div>
        <span>View</span>
      </div>
      <div>
        <span>Actions</span>
      </div>
    </div>
  );
}
