import React, { ReactElement } from "react";
import { Campaign } from "../Campaigns/types";
import "./Modal.css";

interface Props {
  isOpen: boolean;
  setOpen: Function;
  data: Campaign | null;
}

export default function Modal({ isOpen, setOpen, data }: Props): ReactElement {
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      modalRef.current?.classList.add("my-fade");
    } else {
      modalRef.current?.classList.remove("my-fade");
    }
  }, [isOpen]);

  return (
    <>
      <div className="my-backdrop" ref={modalRef}>
        <div className="my-modal">
          <div className="modal-body">
            <div className="w-100 d-flex align-items-end">
              <img
                src={data?.image_url}
                width="80px"
                height="80px"
                className=""
              />
              <div className="info ml-2">
                <span>{data?.name}</span>
                <br />
                <span>{data?.region}</span>
              </div>
            </div>
            <br />
            <div className="pricing w-100">
              <h3>Pricing</h3>
              <ul className="list-unstyled">
                <li>
                  1 Week - 1 Month <span>$100</span>
                </li>
                <li>
                  6 Months <span>$500</span>
                </li>
                <li>
                  1 Year <span>$900</span>
                </li>
              </ul>
            </div>

            <button className="btn generic-button" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
