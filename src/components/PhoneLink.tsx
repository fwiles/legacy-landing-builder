
import React from "react";
import { usePhoneNumber } from "@/contexts/PhoneNumberContext";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PhoneLinkProps {
  showIcon?: boolean;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
  asButton?: boolean;
}

const PhoneLink = ({ 
  showIcon = false, 
  className = "", 
  variant = "outline", 
  size = "sm",
  children,
  asButton = true
}: PhoneLinkProps) => {
  const { phoneNumberFormatted, phoneNumberHref } = usePhoneNumber();

  if (asButton) {
    return (
      <Button asChild size={size} variant={variant} className={className}>
        <a href={phoneNumberHref}>
          {showIcon && <Phone className="mr-1 h-4 w-4" />}
          {children || `Call Now: ${phoneNumberFormatted}`}
        </a>
      </Button>
    );
  }

  return (
    <a href={phoneNumberHref} className={className}>
      {showIcon && <Phone className="mr-1 h-4 w-4 inline" />}
      {children || phoneNumberFormatted}
    </a>
  );
};

export default PhoneLink;
