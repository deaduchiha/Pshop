import { z } from "zod";

const phoneSchema = z
  .string()
  .trim() // Remove leading/trailing whitespace
  .min(10, { message: "شماره تلفن باید حداقل ۱۰ رقم باشد" }) // Persian for "Phone number must be at least 10 characters long"
  .max(11, { message: "شماره تلفن نمی تواند بیش از ۱۱ رقم باشد" }) // Persian for "Phone number cannot exceed 11 characters"
  .refine(
    (value) => {
      // Basic phone number format check (can be extended with a library)
      const hasDigits = /\d/.test(value);
      const hasSpecialChars = /[-+]/.test(value); // Allow hyphens or plus signs
      return hasDigits && !hasSpecialChars; // Disallow other special characters
    },
    { message: "فرمت شماره تلفن نامعتبر است" }
  ); // Persian for "Invalid phone number format"

export default phoneSchema;
