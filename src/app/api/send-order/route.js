import nodemailer from "nodemailer";
import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient();
export async function POST(req) {
  try {
    const { name, email, address, phone, perfumeName, price } = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your app password
      },
    });



    // Email to Admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Order Received",
      html: `
        <h2>New Order Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Perfume:</strong> ${perfumeName}</p>
        <p><strong>Price:</strong> ${price}</p>
      `,
    });

    // Confirmation Email to Customer
   // Confirmation Email to Customer
await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: email,
  subject: "🎉 Your Order is Confirmed - Suroor Scents",
  html: `
  <div style="font-family: Arial, sans-serif; background-color: #fff5f5; padding: 20px; border-radius: 10px; border: 1px solid #f5c2c7;">
    <div style="text-align: center;">
      <img src="/Images/png/Suroor-Scents.png" alt="Suroor Scents Logo" style="width: 150px; margin-bottom: 15px;">
      <h1 style="color: #c1121f; margin-bottom: 5px;">Suroor Scents</h1>
      <h3 style="color: #6a040f; font-weight: normal;">Luxury Fragrance Collection</h3>
    </div>

    <div style="background-color: #c1121f; color: white; padding: 15px; border-radius: 8px; text-align: center; font-size: 18px; margin-top: 20px;">
      ✅ Your Order Has Been Confirmed!
    </div>

    <div style="margin-top: 20px; padding: 15px; background-color: #fff; border-radius: 8px; border: 1px solid #f5c2c7;">
      <p>Dear <strong>${name}</strong>,</p>
      <p>Thank you for shopping with <strong>Suroor Scents</strong>. Your order has been placed successfully, and our team will contact you shortly.</p>

      <h3 style="color: #c1121f;">📦 Order Details</h3>
      <p><strong>Perfume:</strong> ${perfumeName}</p>
      <p><strong>Price:</strong> ${price}</p>
      <p><strong>Delivery Address:</strong> ${address}</p>
      <p><strong>Contact Number:</strong> ${phone}</p>
    </div>

    <div style="text-align: center; margin-top: 20px; font-size: 14px; color: #6a040f;">
      <p>We hope you enjoy your fragrance experience!</p>
      <p>— The Suroor Scents Team</p>
    </div>
  </div>
  `,
});
    // Save order to database
    const order = await prisma.order.create({
      data:{
        name,
        email,
        address,
        phone,
        product: perfumeName,
        quantity: 1,
        price: parseFloat(price.replace(/[^0-9.-]+/g,""))
      }
    })

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
