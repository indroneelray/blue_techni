import React from "react";
import TableHeader from "./CampaignsTableHeader";
import TableListItem from "./TableListItem";
import { Campaign } from "./types";
import Modal from "../Modal";
type Props = {
  data: Campaign[];
};

export default function CampaignsTable({ data = [] }: Props) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [row, setRow] = React.useState<Campaign | null>(null);

  const selectRow = (campaign: Campaign) => {
    setRow(campaign);
    setOpen(true);
  };
  const sortByDate = (a: Campaign, b: Campaign) => {
    return a.campaignData - b.campaignData;
  };

  return (
    <div className="campaigns-table w-100 mt-5 mb-2 ">
      <TableHeader />

      <div className="table-body row">
        {data.sort(sortByDate).map((item, index) => {
          return (
            <TableListItem
              key={item.id}
              campaign={item}
              selectRow={selectRow}
            />
          );
        })}

        {data.length === 0 && (
          <div className="col-12">
            <p className="text-center font-italic py-5">
              There are no campaigns to show
            </p>
          </div>
        )}
      </div>

      <Modal isOpen={open} setOpen={setOpen} data={row} />
    </div>
  );
}
