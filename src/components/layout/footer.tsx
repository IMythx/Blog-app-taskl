import { Link } from "@/navigation";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-stone-100 grid gap-2 sm:gap-10 w-full p-4 sm:p-10">
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-0 sm:items-center justify-between">
        <div className="max-w-[280px] grid gap-6">
          <div className="grid gap-3">
            <p className="font-bold text-base sm:text-lg">About</p>
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="grid gap-1">
            <p className="font-semibold text-sm sm:text-base">
              Email : <span className="font-normal">info@jstemplate.net</span>
            </p>
            <p className="font-semibold text-sm sm:text-base">
              Phone : <span className="font-normal">880 123 456 789</span>
            </p>
          </div>
        </div>
        <div>
          <p className="font-bold text-base sm:text-lg">Quick Link</p>
          <ul className="list-none">
            {quickLinks.map((link, index) => (
              <li>
                <QuickLink>{link}</QuickLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold text-base sm:text-lg">Category</p>
          <ul className="list-none">
            {categoriesLinks.map((link, index) => (
              <li>
                <QuickLink href={link.to}>{link.name}</QuickLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <br />
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-start sm:items-center w-full justify-between">
        <Link
          href={"/"}
          className="font-bold text-lg sm:text-2xl whitespace-nowrap flex items-center gap-1"
        >
          <Image src={logo} width={30} height={30} alt="logo" />
          BLOG APP{" "}
          <span className="text-sm sm:text-base font-normal">
            All Rights Reserved
          </span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <Button className="text-sm sm:text-base" variant={"link"}>
            Terms of Use
          </Button>
          <Button className="text-sm sm:text-base" variant={"link"}>
            Privacy Policy
          </Button>
          <Button className="text-sm sm:text-base" variant={"link"}>
            Cookie Policy
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const categoriesLinks = [
  {
    name: "Business",
    to: "categories/business",
  },
  {
    name: "Entertainment",
    to: "categories/entertainment",
  },
  {
    name: "Health",
    to: "categories/health",
  },
  {
    name: "Science",
    to: "categories/science",
  },
  {
    name: "Sports",
    to: "categories/sports",
  },
];

const quickLinks = ["Home", "About", "Blog", "Archived", "Author"];

const QuickLink = ({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  return (
    <Button variant={"link"} className="p-0 pl-2">
      <Link className="text-sm sm:text-base" href={href}>
        {children}
      </Link>
    </Button>
  );
};
