import { FormField } from "@/components/form";
import type { FC } from "react";
import type { Settings } from "@/types";

type Props = {
  jira: Settings["jira"];
};

const JiraFields: FC<Props> = ({ jira }) => {
  return (
    <>
      <FormField id="jiraUrl" type="text" label="Jira Url" value={jira.url} />
      <FormField id="jiraApiKey" type="text" label="Jira Api Key" value={jira.apiKey} />
      <FormField id="jiraIssueKey" type="text" label="Jira Issue Key"  value={jira.issueKey} />
    </>
  );
};

export { JiraFields };
