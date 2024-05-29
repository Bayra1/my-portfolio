'use client'
import "../styles/bubbleButton.css";
import { usePathname, useRouter } from "next/navigation";

export const HireMeButton = ({name, path}:{name:string, path:string}) => {

  const pathName = usePathname();
  const isActive = pathName === `/${path}`;
  const router = useRouter();

  const navigateToSkill = () => {
    router.push(`/${path}`);
  };

  return (
    <button onClick={navigateToSkill} className="italic">
      <ul>
        <li className={isActive ? "active" : ""}>
          {name}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </li>
      </ul>
    </button>
  );
};
