# Valoriza

Valoriza é um projeto realizado durante a NLW Together e se trata de uma API REST onde os desenvolvedores podem elogiar outros devs, construída com NodeJS utilizando Mysql, Express e JWT para auxiliar o desenvolvimento.

Não esqueça do:

### yarn install

#

## Regras

- Cadastro de usuário

    - Não é permetido cadastrar mais de um usuário com o mesmo e-mail.

    - Não é permetido cadastrar usuário sem e-mail.

- Cadastro de TAG

    - Não é permetido cadastrar mais de uma TAG com o mesmo nome.

    - Não é permetido cadastrar TAG sem nome.

    - Não é permetido o cadastro por usuários que não sejam administradores.

- Cadastro de elogios

    - Não é permetido o usuário cadastrar um elogio para si.

    - Não é permetido cadastrar elogios para usuários inválidos.

    - Usuário precisa estar autenticado na aplicação.
