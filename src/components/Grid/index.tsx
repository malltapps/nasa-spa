import React, { ReactNode } from "react";

interface Grid {
  children?: ReactNode;
  className?: string;
}

export const Container: React.FC<Grid> = ({ children, className }) => (
  <div className={className ? `container ${className}` : `container`}>
    {children}
  </div>
);

export const ContainerFluid: React.FC<Grid> = ({ children, className }) => (
  <div
    className={className ? `container-fluid ${className}` : `container-fluid`}
  >
    {children}
  </div>
);

export const Row: React.FC<Grid> = ({ children }) => (
  <div className="row">{children}</div>
);

export const Col4: React.FC<Grid> = ({ children, className }) => (
  <div className={className ? `col-md-4 ${className}` : `col-md-4`}>
    {children}
  </div>
);

export const Col5: React.FC<Grid> = ({ children, className }) => (
  <div className={className ? `col-md-5 ${className}` : `col-md-5`}>
    {children}
  </div>
);

export const Col6: React.FC<Grid> = ({ children, className }) => (
  <div className={className ? `col-md-6 ${className}` : `col-md-6`}>
    {children}
  </div>
);

export const Col7: React.FC<Grid> = ({ children, className }) => (
  <div className={className ? `col-md-7 ${className}` : `col-md-7`}>
    {children}
  </div>
);

export const Col8: React.FC<Grid> = ({ children, className }) => (
  <div className={className ? `col-md-8 ${className}` : `col-md-8`}>
    {children}
  </div>
);

export const Col9: React.FC<Grid> = ({ children, className }) => (
  <div className={className ? `col-md-9 ${className}` : `col-md-9`}>
    {children}
  </div>
);

export const Col10: React.FC<Grid> = ({ children, className }) => (
  <div className={className ? `col-md-10 ${className}` : `col-md-10`}>
    {children}
  </div>
);

export const Col11: React.FC<Grid> = ({ children, className }) => (
  <div className={className ? `col-md-11 ${className}` : `col-md-11`}>
    {children}
  </div>
);

export const Col12: React.FC<Grid> = ({ children, className }) => (
  <div className={className ? `col-md-12 ${className}` : `col-md-12`}>
    {children}
  </div>
);
