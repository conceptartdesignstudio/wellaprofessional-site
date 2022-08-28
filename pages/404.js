import LottieView from 'lottie-react'
import animationData from '../assets/86538-error-404.json'

const Error404 = () => {
  return (
    <div className="flex flex-col justify-center items-center px-8 text-center">
      <LottieView animationData={animationData} />
      <h2 className="font-semibold text-3xl text-neutral-700">
        Página não encontrada
      </h2>
      <p className="mt-5 text-1xl text-neutral-700">
        O produto que você está procurando não existe ou o caminho não está
        correto.
      </p>
    </div>
  )
}

export default Error404
