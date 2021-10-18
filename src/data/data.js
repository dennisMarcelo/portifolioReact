export default function data() {
  return {
    home: {
      imgURL: 'https://i.ibb.co/R7jqnFW/37647447.jpg',
      name: 'Dennis Marcelo',
      specialty: 'Desenvolvedor Full-Stack',
      resume: ['Atualmente estudo na Trybe onde busco me tornar full-stack utilizando tecnologias como JavaScript, React, nodeJs, mongoDB e Python.', 'Sou formado em análise e desenvolvimento de sistema pela universidade Estácio, apaixonado por tecnologia e pela praticidade e comodidade que elas nos proporcionam, pelo mesmo motivo decidi me tornar desenvolvedor.'],
    },
    hardSkills: {
      frontEnd: [' HTML', 'CSS', 'JavaScritp', 'React'],
      backEnd: ['NodeJs', 'MongoDB', 'Express', 'bcrypt'],
      test: ['jest'],
    },
    projects: [
      {
        title: 'Trivia React',
        description: 'Jogo de trivia onde o usuário pode escolher a dificuldade, tipo, categoria e quantidade de perguntas. As pegunta tem 30 segundos para ser respondidas e no final é exibido um ranking de melhores pontuações',
        linkImg: 'https://i.ibb.co/gy1Q7Cy/ezgif-com-gif-maker.gif',
        linkApp: 'https://sd-010-b-project-trivia-react-redux.vercel.app/',
        date: '06/2021',
        status: 'Finalizado',
      },
      {
        title: 'NetGames',
        description: 'Este projeto teve como foco testar os ciclos de vida dos componentes React e as rotas da aplicação. Nele é possível criar, deletar e editar cards.',
        linkImg: 'https://i.ibb.co/KbRMmcN/NetGames.gif',
        linkApp: 'https://dennismarcelo.github.io/movie-card-library-crud/#/',
        date: '04/2021',
        status: 'Finalizado',
      },
      {
        title: 'PokeDex',
        description: 'Este projeto marca o início do meu aprendizado em react e também flex-box, nele é possível visualizar alguns cards de pokémons em diferentes telas.',
        linkImg: 'https://i.ibb.co/x7zVMdg/pokedex.gif',
        linkApp: 'https://dennismarcelo.github.io/trybe-exercises/',
        date: '05/2021',
        status: 'Finalizado',
      },
      {
        title: 'ToDo List',
        description: 'Um dos meus primeiros projetos realizados na Trybe utilizando somente HTML, CSS e JavaScript. O objetivo do projeto foi criar uma lista de tarefas onde é possível criar, deletar, mover e salvar uma ou várias tarefas.',
        linkImg: 'https://i.ibb.co/1mzfwFY/todo-list.gif',
        linkApp: 'https://dennismarcelo.github.io/Todo-List/',
        date: '04/2021',
        status: 'Finalizado',
      },
    ],
  };
}
