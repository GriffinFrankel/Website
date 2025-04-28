import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the form data
      const formData = contactFormSchema.parse(req.body);
      
      // Store the contact form submission
      const submission = await storage.createSubmission(formData);
      
      // Return success response
      res.status(201).json({
        message: "Thank you for your interest! Our team will contact you shortly.",
        id: submission.id
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details
        });
      }
      
      // Handle other errors
      console.error("Error processing contact form:", error);
      res.status(500).json({ message: "An error occurred processing your request" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
