import Link from 'next/link'

type Props = {
  title?: string
  category?: string
  border: boolean
  children: React.ReactNode
}

const MainColumnContainer: React.FC<Props> = ({
  title,
  category,
  border = true,
  children,
}) => {
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center">
        {title && <div className="text-3xl font-bold mb-2">{title}</div>}
        {category && (
          <Link
            href={`/categories/${category}`}
            className="hover:underline text-xs"
          >
            もっと見る ＞
          </Link>
        )}
      </div>
      <div
        className={`${border && 'border p-4'} border-light-sub dark:border-dark-sub`}
      >
        {children}
      </div>
    </div>
  )
}

export default MainColumnContainer
