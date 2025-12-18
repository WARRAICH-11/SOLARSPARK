import { type User, type InsertUser, type Lead, type InsertLead, type CalculatorUsage, type InsertCalculatorUsage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  
  createCalculatorUsage(usage: InsertCalculatorUsage): Promise<CalculatorUsage>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private leads: Map<string, Lead>;
  private calculatorUsages: Map<string, CalculatorUsage>;

  constructor() {
    this.users = new Map();
    this.leads = new Map();
    this.calculatorUsages = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const id = randomUUID();
    const lead: Lead = { 
      ...insertLead, 
      id,
      monthlyBill: insertLead.monthlyBill ?? null,
      message: insertLead.message ?? null,
      source: insertLead.source ?? "contact_form"
    };
    this.leads.set(id, lead);
    return lead;
  }

  async getLeads(): Promise<Lead[]> {
    return Array.from(this.leads.values());
  }

  async createCalculatorUsage(insertUsage: InsertCalculatorUsage): Promise<CalculatorUsage> {
    const id = randomUUID();
    const usage: CalculatorUsage = { ...insertUsage, id };
    this.calculatorUsages.set(id, usage);
    return usage;
  }
}

export const storage = new MemStorage();
