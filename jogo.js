var inventario = []  //usado para armazenar os itens do inventário
var vida = 10   //vida do personagem principal
var vitorDaudt = 0
var vitorDauditi
var vitorDaught = true

    while(vitorDaudt <= 1){ //laço de repetição
        alert("seu amigo te convidou para participar de uma aula experimental de judô\nvocê quer participar?")//perfunta inicial
        let vitorDauner = Number(prompt("1.participar do treino\n2.não participar\n3. não quero jogar\n4. como o jogo funciona"))//pergunta para a pessoa que está jogando oque ela deseja fazer
        if(vitorDauner == 1){//se a pessoa digitar 1 vai ir para a função história que vai contar toda a história do personagem
            historia()
        }else if(vitorDauner == 2){ //vai ir para a função naoParticipar onde vai contar a história que criei, onde a personagem principal irá falecer
            naoParticipar()
        }else if(vitorDauner == 3){//se a pessoa digitar 3 vai voltar para o laço e perguntar oque ela deseja fazer
            alert("ah, que pena que você não quer jogar, se quiser volte mais tarde :)")
        }else if(vitorDauner == 4){//se a pessoa digitar 4 irá aparecer no prompt um tutorial completo de como jogar o jogo
            alert("durante o jogo irá aparecer vários mini textos falando sobre a história da atleta, e você deverá excolher as opções corretas para chegar até ela chegar nas olimpíadas caso faça as escolhas incorretas você irá ir perdendo a confiança das pessoas e não ter oque comer nem onde morar e nem ter dinheiro para comprar nada fazendo com que você perca o jogo")        
        }else{//irá aparecer não reconheço o comando se a pessoa digitar números maiores que 4
            alert("infelizmente não reconheço este comando :(")
        }
    }

