import React, { useState } from "react";
import ButtonEdit from "./Sections/Button/ButtonEdit";

const ButtonSection = () => {
  return (
    <div>
      <div className="side-wrapper">
        <div class="side-title" >ButtonSection</div>
        <div class="side-menu">
          <ButtonEdit/>
        </div>
      </div>
    </div>
  );
};

export default ButtonSection;
