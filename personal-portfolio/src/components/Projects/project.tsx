"use client";
import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";
import { HoverEffect } from "../ui/card-hover-effect";

export function DisplayingProjects() {
  const { isEng } = useContext(LanguageContext);

  const projects = [
    {
      title: isEng === "EN" ? "Todo-List" : "Түдү лист",
      description:
        isEng === "EN"
          ? "The Todo list offers an array of features to facilitate effective time management and boost productivity, empowering users to organize their tasks efficiently."
          : "Todo жагсаалт нь цагийг үр дүнтэй удирдах, бүтээмжийг нэмэгдүүлэх, хэрэглэгчдэд даалгавраа үр дүнтэй зохион байгуулах боломжийг олгодог олон боломжуудыг санал болгодог.",
      link: "https://github.com/Bayra1/Khanboard-TODO-list",
    },
    {
      title: isEng === "EN" ? "Blog Web-Site" : "Блог вэб сайт",
      description:
        isEng === "EN"
          ? "The blog website exclusively utilizes the Dev.to API, offering readers curated content from the vibrant developer community. It provides a seamless browsing experience for accessing insightful articles and discussions on programming, technology, and more."
          : "Блогын вэб сайт нь Dev.to API-г дангаар нь ашигладаг бөгөөд уншигчдад хөгжүүлэгчийн идэвхтэй нийгэмлэгээс бэлтгэсэн контентыг санал болгодог. Энэ нь програмчлал, технологи болон бусад зүйлийн талаархи ойлголттой нийтлэл, хэлэлцүүлэгт нэвтрэх боломжийг олгодог.",
      link: "https://github.com/Bayra1/Shifting-pages",
    },
    {
      title:
        isEng === "EN"
          ? "Income-and-Expense-tracker"
          : "Орлого болон Зарлага хянагч",
      description:
        isEng === "EN"
          ? "An income and expense tracker is a tool for monitoring finances by recording income sources and expenditures, aiding in budgeting and financial planning."
          : "Орлого, зарлага хэмжигч нь орлогын эх үүсвэр, зарлагыг бүртгэх, төсөв, санхүүгийн төлөвлөлтөд туслах замаар санхүүг хянах хэрэгсэл юм.",
      link: "https://github.com/Bayra1/FundFlow",
    },
    {
      title: isEng === "EN" ? "Food-Delivery" : "Хоол хүргэлт",
      description:
        isEng === "EN"
          ? "The food delivery website is an online platform where users can browse menus, place orders from various restaurants, and have their food delivered to their location."
          : "Хоол хүргэлтийн вэб сайт нь хэрэглэгчид цэс үзэх, төрөл бүрийн ресторанаас захиалга өгөх, хоолоо байгаа газартаа хүргэх боломжтой онлайн платформ юм.",
      link: "https://github.com/Bayra1/DeliveryFood",
    },
    {
      title: isEng === "EN" ? "E-Commerce" : "Цахим худалдааны вэб сайт",
      description:
        isEng === "EN"
          ? "The e-commerce website is an online platform where businesses showcase and sell their products or services to customers over the internet. It typically includes features such as product listings, shopping cart functionality, and order management systems."
          : "Цахим худалдааны вэбсайт нь бизнес эрхлэгчид бүтээгдэхүүн, үйлчилгээгээ интернетээр дамжуулан хэрэглэгчдэдээ танилцуулж, борлуулдаг онлайн платформ юм. Энэ нь ихэвчлэн бүтээгдэхүүний жагсаалт, дэлгүүрийн тэрэгний ажиллагаа, захиалгын удирдлагын систем зэрэг функцуудыг агуулдаг.",
      link: "https://github.com/LP23-1A/E-Commerce-Team-1",
    },
    {
      title: isEng === "EN" ? "Pinecone-Internship" : "Pinecone-дадлага",
      description:
        isEng === "EN"
          ? "The website offers robust functionality for creating, managing, and tracking articles, including features for user engagement such as article reading statistics, content management, and the ability to save and manage articles for future reference."
          : "Энэхүү вэб сайт нь нийтлэл унших статистик, агуулгын менежмент, цаашдын лавлагаа болгон нийтлэлийг хадгалах, удирдах зэрэг хэрэглэгчийн оролцоонд зориулсан функцуудыг багтаасан нийтлэл үүсгэх, удирдах, хянах хүчирхэг функцуудыг санал болгодог.",
      link: "https://intern-cms-dashboard-pinecone-studio.vercel.app/",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
