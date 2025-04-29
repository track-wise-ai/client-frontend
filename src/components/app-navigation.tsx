import { Link } from "react-router";
import { LogOut, Settings } from "lucide-react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui";
import { Logo } from "@/components/icons";

const AppNavigation = () => {
  return (
    <div className="flex justify-between">
      <div>
        <Link to="/"><Logo/></Link>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
          <Avatar>
              <AvatarImage src="..." />
              <AvatarFallback>IM</AvatarFallback>
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
