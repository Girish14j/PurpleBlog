import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";

interface NavbarProps {
  onSearch?: (query: string) => void;
  showSearch?: boolean;
}

const Navbar = ({ onSearch, showSearch = false }: NavbarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <header className="border-b bg-background sticky top-0 z-10">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xl font-bold text-primary">
            PurpleBlog
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/categories" className="text-sm font-medium transition-colors hover:text-primary">
              Categories
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          {showSearch && (
            <div className="relative hidden md:flex items-center">
              <div className="absolute left-2.5 text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <Input
                type="search"
                placeholder="Search posts..."
                className="pl-8 md:w-[200px] lg:w-[300px]"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          )}
          
          <Link to="/create">
            <Button variant="default" size="sm">
              New Post
            </Button>
          </Link>
          
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
