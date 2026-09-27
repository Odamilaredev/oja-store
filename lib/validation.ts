import { z } from 'zod';
export const registerSchema=z.object({name:z.string().min(2).max(80),email:z.string().email(),password:z.string().min(8).max(100)});
export const checkoutSchema=z.object({email:z.string().email(),name:z.string().min(2).max(100),phone:z.string().min(7).max(30),address:z.string().min(5).max(240),city:z.string().min(2).max(80),items:z.array(z.object({productId:z.string(),quantity:z.number().int().min(1).max(20)})).min(1)});
export const productSchema=z.object({name:z.string().min(2),slug:z.string().min(2),category:z.string().min(2),description:z.string().min(5),price:z.number().int().positive(),stock:z.number().int().min(0),imageUrl:z.string().min(1),tag:z.string().optional(),featured:z.boolean().optional()});
