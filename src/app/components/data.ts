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
  { id: 'j', name: 'Sincronismo AFs' },
  { id: 'k', name: 'Sincronismo LC' },
]

const OPTIONS_PERMISSIONS = [
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

export { Roles, Modules, OPTIONS_PERMISSIONS }
