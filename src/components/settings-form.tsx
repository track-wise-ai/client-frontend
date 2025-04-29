import { Form, useNavigation, useLoaderData } from "react-router";
import { Earth, CheckCheck, LoaderCircle } from "lucide-react";
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
import { MultiSelect } from "@/components/form"
import type { FC, ComponentProps } from "react";

const ConnectService: FC<{ connect: boolean, link: string }> = ({ connect, link }) => {
  return connect ? (
    <Button type="button" asChild variant="success" disabled>
      <a href={link ?? ""} target="_blank" aria-disabled><CheckCheck /> Connected</a>
    </Button>
  ) : (
    <Button type="button" asChild variant="destructive">
      <a href={link ?? ""} target="_blank"><Earth /> Connect</a>
    </Button>
  )
};

const SettingsForm: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  const navigation = useNavigation();
  const loaderData = useLoaderData();
  const isSubmitting = navigation.state === "submitting";
  const { google } = loaderData || {};
  const options = (google?.calendars?? []).map((calendar) => ({
    value: calendar.id,
    label: calendar.summary,
  }));

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
                  <TableCell className="font-medium">Google Calendar:</TableCell>
                  <TableCell>
                    <MultiSelect
                      name="googleCalendars"
                      options={options}
                      defaultSelected={google?.selectedCalendars || []}
                    />
                    <ConnectService connect={google?.connect} link={google?.authUrl} />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">ChatGPT:</TableCell>
                  <TableCell>
                    <ConnectService connect={false} link={"#"} />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Jira:</TableCell>
                  <TableCell>
                    <ConnectService connect={false} link={"#"} />
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
