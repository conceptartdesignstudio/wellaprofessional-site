import Image from 'next/image'

export const ProductBrand = ({ brandName }) => {
  const brands = [
    {
      name: 'wella',
      image: '/wella.png',
      width: '100',
      height: '54'
    },
    {
      name: 'wellapro',
      image: '/wellapro.png',
      width: '100',
      height: '62'
    },
    {
      name: 'sebastian',
      image: '/sebastian-black.png',
      width: '200',
      height: '35'
    },
    {
      name: 'sebastian-white',
      image: '/sebastian-white.png',
      width: '200',
      height: '35'
    },
    {
      name: 'sebastian-black-new',
      image: '/sebastian-black-new.png',
      width: '200',
      height: '40'
    },
    {
      name: 'sebastian-white-new',
      image: '/sebastian-white-new.png',
      width: '200',
      height: '40'
    },
    {
      name: 'sebastian-new',
      image: '/sebastian-25-black.png',
      width: '200',
      height: '40'
    },
    {
      name: 'sebastian-new-white',
      image: '/sebastian-25-white.png',
      width: '200',
      height: '40'
    },
    {
      name: 'nioxin',
      image: '/nioxin.png',
      width: '200',
      height: '42'
    },
    {
      name: 'clinical',
      image: '/clinical-black.png',
      width: '200',
      height: '80'
    },
    {
      name: 'clinical-white',
      image: '/clinical-white.png',
      width: '200',
      height: '80'
    },
    {
      name: 'wedo',
      image: '/wedo.png',
      width: '150',
      height: '53'
    },
    {
      name: 'opi',
      image: '/opi.png',
      width: '150',
      height: '46'
    }
  ]

  const filteredBrand = brands.filter((brand) => brand.name === brandName)

  return (
    <>
      {filteredBrand.map((brand) => (
        <Image
          className="brand-logo"
          alt="Brand Logo"
          key={brand.image}
          src={brand.image}
          width={brand.width}
          height={brand.height}
          priority
        />
      ))}
    </>
  )
}
