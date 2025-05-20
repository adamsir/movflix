import * as React from "react";

type BadgeProps = {
  children: React.ReactNode;
};

const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-primary text-primary-foreground shadow">
      {children}
    </div>
  );
};

export default Badge;
