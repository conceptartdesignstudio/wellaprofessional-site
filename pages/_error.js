import Error404 from '../components/Error'

const Error = ({ statusCode }) => {
  return <>{statusCode === 404 ? <Error404 /> : <h1>Qualquer error</h1>}</>
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
