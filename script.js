document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const drop = document.getElementById('drop-select').value;
  const senha = document.getElementById('password').value;
  const senhas = { drop001: 'grove001', drop002: 'grove002' };
  if (senha === senhas[drop]) {
    window.location.href = `${drop}.html`;
  } else {
    alert('Senha incorreta. Tente novamente.');
  }
});