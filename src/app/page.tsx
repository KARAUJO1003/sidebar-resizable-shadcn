'use client'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import MultipleSelector from '@/components/ui/multi-select'
import { Separator } from '@/components/ui/separator'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Modules, OPTIONS_PERMISSIONS, Roles } from './components/data'
import { InputUserField } from './components/Form/input-user-field'
import { createUserSchema } from './components/Form/create-user-schema'
import { RegisterRolesField } from './components/Form/register-roles-field'
import { SectionHeader } from './components/Form/section-header'
import { toast } from 'sonner'

export default function Home() {
  const [selectedRoles, setSelectedRoles] = useState<string[]>(['Usuário'])
  const [selectedModules, setSelectedModules] = useState<string[]>([
    'Documentos',
  ])

  const form = useForm<z.infer<typeof createUserSchema>>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      username: 'kaesyo',
      email: 'kaesyo@ferroeste.com.br',
      roles: ['Usuário'],
      modules: ['Documentos'],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'permissions',
  })

  function onSubmit(values: z.infer<typeof createUserSchema>) {
    console.log(values)
    toast.success('Formulario enviado com sucesso!', {
      description: JSON.stringify(values),
      position: 'top-center',
      closeButton: true,
      important: true,
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <main className="grid grid-cols-[450px_1fr] gap-2 min-h-screen flex-col items-center justify-between p-10">
          <section className="w-full h-full space-y-4">
            <Card className="space-y-2 bg-transpareant border-none rounded-none">
              <SectionHeader title="Dados do usuário" />
              <CardContent className="flex bg-zinc-950/30 items-center gap-4 border rounded-lg  p-4">
                <Avatar className="size-20 ring-2 ring-offset-4 ring-emerald-500 ring-offset-secondary rounded-xl hover:rounded-3xl transition-all ease-out duration-500">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <article className="w-full flex flex-col gap-2">
                  <InputUserField
                    placeholder="username"
                    type="text"
                    name="username"
                  />
                  <InputUserField
                    placeholder="e-mail"
                    type="email"
                    name="email"
                  />
                </article>
              </CardContent>
            </Card>
            <Separator />
            <article className="flex flex-col gap-2 items-center w-full ">
              <SectionHeader count={selectedRoles.length} title="Role" />
              <RegisterRolesField
                setSelectedValues={setSelectedRoles}
                options={Roles}
                name="roles"
              />
              <Button
                className="h-12 w-full bg-secondary opacity-20 hover:opacity-40 transition-all duration-200 border text-muted-foreground"
                onClick={() => toast.success('Clicou!!!')}
                variant="link"
                type="button"
              >
                <span className="sr-only">Adicionar role</span>
                <Plus className="size-5" />
              </Button>
            </article>
          </section>
          <section className=" w-full space-y-4 h-full">
            <div className="space-y-2">
              <SectionHeader count={selectedRoles.length} title="Modulo" />
              <RegisterRolesField
                setSelectedValues={setSelectedModules}
                options={Modules}
                className="grid grid-cols-5  gap-2 items-center w-full"
                name="modules"
              />
            </div>
            <Separator />
            <div>
              <SectionHeader title="Permissões" />
              <article className="space-y-2  py-2">
                {selectedModules.map((module, index) => {
                  const currentModule = Modules.find(
                    (item) => item.name === module,
                  )
                  return (
                    <div
                      key={index}
                      className="group flex items-center border bg-secondary divide-x-2 divide-muted-foreground/20 rounded-md focus-within:ring-2 focus-within:ring-offset-2 ring-emerald-700 ring-offset-gray-900"
                    >
                      <Label className="group-focus-within:text-emerald-500 min-w-32 text-xs text-ellipsis line-clamp-1  rounded-l-2xl text-start flex-1 items-center px-3 justify-start border">
                        {currentModule?.name}
                      </Label>

                      <FormField
                        control={form.control}
                        name={`permissions.${index}.permission`}
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <MultipleSelector
                                {...field}
                                className=" items-center flex rounded-none rounded-r"
                                defaultOptions={OPTIONS_PERMISSIONS}
                                emptyIndicator="Sem opções disponíveis"
                                hideClearAllButton
                                hidePlaceholderWhenSelected
                                placeholder="Selecione as permissões"
                                badgeClassName="bg-emerald-500 text-black font-bold hover:bg-emerald-600"
                                value={field.value || []}
                                creatable
                                onChange={(selected) =>
                                  field.onChange(selected)
                                }
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )
                })}
              </article>
            </div>
          </section>
          <Button
            type="submit"
            className="fixed bottom-10 left-28 bg-emerald-500 hover:bg-emerald-600 transition-all duration-200"
          >
            Salvar registro
          </Button>
        </main>
      </form>
    </Form>
  )
}
