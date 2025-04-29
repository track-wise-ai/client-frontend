import { Form, Link } from "react-router";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FormField } from "@/components/form"
import type { FC, ComponentProps } from "react";


const LoginForm: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form method="post">
            <div className="flex flex-col gap-6">
            <FormField id="email" type="text" label="Email" />
            <FormField id="password" type="password" label="Password" />

              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="underline underline-offset-4">
                Signup
              </Link>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
};

export { LoginForm };
