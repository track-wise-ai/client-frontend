import { useState } from "react";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectTrigger,
  SelectContent,
} from "@/components/ui";
import { FormField } from "@/components/form";
import type { FC } from "react";
import type { Settings } from "@/types";

type Props = {
  jira: Settings["jira"];
};

const JiraFields: FC<Props> = ({ jira }) => {
  const [jiraAuthType, setJiraAuthType] = useState<string>(jira.authType);

  return (
    <>
      <FormField id="jiraUrl" type="text" label="Jira Url" defaultValue={jira.url} />
      <FormField id="jiraIssueKey" type="text" label="Jira Issue Key" defaultValue={jira.issueKey} />
      <FormField id="jiraAuthType" label="Jira Auth Type">
        <Select name="jiraAuthType" defaultValue={jira.authType} onValueChange={setJiraAuthType}>
          <SelectTrigger>
            <SelectValue placeholder="Select a auth type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
                {/* Paste your issued OAuth "Bearer" token */}
              <SelectItem value="bearer">Bearer</SelectItem>
                {/* <Enter your Jira email and API token */}
              <SelectItem value="basic">Basic</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormField>
      {jiraAuthType === "basic" && (
        <FormField id="jiraEmail" type="text" label="Jira User Email" defaultValue={jira.email} />
      )}
      <FormField id="jiraApiKey" type="text" label="Jira Api Key" defaultValue={jira.apiKey} />
    </>
  );
};

export { JiraFields };
