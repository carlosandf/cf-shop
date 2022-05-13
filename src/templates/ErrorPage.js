import Header from './Header.js';

function ErrorPage() {
  return (
    `
    <div>
      ${Header()}
      <div class="error-page">
        <p><i>Ups! Algo Salió Mal :(</i></p>
      </div>
    </div>
    `
  )
}

export default ErrorPage;
