import React from 'react';
import Header from '@components/Header.jsx';

function ErrorPage() {
  return (
    <div>
      <Header />
      <div class="error-page">
        <p><i>Ups! Algo Salió Mal :(</i></p>
      </div>
    </div>
  )
}

export default ErrorPage;
