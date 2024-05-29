"use client";
import "../styles/OtherButtons.css";
import { usePathname, useRouter } from "next/navigation";

export const AboutButton = ({ name, path }: { name: string; path: string }) => {
  const pathName = usePathname();
  const isActive = pathName === `/${path}`;
  const router = useRouter();

  const navigateToSkill = () => {
    router.push(`/${path}`);
  };

  return (
    <button onClick={navigateToSkill} className="text-lg italic">
      <ul>
        <li className={isActive ? "active" : ""}>{name}</li>
      </ul>
    </button>
  );
};
