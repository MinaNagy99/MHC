// src/context/addressContext.jsx
"use client";

import { createContext, useState } from "react";

// Create the context
export const AddressContext = createContext(null);

export default function AddressContextProvider({ children }) {
  const address = [
    {
      companyName: "wolsey",
      link: "https://maps.app.goo.gl/aLdKkkm5S7WsJd768",
      address: "#200, 1302 4th Street SW Calgary, AB  T2R-0X8",
    },
    {
      companyName: "kaller",
      link: "https://maps.app.goo.gl/DnJ98mKrdP6LSesc8",
      address: "2417 Hollywood Blvd.Hollywood, FL 33020",
    },
    {
      companyName: "adal",
      link: "https://maps.app.goo.gl/tbxHqSV5i9pVh7Yo7",
      address: "337 - 17th Ave SW, 2nd Floor | Calgary, AB  T2S 0A5",
    },
    {
      companyName: "mhceg",
      link: "https://maps.app.goo.gl/kdcSGFKYDAr9eSwC7",
      address: "13 Sayed Zakareya, Sheraton Heliopolis, Cairo, Egypt",
    },
  ];

  const [currentAddress, setCurrentAddress] = useState(address[0]);
  const setAddress = (companyName) => {
    setCurrentAddress(
      address.find((address) => address.companyName == companyName)
    );
  };

  return (
    <AddressContext.Provider value={{ currentAddress, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
}
