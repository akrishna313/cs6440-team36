import { useQuery as useQueryBase, useMutation as useMutationBase } from '@tanstack/react-query';
import { useToast } from '@chakra-ui/react';

const commonToastProps = {
  variant: 'subtle',
  duration: 2000,
  isClosable: true,
};

export const useQuery = useQueryBase;

export const useMutation = (args: any) => {
  const toast = useToast();
  return useMutationBase({
    ...args,
    onSuccess: (d: any) => {
      toast({
        ...commonToastProps,
        title: 'Success!',
        status: 'success',
      });
      args.onSuccess(d);
    },
    onError: (d: any) => {
      toast({
        ...commonToastProps,
        title: 'whoops',
        status: 'warning',
      });
      args.onError(d);
    },
  });
};
