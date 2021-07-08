import React from "react";
import { getDiffInDays, months } from "../../utils";
import {Campaign} from './types'

type Props = {
  campaign: Campaign;
  selectRow: Function
};

export default function TableListItem({ campaign, selectRow }: Props) {
  const datePickerRef = React.useRef<HTMLInputElement>(null);
  const [showDate, setDate] = React.useState<boolean>(false) 

  let date = new Date(campaign.createdOn);
  let formattedDate = `${
    months[date.getMonth() + 1]
  } ${date.getFullYear()}, ${date.getDate()}`;
  let diff = getDiffInDays(campaign.createdOn);

  return (
    <div className="table-item d-flex w-100 align-items-center">
      <div className="date">
        <span>{formattedDate}</span>
        <br />
        <span>{diff} days</span>
      </div>

      <div className="campaign d-flex align-items-center">
        <img
          src={campaign.image_url}
          alt={campaign.name}
          className="thumbnail"
        />
        <div className="ml-2">
          <span>{campaign.name}</span>
          <br />
          <span className="text-muted font-italic region">
            {campaign.region}
          </span>
        </div>
      </div>

      <div className="view-pricing cursor-pointer" onClick={()=>selectRow(campaign)}>
        <img src="/price.png" /> View Pricing
      </div>

      <div className="actions">
        <span>
          <img src="/file.png" alt="csv" />
          &nbsp; CSV
        </span>
        <span>
          <img src="/statistics-report.png" alt="report" />
          &nbsp; Report
        </span>
        <span onClick={() => setDate(true)} className="position-relative">
          <img src="/calendar.png" alt="calendar" />
          &nbsp; Schedule Again

        {showDate && <input type="date" ref={datePickerRef} className="position-absolute"/>}

        </span>

      </div>
    </div>
  );
}
