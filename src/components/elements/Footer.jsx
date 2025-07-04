import logo from "../../assets/icon.svg";
import { Container } from "../shared/Container";
import { navItems } from "./Navbar";
import { NavItem } from "../shared/NavItem";

export const Footer = () => {
  return (
    <footer className="relative pt-28 rounded-t-3xl bg-box">
      <Container className="pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:m-0">
            <img src={logo} className="w-7 h-7" alt="" />
            <span className="text-lg font-semibold text-heading-1">StudioScale</span>
          </div>

          <ul className="flex gap-6 text-heading-1">
            {navItems.map((item, key) => {
              return <NavItem key={key} href={item.href} text={item.text} />;
            })}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
