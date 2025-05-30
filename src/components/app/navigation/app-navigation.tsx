import { Link } from "react-router";
import { LogOut, Settings } from "lucide-react";
import { useAuth } from "@/hooks";
import { getUserInitials } from "@/lib";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui";
import { FullLogo } from "@/components/icons";

const AppNavigation = () => {
  const { getUser } = useAuth();
  const user = getUser();

  return (
    <div className="flex justify-between">
      <div>
        <Link to="/"><FullLogo/></Link>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
          <Avatar>
              <AvatarImage src="..." />
              <AvatarFallback>{getUserInitials(user)}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem>
              <Settings/>
              <Link to="/settings">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator/>
            <DropdownMenuItem>
              <LogOut/>
              <Link to="/logout">Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
};

export { AppNavigation };
