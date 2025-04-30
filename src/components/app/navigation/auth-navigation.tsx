import { Link, useLocation } from "react-router";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui"

const AuthNavigation = () => {
  const { pathname } = useLocation();

  return (
    <Tabs value={pathname} className="mx-auto max-w-sm py-6">
      <TabsList className="w-full">
        <TabsTrigger value="/login" asChild>
          <Link to="/login">Login</Link>
        </TabsTrigger>
        <TabsTrigger value="/signup" asChild>
          <Link to="/signup">Signup</Link>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
};

export { AuthNavigation };
