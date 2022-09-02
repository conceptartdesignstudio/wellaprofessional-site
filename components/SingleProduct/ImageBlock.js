import Image from 'next/image'

export const ImageAsBlock = ({ images }) => {
  return (
    <div className="flex flex-col mt-6 justify-center">
      {images.map(({ id, altText, mediaItemUrl }) => (
        <div key={id} className="relative max-w-[400px]">
          <Image
            src={mediaItemUrl}
            alt={altText}
            layout="responsive"
            width="100%"
            height="100%"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      ))}
    </div>
  )
}
