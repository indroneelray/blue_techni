import React from "react";
import { getDiffInDays, months } from "../../utils";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Campaign } from "./types";
import { CampaignContext } from "../../store";
import service from "../../database/service";
import { LocalizeContext } from "../../store/Localiser";

type Props = {
  campaign: Campaign;
  selectRow: Function;
};

export default function TableListItem({ campaign, selectRow }: Props) {
  const [showDate, setDate] = React.useState<boolean>(false);
  const [selectedDate, setSelectedDate] = React.useState<number>(
    campaign.campaignData
  );

  const { campaigns, setCampaigns } = React.useContext(CampaignContext);
  const {messages} = React.useContext(LocalizeContext)

  let date = new Date(campaign.campaignData);
  let formattedDate = `${
    months[date.getMonth()]
  } ${date.getFullYear()}, ${date.getDate()}`;
  let diff = getDiffInDays(campaign.campaignData);

  const Container = ({ children }: any) => {
    return (
      <div className="bg-light d-flex flex-column bordered">
        {children}
        <button className="generic-button btn" onClick={handleUpdate}>
          Confirm
        </button>
      </div>
    );
  };

  const handleUpdate = () => {
    setDate(false);
    updateData({ ...campaign, campaignData: selectedDate });
  };

  const updateData = async (campaign: Campaign) => {
    let newData = [...campaigns];
    newData.forEach((item: Campaign) => {
      if (item.id === campaign.id) {
        item.campaignData = campaign.campaignData;
      }
    });
    setCampaigns(newData);
    await service.updateStore(newData);
  };

  React.useEffect(() => {}, []);

  return (
    <div className="table-item col-12 col-md-6 col-lg-12">
      <div className="row flex-column flex-lg-row mx-auto  align-items-center py-3 ">
        <div className="date col-12 text-center text-lg-left col-lg-2">
          <span>{formattedDate}</span>
          <br />
          <span className="text-muted font-italic">
            {diff === 0
              ? "Ongoing"
              : `${Math.abs(diff)} ${diff > 0 ? "Day(s) Ago" : "Day(s) Ahead"}`}
          </span>
        </div>

        <div className="campaign  col-12  col-lg-3">
          <div className="d-flex align-items-center text-center text-lg-left justify-content-center justify-content-lg-start">
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
        </div>

        <div
          className="view-pricing cursor-pointer col-12 text-center text-lg-left col-lg-2"
          onClick={() => selectRow(campaign)}
        >
          <img src="/assets/price.png" /> {messages.view_pricing}
        </div>

        <div className="actions col-12 text-center text-lg-left col-lg-5 justify-content-between d-flex  ">
          {showDate ? (
            <span>
              <img
                src="/assets/calendar.png"
                alt="calendar"
                className="cursor-pointer"
                onClick={() => setDate((date) => !date)}
              />
              &nbsp;
              <Datepicker
                selected={new Date(selectedDate)}
                onChange={(e) =>
                  e && setSelectedDate(new Date(e.toString()).getTime())
                }
                dateFormat="dd-MM-yyyy"
                className="Datepicker pa2"
                placeholderText="Select a date"
                calendarClassName="rasta-stripes"
                shouldCloseOnSelect={false}
                preventOpenOnFocus={false}
                calendarContainer={Container}
                autoFocus

              />
            </span>
          ) : (
            <>
              <span>
                <img src="/assets/file.png" alt="csv" />
                &nbsp; CSV
              </span>
              <span>
                <img src="/assets/statistics-report.png" alt="report" />
                &nbsp; {messages.report}
              </span>
              <span>
                <img
                  src="/assets/calendar.png"
                  alt="calendar"
                  className="cursor-pointer"
                  onClick={() => setDate((date) => !date)}
                />
                &nbsp; {messages.schedule_again}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
