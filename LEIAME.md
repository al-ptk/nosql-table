- [JSON Table Editor](#json-table-editor)
  - [Sobre o App](#sobre-o-app)
  - [Decisões Técnicas](#decisões-técnicas)
    - [Descrições Conceituais](#descrições-conceituais)
    - [Árvore de Componentes Explicada](#árvore-de-componentes-explicada)
    - [Redux](#redux)
    - [Repetição de Código e Wet Code](#repetição-de-código-e-wet-code)
    - [Styled-components](#styled-components)
    - [Test-Driven Development](#test-driven-development)
  - [Roadmap](#roadmap)
    - [Phase 1: Backend and Testing](#phase-1-backend-and-testing)
    - [Phase 2: Typing](#phase-2-typing)
    - [Phase 2.5: More features](#phase-25-more-features)
    - [Phase 3: Doctor Refactor and the Rewriting of Madness](#phase-3-doctor-refactor-and-the-rewriting-of-madness)

If you want the english version, click [here](https://github.com/al-ptk/json-table-editor/blob/main/README.md).

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

E sobre notas @:

- @todo: Uma feature a ser adicionada ou alguma tarefa geral a ser feita.
- @dryup: Isso significa que eu acredito que o código pode ser simplificado\abstraído, mas não ouso fazer isso ainda. (O motivo para este atraso pode ser encontrado na seção [Repetição de Código e Wet Code](#repetição-de-código-e-wet-code).) (Também, [grug said so](https://grugbrain.dev/#grug-on-factring-your-code).))

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

### Styled-components

Essa library foi escolhida como a solução de css porque eu havia encrontrado-a umas semanas antes do começo deste projeto. Eu tenho preocupações quanto ao tamanho do package, mas essas preocupações são apenas um resultado da minha inexperiência lidando com performance (leia-se: Eu sou um noob e não tenho ideia do que estou falando). Eu gosto do poder que styled-components me dá, no entanto.

Eu adotei um padrão para organização de estilos nos estágios mais avançados do projeto: chaveiro de componentes. Esses funcionam por colocar todos os subcomponentes dentro do namespace de um componente reutilizável. Fica algo assim:

```javascript
import styled from 'styled-components';

const Modal = {
  Container: styled.div``
  Title: styled.h1``,
  Button: styled.button``
}

```

O consumo é um tanto direto — simplesmente use um `<Modal.Container>` para accessar o container. Para acessar componentes diferentes, basta usar uma chave diferente.

Os benefícios? Além de uma facilidade maior em importar componentes, usar um sistema parecido com [BEM](https://getbem.com/) e me fazer sentir esperto por uma razão boba, não existem quaisquer benefícios claros. Porém, eu gostei dessa abordagem, então planejo continuar com ela em projetos futuros.

**Editado:** Eu provavelment não farei mais isso. [Outra pessoa muito mais inteligente que eu](https://www.youtube.com/watch?v=M3BM9TB-8yA) me avisou de coisas "bonitinhas" que não acrescentam muita coisa. Mas talvez seja uma boa ideia? Veremos.

### Test-Driven Development

Eu não fiz. "É um projeto pequeno," eu pensei. Eu estava errado. Coisas saem de controle rápido! TDD e notas @ são ambas importantes para manter o código mais manejável.

## Roadmap

While part of me wants to drop this project ("it's a silly idea!" I repeat to myself), I can still see me using this in the future. AND I want to give my best and see how far I can go when perfecting a project. So, on with the madness!

Here is the roadmap: (items in each phase are not ordered by priority)

### Phase 1: Backend and Testing

- [ ] Create simple auth system — just something to stretch my muscles
- [ ] Create a storage for tables:
  - [ ] Limit of tables per user (maybe 10?)
  - [ ] Limit of table size to some size (8mb, probably, because of localstorage)
- [ ] Create signin, signup and landing pages
- [ ] Create tests for everything
- [ ] Autosave on localstorage
- [ ] Undo\Redo

### Phase 2: Typing

- [ ] New Table wizard
- [ ] Schema wizard
- [ ] Add DataCell Types:
  - [ ] Strings
  - [ ] Numbers
  - [ ] Dates
  - [ ] Booleans
  - [ ] Selects\Dropdowns
  - [ ] Arrays
  - [ ] Checkboxes
  - [ ] Radiosets
  - [ ] Colors

### Phase 2.5: More features

- [ ] Mass insert randomly: give it some constraints and watch the thing go!
- [ ] Clear all cells of instance\property
- [ ] Reverse order of instances
- [ ] Make context menu render upwards too
- [ ] Add custom scrollbars
- [ ] Cells can be highlighted and have their own context menu
- [ ] Create composite property groups by combining two or more types (limit of some kind?)
- [ ] Add new export types:
  - [ ] Decently rendered table as pdf
  - [ ] Html table (with styling?)
  - [ ] Mongoose populatedb script
- [ ] Import json from copy-pasting it into a textbox
- [ ] User-custom widgets (?)

### Phase 3: Doctor Refactor and the Rewriting of Madness

- [ ] Change all state-operating functions to be pure (no mutations, returns new obj)
- [ ] Rewrite the whole thing with Typescript and React-Table
- [ ] Allow for instance naming (swap from array to object as storage mechanism)
- [ ] Use some Tailwind UI framework to redo the styling
