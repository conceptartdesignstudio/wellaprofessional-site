import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="fixed left-0 bottom-0 w-full h-10 flex items-center justify-center border-t bg-aeeieeBg text-white">
      <div className="flex flex-col items-center">
        <Link href="https://wella.com.br/" rel="noreferrer noopener">
          <a className="flex items-center justify-center">Ⓒ WELLA.COM.BR</a>
        </Link>
      </div>
    </footer>
  )
}
