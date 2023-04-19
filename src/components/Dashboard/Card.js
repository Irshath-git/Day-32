import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ color, title, value, icon }) {
  return (
    <div class="col-xl-3 col-md-6 mb-4">
      <div class={`card  shadow h-100 py-2 border-left-${color}`}>
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div
                class={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}
              >
                {title}
              </div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
            </div>
            <div class="col-auto">
              <FontAwesomeIcon icon={icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
