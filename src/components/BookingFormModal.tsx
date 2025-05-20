
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Dialog, 
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

// Define the form schema with validation rules
const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number is required"),
  planInterest: z.enum([
    "Basic Will Plan $1,500", 
    "Living Trust Plan $3,500 / $4,500", 
    "Advanced Planning Plan $6,500", 
    "Something custom / I have more questions"
  ]),
});

type FormValues = z.infer<typeof formSchema>;

interface BookingFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/9158387/27piuv8/";

const formatPhoneNumber = (value: string) => {
  // Remove all non-digits
  const digits = value.replace(/\D/g, "");
  
  if (digits.length <= 3) {
    return digits;
  } else if (digits.length <= 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  } else {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  }
};

const BookingFormModal = ({ open, onOpenChange }: BookingFormModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      planInterest: "Basic Will Plan $1,500",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Handle CORS
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          source: window.location.href,
        }),
      });
      
      // Since using no-cors, we won't get a proper response status
      // Redirect to the thank you page
      navigate("/thank-you");
      onOpenChange(false);
      form.reset();
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-center">Book Your Free 20 Min Consult!</DialogTitle>
          <DialogDescription className="text-center text-slate">
            Fill out the form below and we'll get back to you shortly to schedule your consultation.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field: { onChange, ...rest } }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="(555) 555-5555" 
                      {...rest} 
                      onChange={(e) => {
                        const formatted = formatPhoneNumber(e.target.value);
                        onChange(formatted);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="planInterest"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>What plan are you interested in?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Basic Will Plan $1,500" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          Basic Will Plan $1,500
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Living Trust Plan $3,500 / $4,500" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          Living Trust Plan $3,500 / $4,500
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Advanced Planning Plan $6,500" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          Advanced Planning Plan $6,500
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Something custom / I have more questions" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">
                          Something custom / I have more questions
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full bg-navy text-white hover:bg-navy/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Book Your Free Consultation"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingFormModal;
