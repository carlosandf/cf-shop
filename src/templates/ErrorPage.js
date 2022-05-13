import Header from './Header.js';

function ErrorPage() {
  return (
    `
    <div>
      ${Header()}
      <div class="error-page">
        <p><i>Tiempo de carga agotado:(</i></p>
      </div>
    </div>
    `
  )
}

export default ErrorPage;
