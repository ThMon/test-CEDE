import React, { ReactElement } from "react";
import Header from "./header";

const Container = ({ children }: { children: ReactElement }): ReactElement => {
  return (
    <div>
      <Header />
      <>{children}</>
    </div>
  );
};

export default Container;
