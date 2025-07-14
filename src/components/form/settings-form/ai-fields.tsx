import { AIModelsSelect, FormField, SummaryLevelSelect } from "@/components/form";
import { Textarea } from "@/components/ui";
import type { FC } from "react";
import type { UserSettings } from "@/types";

type Props = {
  ai: UserSettings["ai"];
};



const AIFields: FC<Props> = ({ ai }) => {
  return (
    <section>
      <FormField id="aiModel" label="AI Model">
        <AIModelsSelect {...ai}/>
      </FormField>

      <FormField id="summaryLevel" label="Summary Level">
        <SummaryLevelSelect {...ai}/>
      </FormField>

      <FormField id="fineTuning" label="Fine Tuning">
        <Textarea name='fineTuning' defaultValue={ai?.fineTuning ?? ''} />
      </FormField>
    </section>
  );
};

export { AIFields };
