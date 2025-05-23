
import React, { createContext, useContext, useState, useEffect } from "react";

type PhoneNumberContextType = {
  phoneNumber: string;
  phoneNumberFormatted: string;
  phoneNumberHref: string;
};

const DEFAULT_PHONE = "9154975755";
const DEFAULT_PHONE_FORMATTED = "(915) 497-5755";
const DEFAULT_PHONE_HREF = "tel:+19154975755";

const PhoneNumberContext = createContext<PhoneNumberContextType>({
  phoneNumber: DEFAULT_PHONE,
  phoneNumberFormatted: DEFAULT_PHONE_FORMATTED,
  phoneNumberHref: DEFAULT_PHONE_HREF,
});

export const usePhoneNumber = () => useContext(PhoneNumberContext);

export const PhoneNumberProvider = ({ children }: { children: React.ReactNode }) => {
  const [phoneNumber, setPhoneNumber] = useState(DEFAULT_PHONE);
  const [phoneNumberFormatted, setPhoneNumberFormatted] = useState(DEFAULT_PHONE_FORMATTED);
  const [phoneNumberHref, setPhoneNumberHref] = useState(DEFAULT_PHONE_HREF);

  useEffect(() => {
    // Wait for the call tracking script to modify the DOM
    const observer = new MutationObserver((mutations) => {
      // Look for changes to anchor elements with href starting with "tel:"
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "href") {
          const target = mutation.target as HTMLAnchorElement;
          if (target.href && target.href.startsWith("tel:")) {
            const newPhoneHref = target.href;
            const newPhone = newPhoneHref.replace(/\D/g, "").replace(/^1/, ""); // Remove non-digits and leading 1
            
            if (newPhone && newPhone !== phoneNumber && newPhone.length >= 10) {
              console.log("Phone number changed by tracking script:", newPhone);
              
              // Format the phone number for display
              const formatted = newPhone.replace(
                /(\d{3})(\d{3})(\d{4})/,
                "($1) $2-$3"
              );
              
              setPhoneNumber(newPhone);
              setPhoneNumberFormatted(formatted);
              setPhoneNumberHref(newPhoneHref);
            }
          }
        }
      });
    });

    // Start observing the document with configured parameters
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ["href"]
    });

    // Clean up observer when component unmounts
    return () => observer.disconnect();
  }, [phoneNumber]);

  return (
    <PhoneNumberContext.Provider value={{ phoneNumber, phoneNumberFormatted, phoneNumberHref }}>
      {children}
    </PhoneNumberContext.Provider>
  );
};