function historia(){//vai ser a função história onde fica armazenado toda a história da personagem principal caso a pessoa digite 1
    while(vitorDaught == true){ //primeiro checkpoint, usado quando o jogador usa a resposta fazendo com que ele volte nela
        alert("bem vindo ao jogo baseado na judoca mahboubeh barbari zarfi")
        alert("este jogo possuí duas histórias, uma ruim e uma boa, faça as escolhas corretas para ganhar")
        alert("neste jogo falaremos de toda a trajetória de mahboubeh barbari zarfi até sua chegada nas olimpiadas")
        alert("faça as escolhas corretas para vencer o jogo, caso você não faça escolhas sabias irá a falência")
        alert("vamos começar então")
        alert("seu amigo lhe convida para participar de uma aula experimental de judô, você topa participar?")
        a = prompt(`decisão: 1- você decide participar da aula\n2- você não participa`)//serve para interagir com o jogador
        if(a == 1){//se digitar 1 vai acontecer oque está escrito no alert
             alert("seu amigo lhe pergunta se você deseja que ele faça uma breve explicação sobre como funciona o esporte")
            a = prompt(`decisão: 1- você aceita sua explicação\n2- você não aceita a explicação`)//serve para interagir com o jogador
        }
        if(a == 1){//se digitar 1 vai acontecer oque está escrito no alert
            alert("parabéns você adquiriu DÚVIDA")
            alert("você e seu amigo tem uma longa conversa sobre o esporte e você tem diversas dúvidas então seu amigo resolve lhe explicar somente o necessário e deixar você aprender as coisas sózinha conforme o tempo")
            alert("no início você fica brava com ele pois você queria entender tudo sobre o esporte")
            inventario.push(`DÚVIDA`)//irá adicionar a palavra dúvida ao inventário
            vitorDaught = false
        }else{//se o jogador digitar 2 irá para a função naoParticipar onde irá ter um história completamente diferente
            naoParticipar() //função naoParticipar
        }
    }
    vitorDaught = true
    while(vitorDaught == true){//segundo chekpoint, usado se a pessoa errar a resposta
        alert("chegou o horário do treino e você começa a se arrumar\n chegando lá você pede um kimono emprestado e seu amigo consegue um para você")
        alert("todos começam a se aquecer, se alongar e você acha estranho tudo aquilo pois é sua primeira vez em um lugar assim")
        alert("seu amigo lhe pergunta se você quer lutar contra ele para ele te ensinar algumas coisas e te dar algumas dicas")
        alert("você fica em dúvida se quer ou não")
        a = prompt(`decisão: 1- você aceita lutar contra seu amigo\n2- você recusa lutar contra  o seu amigo`)//serve para interagir com o jogador
        if(a == 1){//se digitar 1 vai acontecer oque está escrito no alert
            alert("você e seu amigo lutam um contra o outro e quando acaba o tempo você acha tudo isso muito engraçado e não consegue parar de rir")
            vitorDaught = false
        }else{//se o jogador digitar 2 irá para a função naoParticipar que tem uma história completamente diferente
            naoParticipar()
        }
    }
    vitorDaught = true
    while(vitorDaught == true){//terceiro chekpoint, usado se o jogador errar a respota ele terá que responde ela novamente 
        alert("o treino acaba e seu amigo pergunta para você se você gostou de lutar judô")
        a = prompt(`decisão: 1- dizer que gostou\n 2.seu amigo fica triste`)//serve para interagir com o jogador
        if(a == 1){//se digitar 1 vai acontecer oque está escrito no alert
            alert("parabéns você adquiriu FORÇA DE VONTADE")
            inventario.push(`FORÇA DE VONTADE`)//adicionar FORÇA DE VONTADE ao array
            alert("você vai levar o kimono na recepção mais seu amigo se entromete e fala pra você levar para casa e lavar pra usar no treino do outro dia já que você gostou do esporte")
            a = prompt(`decisão: 1- você aceita levar o kimono para casa e lavar\n2- você diz que vai pensar ainda se vai continuar no esporte e não leva o kimono para casa`)//serve para interagir com o jogador
            vitorDaught = false
        }else{//se o jogador digitar 2 irá para a função naoParticipar que tem uma história completamente diferente
            naoParticipar()
        }
    }

    vitorDaught = true
    while(vitorDaught == true){//quarto chekpoint, usado quando o jogador erra a resposta forçando ele a responder ela novamente até a acertar
        if(a == 1){//se digitar 1 vai acontecer oque está escrito no alert
            alert("você começa a praticar o esporte diariamente junto com o seu amigo")
        alert("após ver que iria ter um campeonato de judô próximo de onde você mora, você começa a treinar em dobro para ganhar")
        vitorDaught = false
        }else{//se o jogador digitar 2 irá para a função naoParticipar que tem uma história completamente diferente
            naoParticipar()
        }
    }
    vitorDaught = true
    while(vitorDaught == true){//quinto chekpoint, usado quando o jogador erra a resposta fazendo com que ele respoda ela novamente até a acertar
        a = prompt(`decisão: chegou o dia de você pagar a inscrição do campeonato e você está em duvida de participar\n 1- pagar a inscrição\n2. não pagar a inscrição`)//serve para interagir com o jogador
        if(a == 1){//se digitar 1 vai acontecer oque está escrito no alert
            alert("parabéns você adquiriu o COMPROMISSO")
            inventario.push(`COMPROMISSO`)//adicionar COMPROMISSO dentro do inventário
            alert("você fica muito empolgada que vai participar do campeonato então começa a se cobrar em dobro")
            alert("após muitos treinos chega a véspera de campeonato, você está muito ansiosa pois você vem se dedicando muito para isso")
            alert("seu amigo convida você para ir em uma festa durante a noite e você fica pensativa pois você iria chegar tarde em casa e iria ficar cansada no dia do campeonato então você precisa tomar uma decisão")
            a = prompt(`decisão: 1- não ir a festa\n2- ir a festa`)//serve para interagir com o jogador
            vitorDaught = false
        }else{//se o jogador clicar 2 ele irá para a função naoParticipar que tem uma história completamente diferente
            naoParticipar()
        }
    }
    while(vitorDaught == true){//sexto laço de repetição, usado quando o jogador erra uma resposta forçando ele a responder ela novamente até acertar ela
        if(a == 1){//se digitar 1 vai acontecer oque está escrito no alert
            alert("você tem uma sabia escolha pois estará descansada amanhã para a sua luta")
            alert("parabéns você adquiriu REFLEXÃO")
            inventario.push(`REFLEXÃO`)//serve para adicionar palavras dentro do array
            vitorDaught = false
        }else{//se o jogador clicar 2 irá para a função naoParticipar que tem uma história completamente diferente
            naoParticipar()
        }
    }
    vitorDaught = true
    while(vitorDaught == true){//sétimo laço de repetição, usado quando o jogador erra a resposta fazendo com que ele seja forçado a responde ela novamente até a acertar
        alert("a noite passou e você acorda\nvocê arruma sua mochila e vai de uber com seu amigo para o campeonato\nvocê está muito nervosa mais seu amigo ajuda você a se acalmar\nvocê fica mais calma mais vai chegando a hora da luta e você está muito feliz só por ter chegado onde chegou")
        alert("você bota seu kimono e se prepara para hora da luta\nvocê é chamada para ir lutar e você e sua adversária dão uma encarada e você da uma risada")
        alert("a luta começou e você acaba ganhando e pensa o quão foi emportante toda sua preparação para estar ali\n após uma grande reflexão após a luta você decide investir no esporte e tentar viver daquilo")
        alert("você é chamada pra pegar sua medalha e você consegue ficar em primeiro lugar\nparabéns você adquiriu CONQUISTA")
        inventario.push(`COMPROMISSO`)//serve para adicionar palavras dentro de um array
        
        alert("após vários e vários campeonatos ganhos você percebe que onde você mora(irã) tem muitas restrições para você pois você é mulher")
        a = prompt("decisão: 1 - você ir viajar para alemanha em busca de novas oportunidades\n2. você ficar no irã")//serve para interagir com o jogador
        if(a == 1){//se digitar 1 vai acontecer oque está escrito no alert
            alert("parabéns você adquiriu INDEPENDÊNCIA")
            inventario.push(`INDEPENDÊNCIA`)//serve para adicionar palavras dentro de um array
            alert("você faz um pedido de asilo do seu país natal e viaja para alemanha onde você permanesce lá enquanto seu pedido de asilo era processado, mais enquanto ele não foi processado você acaba ficando com o status de refugiada mais isso não te abala")
            alert("devido o fato de você ter se mudado de última hora você está sem condições de se sustentar então resolve pedir dinheiro emprestado para sua amiga mas infelizmente ela está sem dinheiro então ela lhe da a idéia de fazer uma vaquinha para ajudar você com alimentação e campeonatos")
            vitorDaught = false
        }else{//se o jogador clicar 2 irá para a função naoParticipar que tem uma história completamente diferente
            naoParticipar()
        }
    }
    vitorDaught = true
    while(vitorDaught == true){//oitavo chekpoint, usado quando o jogador erra uma resposta fazendo com que ele precise responder ela novamente até a acertar
        a = prompt("1.fazer a vaquinha\n 2.não fazer a vaquinha")//serve para interagir com o jogador
        if(a == 1){//se digitar 1 vai acontecer oque está escrito no alert
            alert("parabéns você adquiriu GRATIDÃO")
            inventario.push(`GRATIDÃO`)//serve para adicionar uma palavra dentro de um array
            alert("você fica muito grata com a ajuda de sua amiga e de todas as pessoas que estão a ajudando a realizar seu sonho")
            alert("você consegue se increver em um campeonato muito importante onde tem vários olheiros(pessoas que observam você lutar)que podem te dar uma grande oportunidade então pensa que precisa ir com tudo pois é uma chance muito importante para sua carreira")
            alert("graças a sua dedicação em sempre ir nos treinos de a ajuda de quem ajudou você na sua vaquinha você conseguiu se consagrar campeã da sua categoria")
            console.log("no memento você tem")
            for(let a = 0; a < inventario; a++){//serve para listar oque tem dentro do inventário do jogador
                console.log(`${a+1}. ${inventario[a]}`)//serve para listar oque tem dentro do inventário do jogador
            }
            vitorDaught = false
        }else{//se o jogador clicar 2 irá para a função naoParticipar
            naoParticipar()
        }
    }
    vitorDaught = true
    while(vitorDaught == true){//nono chekpoint, usado quando o jogador erra a resposta fazendo com que ele responda ela de novo até a acertar
        alert("um dos olheiros que estavam observando você lutar se interessaram muito em você e no seu estilo de luta e te convidam para participar da academia dele")
            a = prompt("1.aceitar a oferta\n2. não aceitar a oferta do olheiro")//serve para interagir com o jogador
        if(a == 1){//se digitar 1 vai acontecer oque está escrito no alert
            alert("agora você está participando da academia do olheiro e está muito contente com isso pois é uma academia muito famosa")            
            alert("um tempo depois você é chamada para participar do time de refugiados das olimpíadas devido a toda sua tragetória e dedicação durante todo esse tempo")
            alert("se você tiver FORÇA DE VONTADE você pode participar das olimpíadas")
            if(inventario.includes(`FORÇA DE VONTADE`)){//serve para checar se o jogador tem o item necessário para passar de fase, se ele não tiver ele vai para o else fazendo com que ele perca o jogo e voltando desde o início
                a = prompt("1. você decide participar\n 2. não participar das olimpíadas")//serve para fazer perguntas para o jogador
                vitorDaught = false
            }else{//se o jogador clicar 2 ele perde o jogo mais tem um chekpoint ali em cima então ele vai voltar para a pergunta novamente até ele acertar
                alert("fim de jogo você perdeu")
            }
        }else{//se o jogador errar a pergunta ele vai para a função naoPartcipar que tem uma história completamente diferente
            naoParticipar()
        }
    }
    vitorDaught = true
    while(vitorDaught == true){//décimo chekpoint usado caso o jogador erre a resposta fazendo com que o o jogador precise responder novamente até acertar
        if(a == 1){//se digitar 1 vai acontecer oque está escrito no alert
            alert("você começa a se dedicar em dobro pois já já está chegando o dia das olimpíadas")
            alert(`você depois de muito tempo sem falar com seus pais pega um telefone emprestado e conta para eles tudo que está acontecendo na sua vida e eles ficam extremamente orgulhosos de você falam que você está no caminho certo e você fica muito feliz de estar ouvindo isso e te deixa ainda mais empolgada para as olimpiadas, fazendo com que você treine muito mais também`)
            alert("após muitos e muitos treinos de judô o dia das olimpíadas está chegando e você está muito feliz e ansiosa pois foi muito difícil chegar onde chegou")
            alert("você acaba perdendo a luta mais mesmo assim fica muito feliz pois você realizou um sonho seu e reconhece as dificuldades que você teve pra chegar onde chegou")
            vitorDaught = false
        }else{//caso o jogador erre a resposta ele irá para a função não participar
            naoParticipar()
        }
    }
}
function naoParticipar(){//função usada caso o jogador digite o número dois
    alert(`você e seu amigo seguem conversando`)
    alert(`e você comenta que está muito cansada ultimamente devido a sua longa rotina de treinos e precisa fazer alguma coisa para dar uma relaxada mais seu amigo não da muita bola para isso pois está um pouco bravo com você mas vocês seguem o caminho até suas casas conversando`)
    alert(`no dia seguinte logo quando você acorda você começa a se arrumar para ir à escola, logo depois você encontra seu amigo aí vocês se cumprimentam e começam a conversar na ida pra escola, ele te convida para uma festa onde irá ter um menino em que você está afim então sem pensar duas vezes você aceita\nvocê está ansiosa para que o dia passe logo para ir na festa, a manhã vai passando e você conversou a manhã toda com o seu amigo sobre a festa e o quão está ansiosa para a festa`)
    alert(`quando você chega em casa você fica em dúvida se conta para os seus pais sobre a festa e vai na festa escondido`)
    alert(`você conta para seus pais sobre a festa e eles ficam contentes que você não mentiu para elese deixam você ir na festa`)
    alert(`você vai no salão e se arruma toda para ficar bonita para a festa\nchegando na festa você já se depara com o seu crush e vocês se olham, você fica toda corada e vira o rosto rápido e logo depois vai conversar com o seu amigo\nvocês começam a conversar sobre o quão a noite vai ser incrível`)
    alert("todos começam a beber e você fica em dúvida se começa a beber junto pois seus pais tinham falado para você não beber pois poderia fazer coisas que iria se arrender depois, mais mesmo sabendo dos riscos você decidiu beber junto com  o seu amigo mas seu amigo não te fala que ele tinha botado um entorpecente(droga) dentro do seu copo, aí você começa a se sentir estranhamente diferente e acaba gostando da sensação")
    alert("o tempo vai passando e você dança muito e bebe muito e a festa acaba e você pede para sua mãe ir te buscar e ela tem uma discussão com você pois você está claramente muito bêbada e você decide que não vai contar para sua mãe que tomou um entorpecente pois ela proibiria você de sair com os seus amigos e você não quer isso, quando você chega em casa você vai direto tomar um banho e depois disso você vai se arrumar para ir dormir, já deitada na cama você pega seu celular e agradece seu amigo pela noite incrível e depois disso vai logo dormir")
    alert("quando você acorda e bota sua roupa para ir para escola você se lembra da sensação que você sentiu ontem(de ter tomado uma bebida com entorpecentes)e deseja mais, então você pega dinheiro da bolsa da sua mãe fala que o dinheiro é para comprar lanche e quando você chega na escola você pede mais entorpecentes para seu amigo e lhe da o dinheiro\nno dia seguinte seu amigo lhe da os entorpecentes e fala pra ela não usar muito se não ia se viciar e não é bom mas infelizmente você está tão alucinada que compra os entorpecentes")
    alert("você começa a usar os entorpecentes todo dia para dar uma relaxada\nmas certo dia sua mãe estava arrumando o seu quarto quando você estava indo para a escola e acha o lugar onde você esconde suas drogas e quando você chega em casa sua mãe e seu pai questionam você sobre oque eles acharam e você fala tudo pra eles e eles ficam muito bravos com você pois não esperavam que você estava fazendo isso, então eles resolvem te aconselhar e falar para você parar de usar essas coisas pois além de fazer muito mal para o corpo você vai ficar viciada e não vai ter futuro e por um certo tempo você cogita ouvir seus pais e fazer oque eles estavam falando mas você quer continuar usando os entorpecentes, mas dessa vez você vai esconder eles melhor")
    alert("meses se passaram e você continua usando essas coisas e fica fica feliz com o fato de sua mãe ou seu pai não acharem mais\ninfelizmente você acaba ficando com alguns efeitos colaterais e seus pais começam a desconfiar que você não parou de usar drogas então eles resolvem procurar novamente em todo seu quarto enquanto você está na escola e eles acabam achando a caixa que você estava escondendo as drogas e te expulsam de casa pois virar que você está completamente viciada e não tem ninguém que possa te ajudar")
    alert("você começa a morar na rua, passa fome, sede, se sente suja e se pergunta o porque você fez isso consigo mesma e acabou com seu futuro")
    alert("meses depois você está com depressão e decide usar muitos entorpecentes ao mesmo tempo e acaba tendo uma overdose e você acaba falecendo")
    alert(`seus pais ficam extremamente tristes com a sua morte pois pensam que deveriam ter ajudado mais você`)
}