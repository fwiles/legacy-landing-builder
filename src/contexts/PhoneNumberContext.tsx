
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface PhoneNumberContextType {
  phoneNumberFormatted: string;
  phoneNumberHref: string;
}

const PhoneNumberContext = createContext<PhoneNumberContextType | undefined>(undefined);

export const usePhoneNumber = () => {
  const context = useContext(PhoneNumberContext);
  if (context === undefined) {
    throw new Error('usePhoneNumber must be used within a PhoneNumberProvider');
  }
  return context;
};

interface PhoneNumberProviderProps {
  children: ReactNode;
}

export const PhoneNumberProvider: React.FC<PhoneNumberProviderProps> = ({ children }) => {
  const [phoneNumberFormatted, setPhoneNumberFormatted] = useState('(720) 295-8600');
  const [phoneNumberHref, setPhoneNumberHref] = useState('tel:+17202958600');

  useEffect(() => {
    // Function to extract phone number from call tracking script changes
    const extractPhoneNumber = () => {
      // Look for phone number links that might be modified by call tracking
      const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
      
      if (phoneLinks.length > 0) {
        const firstLink = phoneLinks[0] as HTMLAnchorElement;
        if (firstLink.href && firstLink.textContent) {
          const href = firstLink.href;
          const text = firstLink.textContent.trim();
          
          // Only update if it's different from current state
          if (href !== phoneNumberHref || text !== phoneNumberFormatted) {
            setPhoneNumberHref(href);
            setPhoneNumberFormatted(text);
            console.log('Phone number updated:', { text, href });
          }
        }
      }
    };

    // Create a MutationObserver to watch for changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
          // Debounce the extraction to avoid excessive calls
          setTimeout(extractPhoneNumber, 100);
        }
      });
    });

    // Start observing after a short delay to allow call tracking to load
    const timeoutId = setTimeout(() => {
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['href']
      });
      
      // Initial extraction
      extractPhoneNumber();
    }, 2000);

    // Periodic check as fallback
    const intervalId = setInterval(extractPhoneNumber, 5000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, [phoneNumberHref, phoneNumberFormatted]);

  const value = {
    phoneNumberFormatted,
    phoneNumberHref,
  };

  return (
    <PhoneNumberContext.Provider value={value}>
      {children}
    </PhoneNumberContext.Provider>
  );
};
