const Error = ({statusCode}) => {
  return (
    <>
      { statusCode === 404 ? (<h1>Esse produto não existe ou você está visitando a página errada.</h1>)
        : (<h1>Qualquer error</h1>)
      }
    </>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode }
}

export default Error;