import { useEffect } from "react";
import { AxiosError } from "axios";
import { useNavigate, isRouteErrorResponse, useRouteError } from "react-router";
import {
  Text,
  Heading,
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui";

const ErrorBoundary = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    if ((error instanceof AxiosError) && error.response?.status === 401) {
      navigate("/login");
    }
  }, [error, navigate]);

  const title = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : "Error";
  const description = (error instanceof AxiosError)
    ? (import.meta.env.DEV
      ? error.response?.data?.message
      : error.response?.data?.error
    )
    : isRouteErrorResponse(error)
    ? error.data
    : (error instanceof Error)
    ? error.message
    : "Unknown Error";

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Card variant="error">
        <CardHeader>
          <Heading as="h2" size="h2">{title}</Heading>
        </CardHeader>
        <CardContent>
          <Text>{description}</Text>
        </CardContent>
      </Card>
    </div>
  );
};

export { ErrorBoundary };
