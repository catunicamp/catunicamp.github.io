const OrgType = {
    ca:           'Centros Acadêmicos',
    comissao:     'Comissões',
    atletica:     'Atléticas',
    coletivo:     'Coletivos',
    ej:           'Empresas Júnior',
    voluntariado: 'Voluntariado',
    liga:         'Ligas',
    bateria:      'Bateria',
    extensao:     'Projetos de Extensão',
    outro:        'Outros',

  };


let orgsList = [
    {
        title: `AAAETA`,
        type: OrgType.atletica,
        university: `FT`,
        image: `aaaeta.png`,
        about: `Parabéns!I
        Você foi aprovade na Unicamp e agora somos sua mais nova família. Seja Bem-vinde
        aos melhores anos da sua vida! Estamos ansioses para te conhecer!
        <br><br>
        Quem somos nós:
        <br><br>
        "A AAAETA é a Associação Atlética Acadêmica Das Engenharias de Telecomunicações,
        Transportes e Ambiental da Unicamp.
        <br><br>
        Nascemos em 2013 e somos a atlética que representa os estudantes de Engenharia
        da Faculdade de Tecnologias (FT) em campeonatos, atividades, ações sociais e
        eventos externos/internos.
        <br><br>
        Nosso objetivo é proporcionar desenvolvimento, integração e acolhimento aos
        alunos, principalmente, através do esporte. Além disso, prestar suporte acadêmico e
        promover iteração com a comunidade de limeira e os demais campus.
        Para isso, arrecadamos dinheiro, sobretudo com vendas de produtos e na
        organização de eventos. Podendo, assim, disponibilizar a vocês, futuros engenheires,
        treinadores, materiais esportivos, diversão e incentivos para os melhores e mais
        efetivos treinos!
        `,
        site: `https://linktr.ee/aaaeta.unicamp`,
        instagram: `https://www.instagram.com/aaaeta`,
        fca:false,
        ft:true,
    },
    {
        title: `AAATU`,
        type: OrgType.atletica,
        university: `FT`,
        image: `aaatu.png`,
        about: `Sejam Bem Vindes a família AAATU! 💙🦉❤️
        <br><br>
        Agora vocês estão na melhor da América Latina, e não só isso, estão também na maior família da Faculdade de Tecnologia da Unicamp, a família coruja! 
        <br><br>
        Há 20 anos, representamos os cursos: Engenharia de Telecomunicações, Engenharia de Transportes, Engenharia Ambiental, Sistemas de Informação, Saneamento Ambiental e Tecnologia e Análise em Desenvolvimento de Sistemas!
        <br><br>
        Ufa, deu pra perceber que a família é grande né? 😮‍💨
        <br><br>
        Aproveitem e vivam intensamente a melhor fase das suas vidas! Contem com a AAATU para tirar dúvidas e mais informações
        <br><br>
        Instagram: @atleticaaatu
        `,
        site: `https://beacons.page/atleticaaaatu`,
        instagram: `https://www.instagram.com/atleticaaatu`,
        fca:false,
        ft:true,
    },
    {
        title: `AIESEC`,
        type: OrgType.outro,
        university: `FCA`,
        image: `aiesec.jpeg`,
        about: `
        A AIESEC é a maior organização de liderança jovem do mundo. 
        <br><br>
        Acreditamos que por meio de experiências práticas e ambientes desafiadores podemos desenvolver habilidades de liderança nos jovens, além de contribuir para o seu desenvolvimento pessoal e profissional. Nosso propósito é atingir a paz e o preenchimento das potencialidades humanas, com a juventude sendo chave na construção de um futuro melhor.
        <br><br>
        Busca desenvolver habilidades profissionais e pessoais, além de ter experiências práticas de liderança e criar um networking global? Seja um Membro Voluntário.
        <br><br>
        Selecione Limeira como cidade mais próxima e faça parte da AIESEC em Limeira!
        `,
        site: `https://aiesec.org.br/membresia/`,
        instagram: `https://www.instagram.com/aiesecnobrasil`,
        fca:true,
        ft:true,
    },
    {
        title: `Apis`,
        type: OrgType.outro,
        university: `FT`,
        image: `apis.png`,
        about: `A Apis AeroDesign tem por finalidade desenvolver habilidades e conhecimentos de engenharia fora da sala de aula por meio do aeromodelismo. Assim, a organização projeta e fabrica aviões do zero para participar da competição nacional da SAE AeroDesign, sendo que os projetos são conduzidos exclusivamente pelos membros.
        <br><br>
        Fazendo com que os estudantes desenvolvam-se tanto na área de metodologia de projeto quanto nas diferentes disciplinas de engenharia. 
        <br><br>
        A Apis convida vocês a conhecerem mais sobre nosso trabalho.Estamos disponíveis pela dm ! 😉
        `,
        instagram: `https://www.instagram.com/apisaerodesign`,
        fca:true,
        ft:true,
    },
    {
        title: `ARULI`,
        type: OrgType.outro,
        university: `FT`,
        image: `aruli.jpeg`,
        about: `
        A ARULI (Associação das Repúblicas da Unicamp Limeira) foi fundada em 2015 com o objetivo de trazer mais calouros para conhecerem e morarem nas repúblicas; sendo assim, um suporte direto e exclusivo das repúblicas. Atuamos em diversos eventos e atividades que integrem os moradores das repúblicas com outras repúblicas. Além disso, atuamos através de projetos sociais de longo prazo e ações pontuais na nossa comunidade de Limeira.
        <br><br>
        Então, caso tenha interesse em morar em rep, entre nas nossas redes sociais, Instagram @arulimeiraoficial e Facebook. #moreemrep
        `,
        instagram: `https://www.instagram.com/arulimeiraoficial`,
        site: `http://encurtador.com.br/hrB34`,
        fca:true,
        ft:true,
    },
    {
        title: `Asas`,
        type: OrgType.voluntariado,
        university: `FCA`,
        image: `asas.jpeg`,
        about: `O Asas é uma organização estudantil sem fins lucrativos, que tem como missão encorajar jovens a serem agentes de mudança por meio de métodos de educação não tradicionais. Com isso, busca atingir o propósito de tornar a cidade de Limeira mais consciente, esperançosa e atuante em sua própria realidade. 
        <br><br>
        No ano de 2022, com o retorno ao formato presencial, foram aplicadas oficinas regulares em 4 escolas, conquistando mais de 300 alunos da rede pública da cidade de Limeira. Alguns dos temas abrangidos nessas oficinas, que colocam o aluno como protagonista do seu próprio aprendizado, foram: protagonismo juvenil, inteligência emocional, mercado de trabalho e vícios e drogas.
        <br><br>
        E é assim que o Asas impulsiona as pessoas, fortalecendo cada aluno para que ele faça o seu próprio voo!
        <br><br>
        Além disso, o Asas é um ambiente comprometido e profissional, que proporciona o crescimento de seus membros e da própria organização, sem deixar de lado os momentos leves e divertidos.
        <br><br>
        Estamos com o Processo Seletivo aberto, até dia 08/03, para alunos da FT e da FCA!
        `,
        site: `http://asaslimeira.com/`,
        facebook: `https://www.facebook.com/Asas.limeira`,
        email: ``,
        instagram: `https://www.instagram.com/asas.limeira`,
        fca:true,
        ft:true,
    },
    {
        title: `Atria Júnior`,
        type: OrgType.ej,
        university: `FT`,
        image: `atria.png`,
        about: `Por que fazer parte da Atria Júnior?
        <br><br>
        Por que entrar na Atria Júnior ainda no primeiro ano de graduação? A Atria Júnior proporciona aos membros uma vivência empresarial durante a graduação e permite que os conteúdos teóricos sejam aplicados em projetos reais de mercado. Além disso, possibilita criar conexões regionais e nacionais para ampliar o networking e desenvolver habilidades pessoais e profissionais.
        <br><br>
        Algumas das empresas que nossos ex juniores estão hoje: Honda, Burger King, Itaú, Dpaschoal, Bosch.Embraer, BTG, Itaú, Eldorado, Banco Pan, Globo, 3M, Unilever, IBM
        <br><br>
        O que é Atria Júnior?
        <br><br>
        A Atria Jr. é uma empresa júnior (EJ) formada por estudantes dos cursos de graduação da Faculdade de Tecnologia da UNICAMP (FT). Desde 2018, a empresa júnior da FT já impactou mais de R$85.000 na economia brasileira através dos seus mais de 24 projetos. Esses projetos impactam na vida de clientes e desenvolvem alunos do campus através de experiências alinhadas com a prática de mercado.
        <br><br>
        O que é uma empresa Júnior?
        <br><br>
        As Empresa Juniores são associações civis sem fins lucrativos e com fins educacionais formada exclusivamente por alunos do ensino superior, regulamentada no Brasil através da Lei 13.267/2016, com o propósito de realizar projetos e serviços que contribuam para o desenvolvimento acadêmico e profissional dos associados, capacitados para o mercado de trabalho. As empresas juniores fazem parte do Movimento Empresa Júnior (MEJ). O MEJ tem como missão formar, por meio da vivência empresarial, empreendedores comprometidos e capazes de transformar o Brasil. Desde 2010, o MEJ já impactou mais de R$70.000.000,00 na economia brasileira, que são integralmente reinvestidos na educação empreendedora dos estudantes.`,
        site: `https://www.atriajr.com.br`,
        facebook: `https://www.facebook.com/jr.Atria`,
        whatsapp: `https://wa.me/+5519999921021`,
        instagram: `https://www.instagram.com/atriajr`,
        fca:false,
        ft:true,
    },
    {
        title: `CAART`,
        type: OrgType.comissao,
        university: `FT`,
        image: `caart.png`,
        about: `A CA²RT é o Centro Acadêmico André Rebouças de Transportes, uma organização estudantil que busca representar os alunos do curso de Engenharia de Transportes e ser um canal de comunicação entre os discentes, a coordenação do curso e a diretoria da FT.
        <br><br>
        Nosso nome faz homenagem a André Rebouças, o primeiro engenheiro negro do Brasil, nascido em 1836. Foi inventor, físico, matemático, jornalista e grande abolicionista - um dos fundadores da Sociedade Brasileira Contra a Escravidão - , que, após se especializar em engenharia civil na Europa, retornou ao Brasil para atuar com seu irmão, Antonio Rebouças, em modernizações da malha urbana do país, como a construção da Estrada de Ferro que ligou Curitiba ao Porto de Paranaguá.
        <br><br>
        O principal objetivo do CA é incentivar o desenvolvimento humano, social, acadêmico e profissional dos membros e alunos, por meio de projetos relacionados a engenharia de transportes, logística e mobilidade. Esse incentivo se materializa em forma de palestras, visitas técnicas, indicações de cursos e fornecimento de outras atividades extracurriculares.`,
        linkedin: `https://www.linkedin.com/company/caartunicamp/`,
        instagram: `https://www.instagram.com/caart.unicamp`,
        fca:false,
        ft:true,
    },
    {
        title: `Camaleão`,
        type: OrgType.comissao,
        university: `FT`,
        image: `camaleao.jpeg`,
        about: `A Camaleão representa os alunos dos cursos de ambiental da FT, buscando atender suas demandas e promover eventos com temas de interesse acadêmico como palestras, workshops, visitas técnicas e a fins. Em 2019, a Camaleão em parceria com o GGUS - Grupo Gestor Universidade Sustentável, retirou os copos descartáveis do bandejão nos campus de Limeira. Outra atividade importante ocorreu em 2020, através da parceria com outras Universidades estaduais como a Unesp, UFSCar e UFPR, na qual nós nos unimos para formar a primeira Semana Integrada Do Meio Ambiente e Tecnologia. 
        <br><br>
        Se você faz parte do curso de Tecnologia em Saneamento Ambiental e Engenharia Ambiental e deseja construir uma universidade e sociedade mais sustentável, fique ligado(a) em nossas redes sociais e junte-se a nós!`,
        instagram: `https://www.instagram.com/camaleaoft`,
        youtube: `https://www.youtube.com/@comissaoambiental1376/streams`,
        fca:false,
        ft:true,
    },
    {
        title: `CAT - Centro Acadêmico de Tecnologia`,
        type: OrgType.ca,
        university: `FT`,
        image: `cat.png`,
        about: `O Centro Acadêmico de Tecnologia (CAT) é uma entidade discente que tem como papel representar todos os estudantes da FT, sendo tambem responsável pela organização de atividades acadêmicas extracurriculares como debates, discussões, palestras, semanas temáticas, visitas técnicas em empresas privadas e órgãos públicos, recepção de calouros, realização de projetos, mobilização e organização de reivindicações e ações políticas dos estudantes, mediação de negociações e conflitos individuais e coletivos entre estudantes e a faculdade. 
        <br><br>
        Já dá pra ver o quanto que dá pra fazer né? Então se ficou interessado em movimentar a facul com a gente, não perca as datas do processo seletivo e segue a gente lá no Instagram: @cat.limeira`,
        instagram: `https://www.instagram.com/cat.limeira/`,
        email: `mailto:cat@unicamp.br`,
        fca:false,
        ft:true,
    },
    {
        title: `CDI - Comissão Discente de Informática`,
        type: OrgType.comissao,
        university: `FT`,
        image: `cdi.png`,
        about: `Nós somos a organização que representa os cursos de T.I dentro da Faculdade de Tecnologia da Unicamp - T.A.D.S e S.I. Além de ser um canal oficial de comunicação entre os alunos e os docentes, organizamos uma série de eventos como: cursos, palestras e visitas técnicas em parceria com a comunidade e com empresas tech. Dessa forma, trabalhamos para que sua jornada na Universidade seja aproveitada da melhor forma possível! Conte com a CDI durante seu ano letivo para tirar dúvidas e sugerir ideias. 
        <br><br>
        Logo mais, abriremos nosso processo seletivo e contamos com a sua presença para engajar e impactar cada vez mais alunos! 💙🐧`,
        email: `mailto:comissao.informatica.ft@gmail.com`,
        linkedin: `https://www.linkedin.com/company/cdi-ft-unicamp/mycompany/`,
        instagram:  `https://www.instagram.com/comissaodeinformatica/`,
        fca:false,
        ft:true,
    },
    {
        title: `Coletivo Indígena`,
        type: OrgType.coletivo,
        university: `FT | FCA`,
        image: `colindigena.jpg`,
        about: `Coletivo formado por estudantes indígenas da UNICAMP (FT e FCA) com o objetivo de
        receber, alocar nas repúblicas, ajudar na adaptação dos calouros indígenas e auxiliar
        nas demandas da vida desses estudantes`,
        instagram: `https://instagram.com/coletivoindigenaunicamplimeira`,
        fca:true,
        ft:true,
    },
    {
        title: `Coletivo Conexão Preta`,
        type: OrgType.coletivo,
        university: `FT | FCA`,
        image: `conpreta.jpeg`,
        about: `Fundado em 2018 por alunos dos campus FT e FCA, o coletivo tem como propósito conectar pessoas negras dentro do ambiente universitário, que para além de se aquilombar, também formarem uma rede de apoio contra o racismo.
        <br><br>
        A missão do Conexão é construir a luta antirracista acerca de questões raciais, voltada para a comunidade negra, através da promoção de um pensamento crítico e da expansão do debate racial em princípio na universidade. Um dos principais objetivos do conexão é promover diferentes discussões e projetos culturais que atendam as demandas por representatividade dentro da Unicamp,
        <br><br>
        O  Conexão Preta é dividido em cinco áreas: Formação, Financeiro, Comunicação e mobilização, Projetos externos, Projetos Internos e Presidência. 
        <br><br>
        Venha se aquilombar!!`,
        instagram: `https://www.instagram.com/coletivoconexaopreta/`,
        youtube: `https://www.youtube.com/@coletivoconexaopreta7472/streams`,
        site: `http://linktr.ee/coletivoconexaopreta`,
        fca:true,
        ft:true,
    },
    {
        title: `CVU`,
        type: OrgType.voluntariado,
        university: `FT | FCA`,
        image: `cvu.png`,
        about: `O CVU (Centro de Voluntariado Universitário) é uma associação sem fins lucrativos, de caráter não religioso e não político sediada em Ribeirão Preto-SP, fundada em 2011, composta por estudantes e professores universitários.”
        <br><br>
        O CVU Limeira tem como objetivo realizar uma ponte entre os estudantes da Unicamp e a comunidade de Limeira, através do trabalho voluntário, gerando um desenvolvimento coletivo. Atualmente a organização é dividida em 3 times de frente (Consultoria Social, Cultura Voluntária e Relacionamento) e 3 times de back (Administrativo Financeiro, Gestão de Pessoas e Marketing). 
        <br><br>
        Além de diversos trabalhos voluntários que normalmente realizamos, todo ano promovemos a Semana do Voluntariado, uma semana cheia de ações sociais a fim de incentivar o trabalho voluntário dentro da Universidade! Temos a missão de impactar a vida das pessoas, sempre evidenciando a importância da diversidade e inclusão, e buscando colocar em prática nossos valores: Honestidade, Empatia, Respeito e Amor.`,
        site: `https://cvulimeira.wixsite.com/consultoriasocialcvu`,
        facebook: `https://www.facebook.com/cvulimeira`,
        email: ``,
        instagram: `https://www.instagram.com/cvulimeira`,
        fca:true,
        ft:true,
    },
    {
        title: `Ecoedu Ambiental`,
        type: OrgType.voluntariado,
        university: `FT`,
        image: `ecoedu.png`,
        about: `O Ecoedu Ambiental é um Programa de Extensão Comunitária composto de alunos da FT e FCA, e está aberto a qualquer aluno que queira nos conhecer e fazer parte!
        <br><br>
        No programa, realizamos desde pesquisas científicas, ações pontuais, formação de libras e projetos sociais voltados a diversos públicos, tais como pessoas com deficiência, escolas, empresas e asilos.
        <br><br>
        Atualmente temos 8 projetos e são eles: VemSer, Plantando Conhecimento, Carpe Diem, Ações, Contação de Histórias, Blue, Trilha da Vida e Identidade.
        <br><br>
        Utilizamos da Educação Ambiental para valorizar o ser humano no contexto socioambiental, promovendo o autoconhecimento, autoestima e senso crítico, além de estimular o interesse, curiosidade, e a capacidade de resolver problemas, incentivando a educação social por meio do senso crítico e do posicionamento.
        <br><br>
        Levamos em consideração a interação e a interdependência de todos os aspectos ambientais: físicos, biológicos, econômicos, psicológicos, religiosos, sociais e culturais.
        <br><br>
        Venha também fazer história participando como membro dessa equipe! Entre em contato com a gente!!`,
        email: `mailto:ecoedu@unicamp.br`,
        site: `https://wordpress.ft.unicamp.br/ecoedu`,
        instagram: `https://www.instagram.com/ecoeduambiental`,
        fca:false,
        ft:true,
    },
    {
        title: `Enactus`,
        type: OrgType.voluntariado,
        university: `FT | FCA`,
        image: `enactus.jpeg`,
        about: `A Enactus é uma organização internacional sem fins lucrativos dedicada a inspirar estudantes a mudar o mundo através da Ação Empreendedora. 
        <br><br>
        A Enactus Unicamp Limeira tem como missão contribuir para o empoderamento das comunidades de Limeira, fomentando o empreendedorismo social. 
        <br><br>
        Atualmente a Enactus Unicamp Limeira possui três projetos ativos e uma equipe de prospecção. O Projeto Solidifica, capacita mulheres a produzir e vender produtos capilares em barra, o Projeto Jataí oferece aulas preparatórias para alunos de 9° ano interessados em ingressar em Colégios Técnicos e possui uma parceria com o Colmeia, o Projeto Geladown, capacita jovens com Síndrome de Down a produzir e vender geladinhos além da Equipe de Prospecção Resiliência, que busca demandas para o desenvolvimento de um novo projeto para a organização. 
        <br><br>
        Nosso Processo Seletivo estará aberto no dia 28 de fevereiro! Não perca a chance de desenvolver habilidades, se preparar para o mercado de trabalho e melhorar o mundo através da Ação Empreendedora com a gente!
        <br><br>
        Além disso, teremos um evento muito legal com palestras, coffee break, brindes e muitooo mais! Traremos pessoas renomadas do mercado de trabalho para trazer suas experiências e aprendizados. A Enactus Week é o evento queridinho mais esperados pelos enactors e abriremos para todos terem a oportunidade de participar! Se inscrevam! O evento ocorrerá no dia 5, 6 e 7 de março`,
        instagram: `https://www.instagram.com/enactusunicamplimeira`,
        fca:true,
        ft:true,
    },
    {
        title: `Engenheiros Sem Fronteiras`,
        type: OrgType.voluntariado,
        university: `FT | FCA`,
        image: `esf.jpeg`,
        about: `O Engenheiros Sem Fronteiras - Núcleo Limeira é uma organização estudantil que visa a transformação social de comunidades vulneráveis de Limeira, por meio de projetos utilizando a engenharia. Somos uma instituição de voluntariado que apresenta núcleos em diversos estados do Brasil com o mesmo propósito, o impacto no coletivo.
        <br><br>
        Desde sua fundação, em 2013, o núcleo já realizou mais de 50 projetos dentro dos eixos de Educação, Gestão e Empreendedorismo, Infraestrutura e Assistência Básica e Sustentabilidade. 
        <br><br>
        Nossos voluntários são divididos nas secretarias de Comunicação, Financeiro, Gestão de Pessoas, Projetos e Qualidade, realizando demandas específicas, além de estarem alocados em um projeto social.
        <br><br>
        O núcleo de Limeira é núcleo sênior na rede Engenheiros Sem Fronteiras Brasil, eleita a melhor ONG de Desenvolvimento Local do País pelo instituto Doar em 2019. Além disso, diversos projetos de Limeira ja foram premiados no Congresso da rede.
        <br><br>
        Quer conhecer mais sobre nós? Fique atento as nossas redes sociais, pois divulgaremos as datas do Processo Seletivo e também da nossa Palestra Insitucional. 
        <br><br>
        Vem transformar o mundo com a gente! 💚`,
        linkedin: `https://www.linkedin.com/company/esf-limeira`,
        instagram: `https://www.instagram.com/esflimeira`,
        fca:true,
        ft:true,
    },    
    {
        title: `Frente Feminista`,
        type: OrgType.coletivo,
        university: `FT | FCA`,
        image: `ff.png`,
        about: `Fundada em 2013, a Frente Feminista é um coletivo, cuja a missão é lutar pelos direitos das mulheres cis/ trans, pela igualdade de gênero, combater o machismo, e ser uma rede de apoio entre mulheres. Através da disseminação de informações, dialogar sobre como o machismo ocorre no ambiente universitário, evidenciar as opressões que cada mulher sofre, reconhecendo uma luta em comum promovendo a sororidade. Nosso objetivo é integrar, contribuir nos eventos culturais, e tratar de temáticas feministas e da autopercepção de mulheres e seu papel na sociedade.`,
        site: `https://linktr.ee/frentefeminista_limeira`,
        instagram: `https://instagram.com/frentefeminista_limeira`,
        fca:true,
        ft:true,
    },   
    {
        title: `Integra`,
        type: OrgType.ej,
        university: `FT | FCA`,
        image: `integra.jpeg`,
        about: `Integra é uma Empresa júnior, prestadora de serviços de consultoria nas áreas de Engenharia e Administração. É constituída e gerida por alunos de graduação da UNICAMP e atua no mercado desde 2009. Nesse pequeno período já foram realizados mais de 150 projetos de consultoria para clientes com diferentes intuitos, modelos de negócio e perfis.
        <br><br>
        Somos comprometidos com nosso trabalho como empresários juniores por acreditarmos que por meio dos nossos projetos podemos impactar a sociedade a nossa volta positivamente. Além disso, estamos todos unidos pelo propósito de crescermos como seres humanos, alunos e futuros profissionais`,
        site: `https://integraej.com/`,
        instagram: `https://www.instagram.com/integra.ej/`,
        fca:true,
        ft:false,
    },
    {
        title: `Liestag`,
        type: OrgType.liga,
        university: `FT | FCA`,
        image: `liestag.jpeg`,
        about: `Olá, nós somos a Liestag, a sua liga de estágios da Unicamp. 
        <br><br>
        Criada para ajudar você a se tornar o profissional do futuro, buscamos desenvolver os alunos nos aspectos das soft skills, que são as habilidades comportamentais(aquilo que a gente não aprende na escola e na faculdade, sabe?) Como oratória, liderança, negociação, além de te ajudar na preparação de processos seletivos, para você chegar prontíssimo para a entrevista. 
        <br><br>
        Além disso, trabalhamos para aproximar os alunos das empresas do mercado de trabalho, através de projetos e parcerias, como foi o caso da nossa parceria com o Banco Citi, um dos maiores bancos do mundo, onde ainda tivemos a oportunidade junto com os alunos que participaram do evento de fazer uma visita técnica na sede do banco no Brasil! 
        <br><br>
        Estamos aqui para transformar a sua experiência na universidade, transformar você, no profissional que o mercado tanto procura. Chegue mais, pegue a sua bebida e escolha o seu lugar, temos uma longa jornada pela frente!
        <br><br>
        Quer conhecer mais a Liestag? Entre em contato pelas nossas redes`,
        instagram: `https://www.instagram.com/liestag`,
        linkedin: `https://www.linkedin.com/company/liestag/`,
        fca:true,
        ft:true,
    },
    {
        title: `Liga de Data Science`,
        type: OrgType.liga,
        university: `FCA`,
        image: `ligads.jpeg`,
        about: `A Liga de Data Science é um grupo de estudos focado em ciência de dados. Nosso principal objetivo é conhecer e ensinar tópicos importantes relacionados a business intelligence, análise de dados e machine learning, além de desenvolver projetos próprios que envolvem esses temas.
        <br><br>
        Os membros da LDS participam do desenvolvimento de projetos seguindo metodologias ágeis ao longo de todo o ano. Além de participarem de momentos em conjunto para estudo, resolução de problemas e desenvolvimento de projetos.
        <br><br>
        Nossas atividades seguem um modelo híbrido, sendo que as atividades presenciais são realizadas na FCA. No entanto, somos formados por estudantes tanto da FT quanto da FCA.
        <br><br>
        Gostaria de conhecer melhor nosso time e nossos projetos? Acesse o link do nosso instagram ou do nosso link tree.`,
        site: `https://linktr.ee/ligadsunicamp`,
        instagram: `https://www.instagram.com/ligadsunicamp`,
        fca:true,
        ft:true,
    },
    {
        title: `Liga de Marketing`,
        type: OrgType.liga,
        university: `FCA`,
        image: `ligamkt.png`,
        about: `A Liga de Marketing foi criada em 2017 por alunos de Administração da Unicamp que gostariam de expandir seus conhecimentos na vasta e maravilhosa área do Marketing, uma vez que não existe um curso diretamente relacionado a isso na faculdade.
        <br><br>
        Desde então, nos tornamos a grande referência no Marketing na Unicamp por meio da realização de capacitações internas, assessorias e treinamentos externos, eventos com grandes nomes do cenário nacional, conteúdos nas redes sociais e diversas outras atividades incríveis.
        <br><br>
        Se você quer desenvolver suas habilidades de comunicação, criatividade e trabalho em grupo, além de aprender sobre os principais conceitos, ferramentas, estratégias e áreas do Marketing, essa é a organização ideal para você.
        <br><br>
        Contamos atualmente com membros da FCA, dos cursos de Engenharia, Administração, Nutrição e Ciências do Esporte, porém aceitamos membros de todos os cursos da FCA e FT.
        <br><br>
        Se quiser mais informações, por favor, entre em contato conosco no nosso instagram @ligademkt.  Estamos te esperando!!`,
        site: ``,
        facebook: ``,
        email: ``,
        instagram: `https://www.instagram.com/ligademkt`,
        fca:true,
        ft:true,
    },
    {
        title: `Liga do Mercado Financeiro`,
        type: OrgType.liga,
        university: `FCA`,
        image: `lmf.png`,
        about: `A Liga do Mercado Financeiro da Unicamp surgiu em 2015 no campus de Limeira, na Faculdade de Ciências Aplicadas, através de um grupo de universitários dos cursos de Engenharia de Produção, Engenharia de Manufatura e Administração, que tinham paixão pelo mercado financeiro.
        <br><br>
        Vendo a necessidade de expandir essa capacitação para os estudantes da Unicamp e incrementar o aprendizado da graduação, a Liga foi criada como organização estudantil e desde então renova seus membros anualmente, trabalhando conhecimentos, skills, habilidades e valores para disputarem as melhores vagas no mercado de trabalho.
        <br><br>
        Se você tem curiosidade sobre o mercado financeiro, quer aprender como usar melhor o seu dinheiro e analisar empresas, seu lugar é com a gente! Te esperamos no nosso Processo Seletivo! Nos acompanhem pelo nosso Instagram @lmfunicamp para mais informações!`,
        site: `https://www.lmfunicamp.com/`,
        instagram: `https://www.instagram.com/lmfunicamp`,
        fca:true,
        ft:true,
    },
    {
        title: `Limeteria`,
        type: OrgType.bateria,
        university: `FT | FCA`,
        image: `limeteria.png`,
        about: `A LIMETERIA é a bateria universitária da Unicamp de Limeira, nós representamos todos os cursos da FT e FCA, promovendo integração entre os cursos através da cultura do samba.
        <br><br>
        A LIMETERIA já participou de desafios como: Interbatuc, TABU e TUSCA, além de tocarmos em diversas festas realizadas em Limeira. Somos uma organização com viés social, nossos valores tem compromisso com a diversidade e inclusão. Realizamos ao longo dos nossos anos diversas ações sociais na comunidade de Limeira.
        <br><br>
        Importante lembrar que para fazer parte da LIMETERIA o único pré requisito é: querer!! Nós não temos processo seletivo e você não precisa saber tocar, vem com a gente, temos certeza que você vai gostar. 
        <br><br>
        Acompanhem nossas redes sociais @limeteria e venha ser um LimeLover`,
        site: `https://linktr.ee/Limeteria`,
        instagram: `https://www.instagram.com/limeteria`,
        fca:true,
        ft:true,
    },
    {
        title: `Marsha pelo Orgulho`,
        type: OrgType.coletivo,
        university: `FT | FCA`,
        image: `marsha.png`,
        about: `O coletivo Marsha Pelo Orgulho é uma organização estudantil, que tem como objetivo incentivar a inclusão e o reconhecimento da comunidade LGBTQIA+ na vida universitária dos alunos da Unicamp de Limeira; apoiar e promover toda ajuda necessária aos membros da comunidade em casos de LGBTQIA+FOBIA; realizar trabalhos e a promoção de assistência à coletividade; propiciar rodas de conversa, integração dos membros, roles LGBTs e compartilhar informações e conteúdos voltados ao público LGBTQIA+.
        <br><br>
        Além disso, faz parte do Marsha o Núcleo de Consciência Trans de Limeira, um espaço para pessoas trans encontrarem acolhimento e pertencimento!`,
        instagram: `https://www.instagram.com/marshaunicamplimeira/`,
        email: `mailto:marsha.unicamplimeira@gmail.com`,
        fca:true,
        ft:true,
    },
    {
        title: `Mosaico`,
        type: OrgType.outro,
        university: `FT | FCA`,
        image: `mosaico.png`,
        about: `O Mosaico é um grupo cristão, organizado e mantido por estudantes da Unicamp. O grupo se reúne semanalmente para compartilhar valores e mensagens bíblicas. O grupo preza pelo relacionamento entre pessoas e pelo respeito as diferenças. O Mosaico não possui nenhuma denominação religiosa, portanto não tem como foco levantar as diferenças, o fator em comum que reúne as pessoas é Cristo. A missão do Mosaico é unir os cristãos da Unicamp, formando uma família, oferecendo apoio espiritual, acadêmico e social a toda comunidade acadêmica. E a partir dessa união, alcançar estudantes que não conhecem a Cristo, através do evangelho e do testemunho.`,
        site: ``,
        facebook: `https://www.facebook.com/mosaicounicamp`,
        email: ``,
        instagram: `https://www.instagram.com/mosa1co`,
        fca:true,
        ft:true,
    },
    {
        title: `MTE`,
        type: OrgType.outro,
        university: `FCA`,
        image: `mte.jpeg`,
        about: ` O Mercado de Trabalho em Engenharia (MTE) é uma organização estudantil que abrange os estudantes das 5 engenharias da Unicamp Limeira. Nossa missão é de auxiliar os estudantes de engenharia a se conectarem às oportunidades do mercado de trabalho, por meio de experiências marcantes e práticas.
        <br><br>
        Para tanto, contamos com uma equipe apaixonada e capacitada, que proporciona diversos eventos à comunidade universitária, incluindo workshops, desafios, cursos e visitas técnicas. Entre nossos eventos mais renomados estão o 24 Horas, o Simula+ e, é claro, a Semana das Engenharias de Limeira (SEMELIM), os quais possibilitam o contato direto com profissionais de excelência das mais diversas áreas de atuação das engenharias.”
        <br><br>
        Caso você tenha se identificado com o MTE e queira saber mais sobre nossa organização, conheça nossas redes sociais:`,
        site: `https://www.mtelimeira.com/`,
        linkedin: `https://www.linkedin.com/company/mtelimeira/`,
        email: ``,
        instagram: `https://instagram.com/mte_unicamp`,
        fca:true,
        ft:true,
    },
    {
        title: `MUUVA`,
        type: OrgType.outro,
        university: `FCA`,
        image: `muuva.png`,
        about: `Nós somos o Muuva: Movimento Universitário de União entre Veganos e Agregados
        <br><br>
        Criado em 2021 por estudantes do curso de Nutrição e Ciências do Esporte da Unicamp de Limeira, hoje temos integrantes de diversos cursos da FCA e FT. 
        <br><br>
        Nosso principal objetivo é tratar pautas sobre o veganismo popular, movimento político que visa a libertação animal, interseccionando com as diversas opressões existentes na sociedade.
        <br><br>        
        Através de projetos e ações dentro e fora da universidade conseguimos debater e conversar sobre o veganismo popular em diversas esferas sociopolíticas e científicas, sempre pautados na ciência.`,
        site: `https://linktr.ee/MUUVA.Unicamp`,
        instagram: `https://instagram.com/muuvaunicamp`,
        fca:true,
        ft:true,
    },
    {
        title: `Refúgio`,
        type: OrgType.outro,
        university: `FT | FCA`,
        image: `refugio.jpeg`,
        about: `A Refúgio Unicamp Limeira é um grupo formado por alunos da Unicamp Limeira (FT e FCA). Somos responsáveis por auxiliar os grupos sócio-acêntrico que se encontram dentro do contexto universitário e que possam passar por situações de machismo, racismo, lgbtqia+fobia, gordofobia, xenofobia ou qualquer outro tipo de preconceito. Além disso, cabe à Refúgio conscientizar a comunidade universitária sobre a Redução de Danos e integrá-la como um modo de prevenção de violências como um todo.`,
        email: `mailto:refugiounicamplimeira@gmail.com`,
        instagram: `https://www.instagram.com/refugio.unicamplimeira/`,
        email: `mailto:refugiounicamplimeira@gmail.com`,
        fca:true,
        ft:true,
    },
    {
        title: `Sinergia`,
        type: OrgType.outro,
        university: `FT`,
        image: `sinergia.png`,
        about: `A área de energia é extremamente abrangente e multidisciplinar, sendo o setor que mais cresce nos últimos anos. Nós do Sinergia-CTE, somos uma organização estudantil sem fins lucrativos da Unicamp que visa aproximar os estudantes do mercado energético, assim como trabalhar com as áreas sociais, educacionais, ambientais e econômicas que estão correlacionadas a energia.
        <br><br>
        Para que isso seja possível realizamos diversos projetos, capacitações, palestras e parcerias. O nosso curso “ENERGIA: Matrizes e Mercado”, além de contar como horas complementares e recebe a certificação da Escola de Extensão da UNICAMP-EXTECAMP é prestigiado por diversas empresas do setor, como por exemplo: RAÍZEN, CPFL, COMERC, SOLSTÍCIO e outros gigantes do setor.`,
        site: `https://www.sinergiacte.com.br/home`,
        facebook: `https://www.facebook.com/cte.sinergia`,
        instagram: `https://www.instagram.com/sinergiacte/`,
        linkedin: `https://www.linkedin.com/in/sinergia-cte-06a039104/`,
        fca:true,
        ft:true,
    },
    {
        title: `Torque Baja`,
        type: OrgType.outro,
        university: `FT | FCA`,
        image: `torquebaja.jpeg`,
        about: `A Equipe Torque Baja é uma organização sem fins lucrativos que tem como objetivo integrar tanto a área administrativa quanto a área de projetos para o desenvolvimento de um veículo off-road para competições.
        <br><br>
        Os alunos que participam da Equipe Torque Baja formam equipes que representarão a FCA e FT no projeto Baja SAE. O projeto Baja SAE é um desafio lançado aos estudantes de diversas áreas de conhecimento que oferece a chance de aplicar na prática os conhecimentos adquiridos em sala de aula, visando incrementar sua preparação para o mercado de trabalho. Ao participar do projeto Baja SAE, o aluno se envolve com um caso real de desenvolvimento de projeto, desde sua a concepção, projeto detalhado e construção. No Brasil o projeto recebe o nome de Projeto Baja SAE BRASIL. Estas equipes são desafiadas semestralmente a participar de competições com o veículo construído por nós. Porém, antes do evento, o objetivo de cada equipe é projetar e construir um protótipo recreativo off- road. Esse projeto e a fabricação do veículo deve ser desenvolvido pelos membros da equipe sem envolvimento direto de engenheiros, educadores, profissionais do ramo off-road ou ligados a esportes a motor.`,
        linkedin: `https://www.linkedin.com/company/torquebaja`,
        instagram: `https://www.instagram.com/equipetorque/`,
        facebook: `https://pt-br.facebook.com/fcabaja/`,
        email: `mailto:bajafca@unicamp.br`,
        fca:true,
        ft:true,
    },
    {
        title: `Trote da Cidadania`,
        type: OrgType.voluntariado,
        university: `FT | FCA`,
        image: `trote.jpeg`,
        about: `"O Trote da Cidadania Unicamp/Limeira, é uma organização estudantil de cunho social, criada em 2012, a qual visa aproximar a comunidade de Limeira e a universidade através de ações e projetos voluntários. Trabalhamos para despertar a conscientização do potencial transformador de cada um na sociedade e buscamos refletir cada detalhe de nossas vidas dentro de um contexto global, para tornar o ambiente em que vivemos um lugar mais humano, agradável e sustentável para nós e para as próximas gerações.
        <br><br>
        Acreditamos que parte da nossa função social é agradecer a população de Limeira pela hospitalidade ao receber anualmente cerca de 800 novos alunos. Temos em nosso trajetória a semana de recepção de calouros (calourada), campanhas para doações, principalmente a de sangue que ocorre anualmente em parceria com o Hemocentro/Campinas; visitas a asilos, creches, ONG's e centros de reabilitação, além de projetos semanais que visam o desenvolvimento de diferentes públicos, como crianças e idosos.`,
        instagram: `https://instagram.com/trotedacidadania`,
        fca:true,
        ft:true,
    },
    {
        title: `AAAXO`,
        type: OrgType.atletica,
        image: `aaaxo.jpeg`,
        about: `A A.A.A.X.O. é uma organização estudantil que representa os alunos dos cursos de Gestão, Administração e Administração Pública no âmbito universitário. A Atlética tem como mascote o Lobo Guará, o qual representa nossa raça e paixão em honrar o manto laranja e preto e que demonstra o fato de deixarmos nossa marca, pegada, por onde passamos da melhor maneira possível, seja nos esportes, em nossos eventos, produtos ou projetos sociais.
        Acreditamos nos nossos alunos e fazemos tudo pensando em proporcionar o melhor a eles.
        Somos conhecidos pela nossa união, pelos ótimos times que se destacam nos campeonatos universitários e por nossos eventos.`,
        instagram: `https://www.instagram.com/aaaxdeoutubro/`,
        facebook: `https://www.facebook.com/AtleticaXdeOutubro/`,
        disabled: false,
        fca:true,
        ft:false,
    },
    {
        title: `CAAUL - Centro Acadêmico de Administradores da Unicamp de Limeira`,
        type: OrgType.ca,
        image: `caaul.jpeg`,
        about: `Olá! Somos o CAAUL, Centro Acadêmico de Administradores da Unicamp de Limeira, e nos responsabilizamos por canalizar todas as vozes presentes no curso, sendo a representação mais forte dos discentes. O nosso CA tem a missão de ouvir os estudantes, trabalhar em parceria com os professores e funcionários e construir a evolução do curso sempre. Procuramos, também, trazer novas experiências através de uma série de eventos, palestras e discussões, otimizando, assim, a vida universitária dos estudantes. Nos siga no insta para saber mais! @caaulim`,
        instagram: `https://www.instagram.com/caaulim`,
        disabled: false,
        fca:true,
        ft:false,
    },
    {
        title: `CAACS - Centro Academico Antonio da Costa Santos `,
        type: OrgType.ca,
        image: `caacs.jpeg`,
        about: `O Centro Acadêmico Antônio Costa Santos (CAACS) é uma organização sem fins lucrativos, apartidária, não-religiosa e que visa representar os alunos de Administração Pública da Universidade Estadual de Campinas (UNICAMP), na Faculdade de Ciências Aplicadas (FCA) na cidade de Limeira.
        <br><br>
        Antônio da Costa Santos (São Paulo, 4 de março de 1952 — Campinas, 10 de setembro de 2001), mais conhecido como Toninho do PT, foi arquiteto, professor universitário e político brasileiro. Quando foi assassinado, estava no cargo de prefeito de Campinas havia apenas oito meses e dez dias. Foi criado, em sua memoria, o Centro Acadêmico do curso de Administração Pública da Faculdade de Ciências Aplicadas da Universidade Estadual de Campinas (Unicamp) em 2013, onde o nome escolhido fora "Centro Acadêmico Antônio da Costa Santos" (Sigla Caccs) como forma de homenagem.`,
        email: `mailto:caaacs.fca.unicamp@gmail.com`,
        instagram: `https://www.instagram.com/caacs.unicamp`,
        linkedin: `https://www.linkedin.com/company/centro-acad%C3%AAmico-ant%C3%B4nio-costa-santos/`,
        whatsapp: `https://wa.me/+5535984356580`,
        disabled: false,
        fca:true,
        ft:false,
    },
    {
        title: `Clima de Mudança Unicamp Limeira`,
        type: OrgType.outro,
        image: `cdm.jpeg`,
        about: `O Clima de Mudança Unicamp Limeira é um movimento de jovens, vertente do Clima de Mudança Nacional (sediado em SP), que tem como propósito reivindicar a ação climática no Brasil, levar mudanças concretas pelo clima para dentro da política institucional e promover a ideia de um país mais justo e sustentável.
        <br><br>
        Para isso, juntamos estudantes interessades e comprometides em planejar e realizar ações focadas nas pautas socioambientais e nas mudanças climáticas.
        <br><br>
        E ai, vêm fazer parte da mudança com a gente? 🌱🌎`,
        site: `https://linktr.ee/cdmnaunicamp`,
        email: `mailto:cdmunicamp@gmail.com`,
        instagram: `https://www.instagram.com/cdmnaunicamp/`,
        disabled: false,
        fca:true,
        ft:true,
    },
    {
        title: `Nexus Girls`,
        type: OrgType.coletivo,
        image: `nexus.png`,
        about: `Somos a comunidade de incentivo e permanência de mulheres na tecnologia! Nosso propósito é unir, incentivar e impulsionar as mulheres na tecnologia, sendo um ponto de apoio e partilha de conhecimentos em uma área que ainda somos minoria.
        <br><br>
        Nossa comunidade é composta por meninas de todos os cursos que se interessam por essa pauta, para que possamos ter um ambiente diverso e agregar cada vez mais perspectivas.
        <br><br>
        Vem fazer parte da nossa comunidade e conversar com a gente, vai ser um prazer te ter conosco, juntas somos mais fortes 💜🧡
        `,
        instagram: `https://www.instagram.com/nexus.girls_unicamp`,
        linkedin: `https://www.linkedin.com/company/nexus-girls-unicamp/`,
        whatsapp: `https://chat.whatsapp.com/Bg551vu5bozJ6sFawDnDI0`,
        disabled: false,
        fca:true,
        ft:true,
    },
    {
        title: `GTCMA`,
        type: OrgType.extensao,
        image: `gtcma.png`,
        about: `Nós, do Grupo de Tecnologias e Cuidados com o Meio Ambiente, somos um projeto de pesquisa e extensão que atua na conscientização sobre questões que envolvem a educação ambiental. Atualmente, contamos com a participação de alunos e professores dos cursos de Engenharia e Saneamento Ambiental, de forma voluntária.
        <br><br>
        Através do ensino de práticas sustentáveis, eventos e dinâmicas são organizados periodicamente, a fim de promover a integração entre a universidade e a comunidade no geral. Alguns exemplos dessas atividades são o acompanhamento de um sistema de esgoto alternativo, chamado wetland, em uma escola rural da cidade; e a Semana de Desenvolvimento em Meio Ambiente (Sedema), que terá a quarta edição neste ano.
        <br><br>
        Então, para saber mais sobre as atividades desenvolvidas e participar desse projeto incrível, acompanhe a gente através dos nossos canais oficiais! 💛🌱🧡
        `,
        site: `https://sites.google.com/dac.unicamp.br/gtcma`,
        email: `mailto:wetlandsftunicamp@gmail.com`,
        instagram: `https://www.instagram.com/projeto_gtcma?igsh=MWdzaHNrOXFpamk1bw==`,
        disabled: false,
        fca:false,
        ft:true,
    },
    {
        title: `Raízes do Esporte`,
        type: OrgType.voluntariado,
        image: `raizes.jpeg`,
        about: `O Raízes dos Esporte é uma organização estudantil sem fins lucrativos que zela pela formação de indivíduos com valores para a promoção do bem estar e equilíbrio social, como "Respeito", "Equidade", "Empatia", "Diversidade" e "União".
        Para isso, nosso público principal são as crianças, com treinos, eventos e momentos marcantes na vida delas.
        <br><br>
        Quer saber mais como fazemos isso? Fique atento as redes sociais, pois divulgaremos as datas do Processo Seletivo e venha mudar vidas com a gente, para mais dias momentos felizes na vida dessas crianças! Lembrando que é Raízes para todos os cursos 🩵🩷`,
        linkedin: `https://www.instagram.com/raizesdoesporte`,
        whatsapp: `https://wa.me/+5513991673081`,
        disabled: false,
        fca:true,
        ft:false,
    },
    {
        title: `Unicamp Racing Team 1600`,
        type: OrgType.extensao,
        image: `f1600.jpeg`,
        about: `A equipe Unicamp Racing Team 1600 é uma equipe de formula 1600 e um projeto de extensão no qual o objetivo é ensinar um real desafio de engenharia a partir da construção de um carro de corrida. 
        <br><br>
        O projeto apresenta pela primeira vez na historia uma equipe universitária entrando em uma categoria nacional no qual os próprios alunos fazem Administrativo, Comercial, Marketing e Construção do carro. As corridas serão no Autódromo de interlagos junto com outras Categorias como AMG cup, Old Stock, Copa HB20 entre outras.
        <br><br>
        A equipe também disponibiliza treinamentos internos sobre mecânica automotiva e também treinamentos mais específicos voltados para preparação de corrida.`,
        email: `mailto:Unicamp Racing Team 1600`,
        linkedin: `https://www.instagram.com/unicamp1600`,
        disabled: false,
        fca:true,
        ft:true,
    },
    {
        title: `CAMAB - Centro Acadêmico Maria Cristina Faber Boog`,
        type: OrgType.ca,
        image: `camab.png`,
        about: `O Centro Acadêmico Maria Cristina Faber Boog (CAMAB) é uma entidade que representa os alunos do curso de nutrição da Faculdade de Ciências Aplicadas (FCA) da UNICAMP com sede no município de Limeira. O CAMAB tem como finalidade promover, através de debates, conferências, cursos e mídias sociais ou por quais quer outros meios a divulgação e discussão de assuntos culturais, sociais, políticos e científicos; realizar encontros, seminários, projetos e palestras e outros eventos voltados para a área de Nutrição.`,
        facebook: `https://www.facebook.com/CAMAB.Nutricao`,
        instagram: `https://www.instagram.com/camab.nutricao`,
        youtube: `https://www.youtube.com/@camabunicamp1127/featured`,
        linkedin: `https://br.linkedin.com/company/centro-acad%C3%AAmico-maria-cristina-faber-boog`,
        disabled: false,
        fca:true,
        ft:false,
    },
    {
        title: `CETEL - Comissão de Engenharia de Telecomunicações`,
        type: OrgType.comissao,
        image: `cetel.png`,
        about: `A CETEL é a Comissão de Engenharia de Telecomunicações, organizada por alunos para os alunos.
        <br><br>
        Nosso objetivo é promover a integração entre alunos do curso de Engenharia de Telecomunicações, diretoria, docentes e demais órgãos da Universidade. Assim, prestando apoio e orientação aos alunos de forma a auxiliar no desenvolvimento profissional e social, assim como aos membros internos da organização.
        <br><br>
        Na prática, buscamos promover eventos, palestras e visitas técnicas voltadas às áreas da Engenharia e das Telecomunicações.
        <br><br>
        Se você é aluno de Engenharia de Telecomunicações e quer contribuir diretamente para o fortalecimento do curso em nossa universidade, a CETEL é o lugar certo!
        `,
        site: `https://www.link.menuv.app/cetel`,
        instagram: `https://www.instagram.com/telecomunicamp`,
        disabled: false,
        fca:false,
        ft:true,
    },
    {
        title: `Cens.Jr`,
        type: OrgType.ej,
        image: `censjr.jpeg`,
        about: `Há uma década no mercado, a Cens.Jr é a empresa júnior de Nutrição e Esporte a qual oferece a oportunidade única de entrar em contato com o mundo empresarial ainda durante a graduação. Através de nossos projetos nutricionais e esportivos, os membros da nossa empresa júnior atuam em equipe para aplicar os conhecimentos adquiridos em sala de aula em situações reais, enfrentando desafios do mercado, proporcionando a chance de interagir diretamente com clientes, desenvolvendo habilidades de comunicação, negociação e gestão de projetos. 
        <br><br>
        Somos uma associação civil sem fins lucrativos onde todo o lucro gerado pela Cens.Jr é reinvestido em atividades educacionais, viagens para eventos, capacitações e aprimoramentos dos nossos membros, garantindo uma experiência enriquecedora e impactante como nenhuma outra na graduação.
        <br><br>
        Junte-se a família Cens e faça parte dessa jornada rumo ao sucesso profissional e pessoal.`,
        site: `https://www.censjr.com`,
        facebook: `https://www.facebook.com/censempresajr`,
        email: `mailto:cens.jr@gmail.com`,
        instagram: `https://www.instagram.com/cens.unicamp`,
        linkedin: `https://www.linkedin.com/company/censjr`,
        whatsapp: `https://wa.me/+5512988885830`,
        disabled: false,
        fca:true,
        ft:false,
    },
    {
        title: `LINHUT`,
        type: OrgType.liga,
        image: `lihnut.jpeg`,
        about: `A LIHNUT (Liga Humanizada de Nutrição Aplicada a Doenças Crônicas Não Transmissíveis), criada em 2019, tem como objetivo desenvolver profissionais responsáveis, humanizados e capacitados em doenças crônicas não transmissíveis, por meio de aulas, discussões e atividades realizadas com seus membros. Além disso, a liga tem o propósito de promover autonomia alimentar à população a partir de atividades que impactem o público externo.`,
        email: `mailto:linhut.unicamp`,
        instagram: `https://www.instagram.com/lihnut.unicamp`,
        disabled: false,
        fca:true,
        ft:false,
    },
    {
        title: `Teste`,
        type: OrgType.outro,
        image: `nft.gif`,
        about: `Muda aí pfv`,
        site: `a`,
        facebook: `a`,
        email: `mailto:`,
        instagram: `a`,
        youtube: `a`,
        linkedin: `a`,
        whatsapp: `https://wa.me/`,
        disabled: true,
        fca:true,
        ft:true,
    }
]

