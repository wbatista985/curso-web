function validar() {
    var nome = form1.nome.value
    var email = form1.email.value
    var senha = form1.senha.value
    var rep_senha = form1.rep_senha.value

    if (nome == "") {
      alert("Preencha o campo nome corretamente seu animal de teta")
      form1.nome.focus()
      return false
    }

    if (email == "") {
      alert("sem email como eu te acho?? vagabundo!!")
      form1.email.focus()
      return false
    }

    if (senha == "") {
      alert("vai deixar a porta aberta do seu... cadastro?")
      form1.senha.focus()
      return false
    }

    if (rep_senha == "") {
      alert("repita essa fita")
      form1.rep_senha.focus()
      return false
    }

    if (nome.length < 6) {
      alert("coloque seu nome completo pufavo")
      form1.nome.focus();
      return false
    }

    if (senha != rep_senha) {
      alert("senhas são diferentes seu otario")
      form1.senha.focus()
      return false
    }
  }