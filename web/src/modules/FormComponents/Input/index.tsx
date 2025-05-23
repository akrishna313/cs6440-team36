import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { type UseFormRegisterReturn } from 'react-hook-form';

type TextInputProps = {
    label: string;
    defaultValue?: any;
    isRequired?: boolean;
    type?: React.HTMLInputTypeAttribute; // default is text: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_types
    registration: UseFormRegisterReturn<any>;
};

const TextInput = ({ label, isRequired, type, registration, defaultValue }: TextInputProps) => (
    <FormControl isRequired={isRequired}>
        <FormLabel>{label}</FormLabel>
        <Input
            type={type}
            defaultValue={defaultValue}
            {...registration}
            {...(type === 'number' ? { onWheel: (e) => (e.target as HTMLElement).blur() } : {})}
        />
    </FormControl>
);

export default TextInput;
