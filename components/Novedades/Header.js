import React from "react";
import Media from "react-media";
import Menu from "../layout/Menu";
import MenuMobile from "../layout/MenuMobile";

import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.bgImg}>
      <div className={styles.container}>
        <div className={styles.topnav}>
          <Media
            queries={{
              small: "(max-width: 599px)",
              medium: "(min-width: 600px) and (max-width: 1199px)",
              large: "(min-width: 1200px)",
            }}
          >
            {(matches) => (
              <>
                {matches.small && <MenuMobile />}
                {matches.medium && <MenuMobile />}
                {matches.large && <Menu />}
              </>
            )}
          </Media>
        </div>
      </div>
    </div>
  );
};

export default Header;
