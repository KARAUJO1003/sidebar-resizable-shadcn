import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'

interface InputUserFieldProps extends ComponentProps<'input'> {
  name: string
  placeholder: string
}

export function InputUserField({
  name,
  placeholder,
  type = 'text',
  ...rest
}: InputUserFieldProps): JSX.Element {
  const { control } = useFormContext()
  return (
    <div className="flex gap-2 items-center w-full ">
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel className="sr-only min-w-fit  text-end" htmlFor={name}>
              Usuário
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                id={name}
                placeholder={placeholder}
                className="w-full"
                type={type}
                {...rest}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
