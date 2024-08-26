interface SectionHeaderProps {
  title?: string
  count?: number
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  count,
}) => {
  return (
    <header className="bg-muted/20 border rounded-md py-2 px-4 w-full">
      {count !== undefined && title ? (
        <h2 className="text-sm text-muted-foreground">
          {count} {count > 1 ? `${title}s` : title}{' '}
          {count > 1 ? 'selecionadas' : 'selecionada'}
        </h2>
      ) : (
        <h2 className="text-sm text-muted-foreground">{title}</h2>
      )}
    </header>
  )
}
