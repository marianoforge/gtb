import React from "react";

import styles from "../../styles/Header.module.css";

const Header = ({title}) => {
  return (
    <div>
      <div className={styles.bgImg}>
        <div className={styles.mask}>
            <div className="container mx-auto px-4 relative h-full flex flex-col justify-center">
              <div className="w-full pt-16">
                <h2 className="text-2xl lg:text-4xl text-white leading-none lg:leading-tight font-semibold mb-2 text-center">
                  {title}
                </h2>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Header;
