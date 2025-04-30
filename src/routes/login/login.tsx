import { LoginForm } from "@/components/form";

const Login = () => {
  return (
    <div className="flex w-full items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
};

export { Login };
