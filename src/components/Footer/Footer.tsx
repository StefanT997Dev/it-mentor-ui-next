import React from "react";
import WatermarkLogo from "../WatermarkLogo/WatermarkLogo";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className={classes.footer}>
      {/* <WatermarkLogo className={classes.footer__watermark" /> */}
        <div className={classes.footer__main_column}>
          <div className={classes.footer__main_column__title}>Kontakt</div>
          <div className={classes.footer__main_column__sub_column}>
            <div className={classes.footer__main_column__sub_column__link}>
              Broj telefona
            </div>
            <div className={classes.footer__main_column__sub_column__link}>
              +381/60-6250-232
            </div>
          </div>
        </div>
        <div className={classes.footer__main_column}>
          <div className={classes.footer__main_column__title}>Legal info</div>
          <div className={classes.footer__main_column__sub_column}>
            <div className={classes.footer__main_column__sub_column__link}>License</div>
            <div className={classes.footer__main_column__sub_column__link}>
              www.it-mentorstva.rs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
