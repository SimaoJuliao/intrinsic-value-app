import { Header, Typography } from "@/components";
import {
  Button,
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
  Input,
} from "@/components/ui";
import { useStore } from "@/store";
import { useEffect } from "react";

export const App = () => {
  const theme = useStore((state) => state.theme);

  useEffect(() => {
    document.getElementById("root")?.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      <Header logo={{ text: "Intrinsic Value Calculator", link: "/" }} />

      <div className="flex flex-col items-center gap-5 p-5">
        <Typography type="h1">Intrinsic Value Calculator</Typography>

        <div className="w-full max-w-md p-5">
          <form>
            <FieldGroup>
              <FieldSet>
                <Field>
                  <FieldLabel htmlFor="ticker-name">
                    Insert the ticker
                  </FieldLabel>
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
    </>
  );
};

export default App;
