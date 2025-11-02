function initProjetos() {
  const contElem = document.getElementById("projects-container");

  const fetchedData = [
    {
      title: "Projeto Educação para Todos",
      desc: 'O projeto "Educação para Todos" tem como objetivo oferecer reforço escolar gratuito para crianças de 6 a 12 anos, garantindo apoio no aprendizado e fortalecendo o desenvolvimento educacional de forma acolhedora e humanizada. Além das atividades em sala de aula, as crianças participam de momentos de arte e criatividade, como pintura e desenho, e também de dinâmicas recreativas ao ar livre, que estimulam a convivência, o trabalho em equipe e o desenvolvimento social.',
      imgs: [
        { src: "assets/imagens/ensinando1-p.png", alt: "Crianças estudando" },
        { src: "assets/imagens/brincando2-p.png", alt: "Crianças brincando" },
        { src: "assets/imagens/desenhando1-p.png", alt: "Crianças pintando" },
      ],
    },
    {
      title: "Projeto Mãos que Ajudam",
      desc: 'O Projeto "Mãos que Ajudam" tem como propósito capacitar voluntários por meio de cursos rápidos e práticos, preparando-os para atuar diretamente nas necessidades da comunidade local. As atividades incluem oficinas educativas e lúdicas, como apresentações com fantoches para crianças, ações de geração de renda — como costura e artesanato — e preparação de doações e itens essenciais para famílias em situação de vulnerabilidade. O projeto busca unir solidariedade e aprendizado, oferecendo aos voluntários a oportunidade de desenvolver habilidades enquanto contribuem com gestos que transformam vidas e fortalecem o vínculo comunitário.',
      imgs: [
        {
          src: "assets/imagens/doacao1-p.png",
          alt: "Voluntários ajudando na comunidade",
        },
        {
          src: "assets/imagens/maosajudam1-p.png",
          alt: "Voluntários ajudando na comunidade",
        },
        {
          src: "assets/imagens/maosajudam2-p.png",
          alt: "Voluntários ajudando na comunidade",
        },
      ],
    },
  ];

  for (let i = 0; i < fetchedData.length; i++) {
    const data = fetchedData[i];
    const h2Elem = createElem("h2", { text: data.title });
    const pElem = createElem("p", { text: data.desc });

    let imgs = [];
    for (let j = 0; j < data.imgs.length; j++) {
      const dataImg = data.imgs[j];
      const img = createElem("img", {
        attrs: { class: "img", src: dataImg.src, alt: dataImg.alt },
      });
      imgs.push(img);
    }
    const divElem = createElem("div", {
      child: imgs,
      attrs: { class: "proj-cont" },
    });
    const articleElem = createElem("article", {
      child: [h2Elem, pElem, divElem],
    });
    contElem.appendChild(articleElem);
  }

  console.info('Página "Projetos" inicializada');
}
