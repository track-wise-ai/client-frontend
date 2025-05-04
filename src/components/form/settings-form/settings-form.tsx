import { Form, useNavigation, useLoaderData } from "react-router";
import { Earth, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils"
import {
  Card,
  Table,
  Button,
  TableRow,
  TableBody,
  TableCell,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui";
import { GoogleFields } from "./google-fields";
import { JiraFields } from "./jira-fields";
import { AIFields } from "./ai-fields";
import type { FC, ComponentProps } from "react";
import type { Settings } from "@/types";

const SettingsForm: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  const navigation = useNavigation();
  const loaderData = useLoaderData<Settings>();
  const isSubmitting = navigation.state === "submitting";
  const { google, ai } = loaderData || {};

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>Your settings</CardDescription>
        </CardHeader>
        <CardContent>
          <Form method="post">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium w-36">Google Calendar:</TableCell>
                  <TableCell>
                    <GoogleFields google={google} />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">AI:</TableCell>
                  <TableCell>
                    <AIFields ai={ai} />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Jira:</TableCell>
                  <TableCell>
                    <JiraFields jira={loaderData.jira}/>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="flex">
              <Button type="submit" className="w-24" disabled={isSubmitting}>
                {isSubmitting ? <LoaderCircle className="animate-spin" /> : "Save"}
              </Button>
            </div>
          </Form>

        </CardContent>
      </Card>
    </div>
  );
};

export { SettingsForm };
