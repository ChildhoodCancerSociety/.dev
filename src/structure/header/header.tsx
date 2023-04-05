import ThemeToggle from "@/components/ThemeToggle";

const Header: React.FC = () => <header className="sticky bg-froggy-100 dark:bg-froggy-900 px-8 py-4 flex flex-row min-w-full items-center">
  <div className="nav-item">LOGO</div>
  <div className="nav-item nav-status flex-grow"><div className="text-lg">M:&nbsp;</div>
    <span>asdfasdfasdf</span>
  </div>
  <div className="nav-item flex-shrink">
    <ThemeToggle />
  </div>
</header>;

export default Header;
