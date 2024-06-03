"use client";
import { HoverEffect } from "../ui/card-hover-effect";

export function DisplayingProjects() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Todo-List",
    description:
      "The Todo list offers an array of features to facilitate effective time management and boost productivity, empowering users to organize their tasks efficiently.",
    link: "https://intern-cms-dashboard-pinecone-studio.vercel.app/",
  },
  {
    title: "Blog Web-Site",
    description:
      "The blog website exclusively utilizes the Dev.to API, offering readers curated content from the vibrant developer community. It provides a seamless browsing experience for accessing insightful articles and discussions on programming, technology, and more.",
    link: "https://intern-cms-dashboard-pinecone-studio.vercel.app/",
  },
  {
    title: "Income-and-Expense-tracker",
    description:
      "An income and expense tracker is a tool for monitoring finances by recording income sources and expenditures, aiding in budgeting and financial planning.",
    link: "https://intern-cms-dashboard-pinecone-studio.vercel.app/",
  },
  {
    title: "Food-Delivery",
    description:
      "The A food delivery website is an online platform where users can browse menus, place orders from various restaurants, and have their food delivered to their location.",
    link: "https://intern-cms-dashboard-pinecone-studio.vercel.app/",
  },
  {
    title: "E-Commerce",    
    description:
      "The e-commerce website is an online platform where businesses showcase and sell their products or services to customers over the internet. It typically includes features such as product listings, shopping cart functionality, and order management systems.",
    link: "https://intern-cms-dashboard-pinecone-studio.vercel.app/",
  },
  {
    title: "Pinecone-Internship",
    description:
      "The website offers robust functionality for creating, managing, and tracking articles, including features for user engagement such as article reading statistics, content management, and the ability to save and manage articles for future reference.",
    link: "https://intern-cms-dashboard-pinecone-studio.vercel.app/",
  },
];
