// Função para exibir a seção selecionada e ocultar as demais
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
    section.style.display = section.id === sectionId ? 'block' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Função reutilizável de validação
  function validarCampos(form) {
    let valido = true;
    const campos = form.querySelectorAll('input[required], textarea[required], select[required]');

    campos.forEach((campo) => {
      if (!campo.value.trim()) {
        campo.style.border = '2px solid red';
        valido = false;
      } else {
        campo.style.border = '1px solid #ccc';
      }
    });

    return valido;
  }

  // Registro dos três formulários
  const formularios = [
    {
      id: 'formConsumidor',
      mensagemSucesso: '✅ Consumidor cadastrado com sucesso!',
      mensagemErro: '⚠️ Preencha todos os campos obrigatórios do consumidor.'
    },
    {
      id: 'formVendedor',
      mensagemSucesso: '✅ Vendedor cadastrado com sucesso!',
      mensagemErro: '⚠️ Todos os campos do vendedor devem ser preenchidos.'
    },
    {
      id: 'formProduto',
      mensagemSucesso: '✅ Produto salvo com sucesso!',
      mensagemErro: '⚠️ Verifique os campos obrigatórios do produto.'
    }
  ];

  // Laço que adiciona os listeners aos três formulários
  formularios.forEach((formulario) => {
    const form = document.getElementById(formulario.id);

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (validarCampos(form)) {
          alert(formulario.mensagemSucesso);
          form.reset();
        } else {
          alert(formulario.mensagemErro);
        }
      });
    }
  });
});

// Eventos para ações de "Alterar" e "Excluir" produto
document.getElementById('btnAlterarProduto').addEventListener('click', () => {
  alert('Função de alterar produto em desenvolvimento...');
});

document.getElementById('btnExcluirProduto').addEventListener('click', () => {
  alert('Função de excluir produto em desenvolvimento...');
});