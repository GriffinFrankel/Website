import { type ContactFormData, type ContactSubmission } from "@shared/schema";

// Interface for storage operations
export interface IStorage {
  getUser(id: number): Promise<any | undefined>;
  getUserByUsername(username: string): Promise<any | undefined>;
  createUser(user: any): Promise<any>;
  
  // Add contacts-related methods
  createSubmission(data: ContactFormData): Promise<ContactSubmission>;
  getSubmissions(): Promise<ContactSubmission[]>;
  getSubmission(id: number): Promise<ContactSubmission | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, any>;
  private submissions: Map<number, ContactSubmission>;
  private userId: number;
  private submissionId: number;

  constructor() {
    this.users = new Map();
    this.submissions = new Map();
    this.userId = 1;
    this.submissionId = 1;
  }

  // User methods
  async getUser(id: number): Promise<any | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<any | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: any): Promise<any> {
    const id = this.userId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contact form methods
  async createSubmission(data: ContactFormData): Promise<ContactSubmission> {
    const id = this.submissionId++;
    const timestamp = new Date();
    
    const submission: ContactSubmission = {
      id,
      ...data,
      createdAt: timestamp,
    };
    
    this.submissions.set(id, submission);
    console.log(`New contact form submission: ID ${id} from ${data.firstName} ${data.lastName} at ${data.company}`);
    
    return submission;
  }

  async getSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.submissions.values());
  }

  async getSubmission(id: number): Promise<ContactSubmission | undefined> {
    return this.submissions.get(id);
  }
}

export const storage = new MemStorage();
