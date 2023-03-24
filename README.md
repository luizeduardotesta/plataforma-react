21/03/2023

Atividade 1:
Crie um novo componente chamado Usuarios. Para manter a coerência visual, mantenha o mesmo formato dos componentes anteriores. Defina a rota para o componente Usuarios, seguindo a estrutura já desenvolvida. Agora crie a nova opção "Usuarios" no menu, para o funcionalmente adequado da navegação entre as páginas.

Atividade 2:
Crie um novo componente chamado Login. Utilize React Router para especificar uma nova rota que renderize este novo componente. Para este componente crie dois campos de formulário para o e-mail e senha, e um botão de submit. Crie também um botão para possibilitar a autenticação via Google. Utilize React Bootstrap para estruturar está página. A estilização fica a seu critério, seja criativo.
Inspire-se: https://cssauthor.com/best-free-bootstrap-login-forms/

---

---

22/03/2023 - extras

Atividade 1:
Conhecendo os recursos de rotas alinhadas do React Router, crie dentro da rota da página principal (Home), três rotas filhas que representam, respectivamente, três seções dentro dessa página. Veja o vídeo de exemplo em anexo.

Atividade 2:
Crie um novo componente chamado Perfil. Este componente deve mostrar as informações de perfil do usuário baseado no ID do usuário passado como parâmetro na rota do componente. Utilize React Router para mapear uma nova rota para esse componente. Utilize os conhecimento de parâmetros em rotas para possibilitar a passagem do ID para o componente Perfil e mostrar as informações.
OBS: Para isso crie uma nova coluna (Perfil) na tabela de usuários. Esta coluna deve conter um link onde pode direcionar ao perfil do usuário em questão.

Atividade 3 (DESAFIO):
Para esta atividade você não vai criar nenhum componente. Crie o mecanismo de autenticação da página de Login. A página de Login possui os campos e-mail e senha, ao informar os valores e clicar em entrar, verifique se o usuário está cadastrado no sistema e se os dados estão corretos. Caso sim, redireciona o usuário para a página Home, caso contrário mostre um Toast informando "Erro ao autenticar!". Para isso utilize os conceitos de JavaScript para verificar a existência e validação dos dados do usuário do vetor de usuários. Para o mecanismo de redirecionamento da página utilize o React Router. Utilize o React Bootstrap para implantar o Toast em Login.
Recursos: https://react-bootstrap.github.io/components/toasts/

---

---

24/03/2023 - extras

Atividade 1:

Atividade: Desenvolva um formulário de cadastro de super-heróis. Criar um formulário de cadastro de super-heróis que permita ao usuário inserir informações sobre um super-herói fictício. O formulário deve conter campos para a entrada de nome, poder, fraqueza e história. Utilize os recursos do React Hook Form para obter os dados passados e as mostre em uma caixa de dialogo (alert). Não se preocupe com validação dos dados!

Atividade 2:

Desenvolva um formulário de cadastro de equipamentos eletrônicos para uma empresa de manutenção de eletrônicos. O formulário deve ter os seguintes campos:
Marca e modelo do equipamento
Número de série
Descrição do problema
Data de entrada
Previsão de entrega
Status (utilize um campo de seleção)
Além disso, é importante que o formulário seja de fácil preenchimento e utilize validação de dados. Para este exercício, utilize os mecanismos do React Hook Form e aplique os recursos de validação de erros para garantir a boa usabilidade do formulário, sabendo que todos os campos devem ser preenchidos e que não devem passar de 255 caracteres. Para campos com valores inválidos mostre uma mensagens abaixo do campo com um feedback de invalidação. Como resposta ao usuário mostre as informações em um caixa de dialogo (alert).

Atividade 3:

Desenvolva um formulário de cadastro de programadores para uma empresa de desenvolvimento de software. O formulário deve ter os seguintes campos:
Nome completo
Endereço de e-mail
Telefone
Estado de residência
Cidade de residência
Áreas de interesse (utilize um acervo de campos de check)
Nível de experiência (utilize um campo de seleção ->

júnior, pleno, sênior)
Portfólio (opção para incluir link)
Habilidades técnicas (utilize um acervo de campos de check)
Formação acadêmica (curso, instituição, ano de conclusão)
Para uma melhor experiência de uso do formulário aplique validação nos campos sabendo que os campos de texto e seleção devem ser preenchidos e informações como e-mail devem ser validas e os campos não devem passar de 255 caracteres. Os campos inválidos devem mostrar abaixo um mensagem de feedback. Para tratamento dos dados e validação utilize os mecanismos do React Hook Form. Como retorno para o usuário mostre um modal com as informações de entrada do formulário. Para criação do campos, botões e modal utilize os recursos do React Bootstrap.
