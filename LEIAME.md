- [JSON Table Editor](#json-table-editor)
  - [Sobre o App](#sobre-o-app)
  - [Decisões Técnicas](#decisões-técnicas)
    - [Descrições Conceituais](#descrições-conceituais)
    - [Árvore de Componentes Explicada](#árvore-de-componentes-explicada)
    - [Redux](#redux)
    - [Repetição de Código e Wet Code](#repetição-de-código-e-wet-code)
- [------------ Continue the work from here ------------------](#-------------continue-the-work-from-here-------------------)
    - [Styled-components](#styled-components)
  - [Workflow, tips and shortcuts — Future Tutorial](#workflow-tips-and-shortcuts--future-tutorial)
  - [Roadmap](#roadmap)

If you want the english version, click [here].
Para ir ao site, clique [>>> aqui <<<]()

# JSON Table Editor

## Sobre o App

O propósito desse app era facilitar a criação de dados falsos para outros projetos. Eu queria uma forma de rapidamente e facilmente criar uma lista `json` de objetos, com alguns valors aleatórios aqui e ali, e depois facilmente plugar em uma aplicação.

Acontece que agora temos [ChatGPT](https://openai.com/blog/chatgpt/), o que torna este projeto grandemente desnecessário. Porém, como já tinha feito boa parte do projeto, decidir terminá-lo antes de seguir em frente para outros projetos.

## Decisões Técnicas

### Descrições Conceituais

Primeiramente, uma definição de conceitos:

- `Instância`: Um objeto de javascript qualquer.
- `Propriedade`: um campo pertencente a uma instância.
- `Tabela`: Tanto um modelo mental que é composto por duas estruturas de dados, `esquema` e `instâncias`, quanto o arquivo que contém estas informções.
- `Schema`: Descreve o nome e `tipo` de cada `propriedade` encontrada nas `instâncias`. `Tipos` podem ser **primitivas**, como números, strings ou datas; **dados compostos**, como objetos e listas; ou até mesmo **customizados**, como widgets montados por usuários.
- `Instâncias`: Um array de objetos que popula a tabela, baseado nas `propriedades` que cada instância possui. Nem todas as instâncias possuem todas as propriedades, porém as propriedades descritas pelo `esquema` descrevem todas as propriedades possíveis à cada da instância.

### Árvore de Componentes Explicada

O `App.js` é o componente principal, composto pela shell (`MenuBar.js` e `StyledFooter.js`) e pela tabela (`JsonTable.js`).

O `MenuBar.js` é responsável por mostrar todas as ações que um usuário pode tomar.

O `JsonTable.js` contém os componentes `TableHead.js`, responsável por manejar as propriedades, e `TableBody.js`, responsável por manejar as instâncias. Além disso, `JsonTable.js` possui botões para adicionar novas instâncias e propriedades, além de transpor (rotacionar) a tabela.

No arquivo html raiz, além da div `#root` (comum à maioria das aplicações feitas com create-react-app), existe uma div `#modal-portal`. Eu a use junto com o método `ReactDOM.createPortal` para renderizar uns modais. Alguns dos modais são:

- `ExpandedCell`: Amplia a célula, facilitando a leitura de textos mais longos.
- `JSONPreview`: Mostra a aparência do arquivo json, contendo apenas as `instâncias`.
- `MassInsert`: Permite a inserção de valores em massa, dentro de uma propriedade.

### Redux

O motivo inicial do uso de redux era criar um uso mais complexo do gancho useState. Eu queria uma lista de funções que trabalhassem no mesmo state, onde cada mudança de state gatilharia uma re-renderização. Passar todos os setters de state para os componentes se tornou laborioso. `useContext` foi considerado, mas acabei com redux.

Escolher redux foi um erro, mas um erro instrutivo. Aprendi a usar uma ferramenta bem popular, que deve auxiliar no futuro próximo da minha carreira. Porém, se eu fosse recomeçar o projeto, do zero, eu usaria [jotai](https://jotai.org/) e criaria todos os átomos necessários.

E como eu já tinha escolhido redux, continuei com a ferramenta para outros states que eram compartilhados pelos componentes.

Menção honrosa: Se o [reduxjs-toolkit](https://redux-toolkit.js.org/) não existisse, eu provavelmente teria abandonado redux.

### Repetição de Código e Wet Code

Existe um bocado de repetição no código. Isso é proposital. Antes de eu começar a abstrair qualquer coisa que eu visse pela frente, decidi deixar o código mais maleável, enquanto conhecia e entendia melhor o projeto.

Eu deixei o código mais "seco" (DRY — don't repeat yourself) conforme me sentia mais confiante sobre o que estava fazendo.

Tirei essa forma de fazer as coisas [dum cara mais inteligente que eu.](https://www.deconstructconf.com/2019/dan-abramov-the-wet-codebase)

# ------------ Continue the work from here ------------------

### Styled-components

## Workflow, tips and shortcuts — Future Tutorial

- The mental model is this: You are creating a schema for a list of objects. Instances are each object created; Properties are the fields of each value. Not all properties are held by all instances.
- Double-click a cell to show it's expanded version
- Use 'Insert for all' to repeat or randomize values under a property

## Roadmap

Here is the roadmap (that I may follow after doing some other projects):
