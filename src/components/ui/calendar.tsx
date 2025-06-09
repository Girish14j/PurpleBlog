import * as React from "react";
import { DayPicker } from "react-day-picker";

import { cn } from "../../lib/utils";


export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
return (
    <div className={cn("p-3", className)}>
        <DayPicker
            showOutsideDays={showOutsideDays}
            classNames={classNames}
            // Remove the 'components' prop if not supported by your version of react-day-picker
            {...props}
        />
    </div>
);
}
Calendar.displayName = "Calendar";

export { Calendar };