function validar() {
    var nome =form2.nome.value
    var email =form2.email.value
    var senha =form2.senha.value
    var rep_senha =form2.rep_senha.value
    var estado = form2.estado.value
    var aceita = form2.aceita.aceita

    if (nome == "") {
      alert("Preencha o campo nome corretamente seu animal de teta")
     form2.nome.focus()
      return false
    }

    if (email == "") {
      alert("sem email como eu te acho?? vagabundo!!")
     form2.email.focus()
      return false
    }

    if (senha == "") {
      alert("vai deixar a porta aberta do seu... cadastro?")
     form2.senha.focus()
      return false
    }

    if (rep_senha == "") {
      alert("repita essa fita")
     form2.rep_senha.focus()
      return false
    }

    if (nome.length < 6) {
      alert("coloque seu nome completo pufavo")
     form2.nome.focus();
      return false
    }

    if (senha != rep_senha) {
      alert("senhas são diferentes seu otario")
     form2.senha.focus()
      return false
    }

    //validando select de estados
    if (form2.estado.selectedIndex == 0) {
      alert("Selecione seu estado !!!")
     form2.estado.focus()
      return false
    }

 
  }