import { Button } from "@/components/ui/button";
import { Typography } from "./components";
import { Field, FieldGroup, FieldLabel, FieldSet } from "./components/ui/field";
import { Input } from "./components/ui/input";

function App() {
  return (
    <div className="bg-background flex flex-col items-center gap-5 ">
      <Typography type="h1">Intrinsic Value Calculator</Typography>

      <div className="w-full max-w-md p-5">
        <form>
          <FieldGroup>
            <FieldSet>
              <Field>
                <FieldLabel htmlFor="ticker-name">Insert the ticker</FieldLabel>
                <Input required id="ticker-name" placeholder="AMD" />
              </Field>
            </FieldSet>

            <Field orientation="responsive">
              <Button type="submit">Submit</Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
}

export default App;
