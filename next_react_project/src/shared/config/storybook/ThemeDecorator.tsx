import { Story } from "@storybook/react";
import { Theme } from "../../contexts/theme-context";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
