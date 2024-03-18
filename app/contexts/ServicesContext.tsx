import React, { createContext, useContext, ReactNode, useState } from "react";

interface Service {
  id: string;
  name: string;
  description?: string;
}

interface ServicesContextType {
  services: Service[];
  setServices: React.Dispatch<React.SetStateAction<Service[]>>;
}

const ServicesContext = createContext<ServicesContextType | undefined>(
  undefined
);

export const useServices = () => {
  const context = useContext(ServicesContext);
  if (context === undefined) {
    throw new Error("useServices must be used within a ServicesProvider");
  }
  return context;
};

interface ServicesProviderProps {
  children: ReactNode;
}

export const ServicesProvider: React.FC<ServicesProviderProps> = ({
  children,
}) => {
  const [services, setServices] = useState<Service[]>([
    {
      id: "1",
      name: "Service 1",
      description: "This is service 1",
    },
    {
      id: "2",
      name: "Service 2",
      description: "This is service 2",
    },
    {
      id: "3",
      name: "Service 3",
      description: "This is service 3",
    },
  ]);

  return (
    <ServicesContext.Provider value={{ services, setServices }}>
      {children}
    </ServicesContext.Provider>
  );
};
