import React from "react";

interface NavbarComponentProps {
  children: React.ReactNode;
}

const NavbarComponent: React.FC<NavbarComponentProps> = ({ children }) => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between p-5">
        <h4 className="text-xl font-medium text-hap-blue">Happay</h4>
        <h4>profile</h4>
      </div>
      {children}
    </div>
  );
};

export default NavbarComponent;
