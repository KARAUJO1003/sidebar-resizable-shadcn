import { FormField } from '@/components/ui/form'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { cn } from '@/lib/utils'
import { CheckCircle, Circle } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

interface RegisterRolesFieldProps {
  name: 'roles' | 'modules'
  options: Array<any>
  className?: string
  setSelectedValues: (value: string[]) => void
}

export function RegisterRolesField({
  setSelectedValues,
  name,
  options,
  className,
}: RegisterRolesFieldProps) {
  const { control, setValue } = useFormContext()

  const handleRoleChange = (value: string[]) => {
    if (value.length > 0) {
      setSelectedValues(value)
      setValue(name, value as [string, ...string[]])
    }
  }

  const ifUsersOrIndicators = (role: string): boolean => {
    return role === 'Usuários' || role === 'Indicadores'
  }

  const disabledIfOnlyOneOptionSelected = (
    value: string[],
    role: string,
  ): boolean => {
    return value.length === 1 && value[0] === role
  }

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <ToggleGroup
          onValueChange={(value) => handleRoleChange(value)}
          className={cn(['flex-col w-full gap-2'], className)}
          type="multiple"
          variant="outline"
          {...field}
        >
          {options.map((role) => (
            <ToggleGroupItem
              key={role.name}
              value={role.name}
              className="w-full h-12 group"
              disabled={disabledIfOnlyOneOptionSelected(field.value, role.name)}
            >
              <div className="flex flex-col justify-start">
                <span className="text-start text-xs line-clamp-1 text-ellipsis">
                  {role.name}
                </span>
                <span
                  className={cn(['text-xs text-start'], {
                    'text-destructive': ifUsersOrIndicators(role.name),
                    'text-muted-foreground': !ifUsersOrIndicators(role.name),
                  })}
                >
                  {ifUsersOrIndicators(role.name) ? 0 : 2} permissões
                </span>
              </div>

              {field.value.includes(role.name) ? (
                <CheckCircle className="size-5 ml-auto text-green-500" />
              ) : (
                <Circle className="size-5 ml-auto text-muted" />
              )}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      )}
    />
  )
}
