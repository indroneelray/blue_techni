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



  return (
    <div className="campaigns-table w-100 my-5 ">
      <TableHeader />

      <div className="table-body container-fluid">
        {data.map((item, index) => {
          return (
            <TableListItem
              key={item.id}
              campaign={item}
              selectRow={selectRow}
              />
          );
        })}

        {data.length === 0 && (
          <p className="text-center font-italic py-5">
            There are no campaigns to show
          </p>
        )}
      </div>

      <Modal isOpen={open} setOpen={setOpen} data={row} />
    </div>
  );
}
