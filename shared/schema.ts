import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const leads = pgTable("leads", {
  id: varchar("id", { length: 36 }).primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  city: text("city").notNull(),
  monthlyBill: integer("monthly_bill"),
  propertyType: text("property_type").notNull(),
  message: text("message"),
  source: text("source").default("contact_form"),
});

export const insertLeadSchema = createInsertSchema(leads).omit({ id: true }).extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  city: z.string().min(1, "Please select a city"),
  monthlyBill: z.number().optional(),
  propertyType: z.enum(["residential", "commercial"]),
  message: z.string().optional(),
  source: z.string().optional(),
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;

export const calculatorUsage = pgTable("calculator_usage", {
  id: varchar("id", { length: 36 }).primaryKey(),
  monthlyBill: integer("monthly_bill").notNull(),
  estimatedSavings: integer("estimated_savings").notNull(),
  recommendedSystem: text("recommended_system").notNull(),
});

export const insertCalculatorUsageSchema = createInsertSchema(calculatorUsage).omit({ id: true });

export type InsertCalculatorUsage = z.infer<typeof insertCalculatorUsageSchema>;
export type CalculatorUsage = typeof calculatorUsage.$inferSelect;

export const users = pgTable("users", {
  id: varchar("id", { length: 36 }).primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
