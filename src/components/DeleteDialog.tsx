import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import * as React from 'react';

interface DeleteDialogProps {
  onDelete: () => void;
  title?: string;
  description?: string;
  trigger?: React.ReactNode;
}

const DeleteDialog = ({
  onDelete,
  title = 'Are you sure?',
  description = 'This action cannot be undone. This will permanently delete this post.',
  trigger,
}: DeleteDialogProps) => {
  const DeleteButton = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
  >((props, ref) => (
    <Button
      ref={ref}
      variant='destructive'
      size='sm'
      className='gap-2'
      {...props}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='h-4 w-4'
      >
        <path d='M3 6h18' />
        <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6' />
        <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' />
      </svg>
      Delete
    </Button>
  ));

  DeleteButton.displayName = 'DeleteButton';

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {trigger || <DeleteButton />}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={e => {
              e.preventDefault();
              onDelete();
            }}
            className='bg-destructive text-destructive-foreground hover:bg-destructive/90'
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDialog;
