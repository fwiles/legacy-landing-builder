
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

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

  // Define the update callback outside useEffect for better performance
  const updatePhoneNumber = useCallback((newPhoneHref: string) => {
    const newPhone = newPhoneHref.replace(/\D/g, "").replace(/^1/, "");
    
    if (newPhone && newPhone !== phoneNumber && newPhone.length >= 10) {
      // Format the phone number for display
      const formatted = newPhone.replace(
        /(\d{3})(\d{3})(\d{4})/,
        "($1) $2-$3"
      );
      
      setPhoneNumber(newPhone);
      setPhoneNumberFormatted(formatted);
      setPhoneNumberHref(newPhoneHref);
    }
  }, [phoneNumber]);

  useEffect(() => {
    // Use a more targeted MutationObserver with better performance
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type !== "attributes" || mutation.attributeName !== "href") continue;
        
        const target = mutation.target as HTMLAnchorElement;
        if (target?.href?.startsWith("tel:")) {
          updatePhoneNumber(target.href);
          // Once found, we can disconnect to save resources
          break;
        }
      }
    });

    // More specific targeting using document.querySelectorAll
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
      if (link.href && link.href !== phoneNumberHref) {
        updatePhoneNumber(link.href);
      }
      observer.observe(link, { attributes: true, attributeFilter: ["href"] });
    });

    // If no links found initially, observe document body
    if (phoneLinks.length === 0) {
      observer.observe(document.body, {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ["href"]
      });
    }

    // Clean up observer when component unmounts
    return () => observer.disconnect();
  }, [updatePhoneNumber, phoneNumberHref]);

  return (
    <PhoneNumberContext.Provider value={{ phoneNumber, phoneNumberFormatted, phoneNumberHref }}>
      {children}
    </PhoneNumberContext.Provider>
  );
};
