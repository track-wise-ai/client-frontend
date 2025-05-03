import { FormField } from "@/components/form";
import type { FC } from "react";
import type { Settings } from "@/types";

type Props = {
  jira: Settings["jira"];
};

const JiraFields: FC<Props> = ({ jira }) => {
  return (
    <>
      <FormField id="jiraUrl" type="text" label="Jira Url" defaultValue={jira.url} />
      <FormField id="jiraApiKey" type="text" label="Jira Api Key" defaultValue={jira.apiKey} />
      <FormField id="jiraIssueKey" type="text" label="Jira Issue Key"  defaultValue={jira.issueKey} />
    </>
  );
};

export { JiraFields };
