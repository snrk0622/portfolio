type Props = {
  title?: string
  border: boolean
  children: React.ReactNode
}

const SideColumnContainer: React.FC<Props> = ({
  title,
  border = true,
  children,
}) => {
  return (
    <div className="mb-10">
      {title && (
        <div className="text-3xl font-bold lg:text-lg lg:font-bold mb-2 lg:mb-1">
          {title}
        </div>
      )}
      <div
        className={`${border && 'border p-4'} border-light-sub dark:border-dark-sub`}
      >
        {children}
      </div>
    </div>
  )
}

export default SideColumnContainer