const section_blueprint = `
<div class="section-div">
    <h3 class="section-title"> 
        --none_title 
    </h3>
    <hr>
</div>
`;

const card_blueprint = `
<div class="card mx-auto mt-5 cardStyle" style="width: 18rem; ">
    <div class="column-img-social">
        <div> 
            <img src="./img/--none_cards" class="mt-3 card-img-top" alt="..."> 
        </div>
        <div class="buttons-card">
            --none_cards
        </div>
    </div>
    <div class="card-body">
        <h3 class="card-title text-center"> 
            --none_title 
        </h3>
        <p class="card-text"> 
            --none_text
        </p>
        <div class="row justify-content-center">
            <img src="./logos/fca.png" style="width:6rem; height:3rem" alt="Logo da FCA">
            <img src="./logos/ft.png"  style="width:4rem; height:3rem" alt="Logo da FT">
        </div>
    </div>
</div>
`;

const social_btn_blueprint = `
<a href="--none_link" target="_blank" class="btn-card btn">
    <i class="--none_class" style="text-decoration: none; color: white;"></i>
</a>
`;

// CARDS
const cards = document.getElementById("cardOrgs");
orgsList.sort((a,b) => a.title > b.title);

for (const tp of Object.keys(OrgType)) {
    orgsFiltered = orgsList.filter((org) => org.type == OrgType[tp]);

    cards.appendChild(mkSection(OrgType[tp]));
 
    for (const orgF of orgsFiltered) {
        if (!orgF.disabled){
            cards.appendChild(mkOrgCard(orgF));
        }
    };   
}

