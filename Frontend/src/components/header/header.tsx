import { useIsMobile } from "@/hooks";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { ThemeToggle } from "../themeToggle";
import { Typography } from "../typography";

type ItemsType = {
  text: string;
  link: string;
};

export interface HeaderProps {
  logo: {
    icon?: string;
    text: string;
    link: string;
  };
  items?: ItemsType[];
}

export const Header: React.FC<HeaderProps> = ({ logo, items }) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex justify-between bg-sidebar p-2 rounded-b-md">
      <a href={logo.link} className="flex">
        {logo.icon && <img src={logo.icon} alt="" />}
        <Typography type="h3" className="text-primary">
          {logo.text}
        </Typography>
      </a>

      <NavigationMenu viewport={isMobile}>
        <NavigationMenuList className="flex-wrap">
          {items?.map((el) => (
            <NavigationMenuItem key={el.text}>
              <NavigationMenuLink asChild>
                <a href={el.link}>{el.text}</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <ThemeToggle />
    </div>
  );
};
