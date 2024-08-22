'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useState } from 'react'
import { CheckCircle, Circle, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import MultipleSelector from '@/components/ui/multi-select'
import { Separator } from '@/components/ui/separator'

const Roles = [
  { id: 'a', name: 'Usuário' },
  { id: 'b', name: 'Supervisor' },
  { id: 'c', name: 'Coordenador' },
  { id: 'd', name: 'Gerente' },
  { id: 'e', name: 'Superintendente' },
  { id: 'f', name: 'Admin' },
]

const Modules = [
  { id: 'a', name: 'Documentos' },
  { id: 'b', name: 'Organograma' },
  { id: 'c', name: 'Sincronismo' },
  { id: 'd', name: 'Paradas' },
  { id: 'e', name: 'Materiais' },
  { id: 'f', name: 'Usuarios' },
  { id: 'g', name: 'Indicadores' },
  { id: 'h', name: 'PCM' },
  { id: 'i', name: 'Materiais' },
  { id: 'j', name: 'Sincronismo AFs' },
  { id: 'k', name: 'Sincronismo LC' },
]
type PermissionsProps = {
  label: string
  value: string
}

const OPTIONS_PERMISSIONS: PermissionsProps[] = [
  { label: 'ver', value: 'ver' },
  { label: 'upload', value: 'upload' },
  { label: 'alterar-posicao', value: 'alterar-posicao' },
  { label: 'editar', value: 'editar' },
  { label: 'cadastro', value: 'cadastro' },
  { label: 'excluir', value: 'excluir' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Angular', value: 'angular' },
  { label: 'Ember', value: 'ember' },
  { label: 'Gatsby', value: 'gatsby' },
  { label: 'Astro', value: 'astro' },
]

export default function Home() {
  const [countRolesSelected, setCounRolesSelected] = useState<string[]>(['a'])
  const [countModulesSelected, setCounModulesSelected] = useState<string[]>([
    'a',
  ])

  return (
    <main className="grid grid-cols-[450px_1fr] gap-2 min-h-screen flex-col items-center justify-between p-10">
      <section className="w-full h-full space-y-4">
        <Card className="space-y-2 bg-transparent border-none rounded-none">
          <CardHeader className="bg-muted/20  border rounded-md py-2">
            <CardDescription>Dados do usuário</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-4 border rounded-lg  bg-card p-4">
            <Avatar className="size-20 ring-2 ring-offset-4 ring-emerald-500 ring-offset-secondary rounded-xl hover:rounded-3xl transition-all ease-out duration-500">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <article className="w-full flex flex-col gap-2">
              <div className="flex gap-2 items-center w-full ">
                <Label
                  className="sr-only min-w-fit  text-end"
                  htmlFor="username"
                >
                  Usuário
                </Label>
                <Input
                  id="username"
                  placeholder="kaesyo felix"
                  className="w-full"
                  type="text"
                />
              </div>
              <div className="flex gap-2 items-center w-full ">
                <Label className="sr-only min-w-fit  text-end" htmlFor="email">
                  Usuário
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="kaesyo.felix@email.com"
                  className="w-full"
                />
              </div>
            </article>
          </CardContent>
        </Card>
        <Separator />
        <article className="flex flex-col gap-2 items-center w-full ">
          <CardHeader className="bg-muted/20  w-full border rounded-md py-2">
            <CardDescription>
              {countRolesSelected?.length}{' '}
              {countRolesSelected.length > 1 ? 'Roles' : 'Role'}{' '}
              {countRolesSelected.length > 1 ? 'selecionadas' : 'selecionada'}
            </CardDescription>
          </CardHeader>
          <div className="w-full">
            <ToggleGroup
              defaultValue={['a']}
              type="multiple"
              variant="outline"
              className="flex-col w-full gap-2"
              onValueChange={(value) => setCounRolesSelected(value)}
            >
              {Roles.map((role) => (
                <ToggleGroupItem
                  key={role.id}
                  value={role.id}
                  className="w-full h-12 group"
                  disabled={
                    countRolesSelected?.length === 1 &&
                    countRolesSelected[0] === role.id
                  }
                >
                  {role.name}
                  {countRolesSelected.includes(role.id) ? (
                    <CheckCircle className="size-5 ml-auto text-green-500" />
                  ) : (
                    <Circle className="size-5 ml-auto text-muted" />
                  )}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
            <Button
              variant="link"
              className="h-12 w-full bg-secondary opacity-20 hover:opacity-40 transition-all duration-200 border text-muted-foreground"
            >
              <span className="sr-only">Adicionar role</span>
              <Plus className="size-5" />
            </Button>
          </div>
        </article>
      </section>
      <section className=" w-full space-y-4 h-full">
        <div className="space-y-2">
          <CardHeader className="bg-muted/20  border rounded-md py-2">
            <CardDescription>
              {countModulesSelected?.length}{' '}
              {countModulesSelected.length > 1 ? 'Modulos' : 'Modulo'}{' '}
              {countModulesSelected.length > 1 ? 'selecionadas' : 'selecionada'}
            </CardDescription>
          </CardHeader>

          <ToggleGroup
            defaultValue={['a']}
            type="multiple"
            variant="outline"
            className="grid grid-cols-5  gap-2 items-center w-full"
            onValueChange={(value) => setCounModulesSelected(value)}
          >
            {Modules.map((Module) => (
              <ToggleGroupItem
                key={Module.id}
                value={Module.id}
                className="w-full h-12 group"
                disabled={
                  countModulesSelected?.length === 1 &&
                  countModulesSelected[0] === Module.id
                }
              >
                <div className="flex flex-col justify-start">
                  <span className="text-start text-xs line-clamp-1 text-ellipsis">
                    {Module.name}
                  </span>
                  <span className="text-xs text-start text-muted-foreground">
                    2 permissões
                  </span>
                </div>
                {countModulesSelected.includes(Module.id) ? (
                  <CheckCircle className="size-5 ml-auto text-green-500" />
                ) : (
                  <Circle className="size-5 ml-auto text-muted" />
                )}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        <Separator />
        <div>
          <CardHeader className="bg-muted/20  border rounded-md py-2">
            <CardDescription>Permissões</CardDescription>
          </CardHeader>
          <article className="space-y-2  py-2">
            {countModulesSelected.map((module, index) => {
              const currentModule = Modules.find((item) => item.id === module)
              return (
                <div key={index} className="flex items-center">
                  <Label className="min-w-32 text-xs text-ellipsis line-clamp-1 bg-secondary rounded-l-2xl text-end h-10 flex items-center px-3 justify-start border">
                    {currentModule?.name}
                  </Label>
                  <MultipleSelector
                    className="h-10 items-center flex rounded-none border-l-0 rounded-r"
                    defaultOptions={OPTIONS_PERMISSIONS}
                    maxSelected={6}
                    hideClearAllButton
                    badgeClassName="bg-emerald-500 text-black font-bold hover:bg-emerald-600"
                  />
                </div>
              )
            })}
          </article>
        </div>
      </section>
    </main>
  )
}
