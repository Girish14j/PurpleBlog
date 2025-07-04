import * as React from 'react';
import { DayPicker } from 'react-day-picker';

import { cn } from '../../lib/utils';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={classNames}
      footer={
        props.footer || (
          <div className='text-center text-sm text-muted-foreground'>
            Select a date.
          </div>
        )
      }
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