function mkSection (name){
    let section_model = (new DOMParser()).parseFromString(section_blueprint,'text/html').body.firstElementChild;

    section_model.firstElementChild.innerText = name;

    return section_model;
}

function mkOrgCard (orgObj) {
    let card_model = (new DOMParser()).parseFromString(card_blueprint,'text/html').body.firstElementChild;

    let social_column = card_model.children[0];
    let logo        = social_column.children[0].firstElementChild;
    let social_btns = social_column.children[1];  
    
    logo.src = "./img/" + orgObj.image;

    social_btns.innerText = '';
    social_btns.appendChild(mkIcon(orgObj.site,      `fa-solid fa-globe`));
    social_btns.appendChild(mkIcon(orgObj.facebook,  `fa-brands fa-facebook`));
    social_btns.appendChild(mkIcon(orgObj.instagram, `fa-brands fa-instagram`));
    social_btns.appendChild(mkIcon(orgObj.email,     `fa-solid fa-envelope`));
    social_btns.appendChild(mkIcon(orgObj.linkedin,  `fa-brands fa-linkedin`));
    social_btns.appendChild(mkIcon(orgObj.youtube,   `fa-brands fa-youtube`));
    social_btns.appendChild(mkIcon(orgObj.whatsapp,  `fa-brands fa-whatsapp`));
    social_btns.appendChild(mkIcon(orgObj.discord,   `fab fa-discord`));


    let card_body = card_model.children[1];
    let title     = card_body.children[0]
    let about     = card_body.children[1]

    title.innerText = orgObj.title;
    about.innerHTML = orgObj.about;

    let images = card_body.children[2]
    if(typeof orgObj.fca === 'undefined' || !orgObj.fca){
        images.children[0].style.display = 'none'
    }
    if(typeof orgObj.ft === 'undefined' || !orgObj.ft){
        images.children[1].style.display = 'none'
    }
    return card_model;
}

function mkIcon(link, cssClass) {
    let social_btn_model = (new DOMParser()).parseFromString(social_btn_blueprint,'text/html').body.firstElementChild;

    if (typeof link !== 'undefined' && link !== ''){
        social_btn_model.href = link;
        
        social_btn_model.firstElementChild.className = cssClass;

        return social_btn_model;
    }
    else {
        social_btn_model.style.display = 'none';
        return social_btn_model;
    }

}