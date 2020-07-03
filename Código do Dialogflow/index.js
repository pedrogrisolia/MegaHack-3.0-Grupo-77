const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
const client = require('twilio')("AC121fbae82dd3e9cc5ae11894f5b59f3e", "841040d1f02bda7451a752b1ffa5c6fb");

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
  
  function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }    
  
  function welcome(agent) {
    client.messages
      .create({
      to: 'whatsapp:+5521986089533',
      from: 'whatsapp:+14155238886',
      body: "E ai, cara, tudo bem? 👊 Leco aqui, seu contador de histórias! 😁\nHora de testar os seus conhecimentos! 🧠 \nDigite *livros* para começar o desafio de hoje. 📖",
      mediaUrl: "https://i.imgur.com/K0UPUxB.jpg",
    })
      .then((message) => console.log(message.sid));
  }

  
  function livro3(agent) {
    client.messages
      .create({
      to: 'whatsapp:+5521986089533',
      from: 'whatsapp:+14155238886',
      body: "Deixa eu te contar, o *Pequeno Príncipe* é o livro que todo gamer que se preze, já leu! Aposto que você não esperava por essa 😉. Ele traz algumas questões bem parecidas com o que vemos nos jogo 🎮: Existencialismo, fragilidade das coisas e a luta pela sobrevivência.\n\nPara descobrir a primeira parte disso, você vai precisar de 5 minutos. ⏱️\n\nVou te dar os \"avatares\" de hoje. Digita para mim o que você quer:\n*1* - Áudio meu, to correndo. 🎧\n*2* - Agora já posso ler, \"bro\", manda o texto. 📕\n*3* - Tô cansadão, hoje vou de quadrinhos! 🖼️",
      mediaUrl: "https://i.imgur.com/tv4c5qX.jpg",
    })
      .then((message) => console.log(message.sid));
  }
  function mensagemPosAudio() {
    client.messages
      .create({
      to: 'whatsapp:+5521986089533',
      from: 'whatsapp:+14155238886',
      body: "E ai, bora subir o nível? Um bom jogador sempre treina 😉\n*1* - Bora!\n*2* - Deixa para amanhã",
    })
      .then((message) => console.log(message.sid));
  }
  function audio(agent) { 
    client.messages
      .create({
      to: 'whatsapp:+5521986089533',
      from: 'whatsapp:+14155238886',
      body: " 1 ",
      mediaUrl: "https://sndup.net/9dcn/O-Pequeno-Principe-audio.mp3",
    })
      .then((message) => console.log(message.sid));
    
    setTimeout(mensagemPosAudio,5000);
  }
  
  function principe1() {
    client.messages
      .create({
      to: 'whatsapp:+5521986089533',
      from: 'whatsapp:+14155238886',
      body: " 1 ",
      mediaUrl: "https://i.imgur.com/QLbbwvp.jpg",
    })
      .then((message) => console.log(message.sid));
  }
  
  function principe2() {
  	client.messages
      .create({
      to: 'whatsapp:+5521986089533',
      from: 'whatsapp:+14155238886',
      body: " 2 ",
      mediaUrl: "https://i.imgur.com/mzbYaIp.jpg",
    })
      .then((message) => console.log(message.sid));
  }
  
  function principe3() {
  	client.messages
      .create({
      to: 'whatsapp:+5521986089533',
      from: 'whatsapp:+14155238886',
      body: " 3 ",
      mediaUrl: "https://i.imgur.com/KuLFy41.jpg",
    })
      .then((message) => console.log(message.sid));
  }
  function mensagemPosQuadrinhos() {
  	client.messages
      .create({
      to: 'whatsapp:+5521986089533',
      from: 'whatsapp:+14155238886',
      body: "Te vejo amanhã com a próxima etapa. 😉\nPartiuuuu descanso! 🛌\nE você já sabe, se quiser falar comigo, pode entrar no app da Arvore. Estou sempre por ali caçando novidades. 🌳",
    })
      .then((message) => console.log(message.sid));
  }
  function quadrinhos(agent) {
    setTimeout(principe1,1000);
    setTimeout(principe2,2000);
    setTimeout(principe3,3000);
    setTimeout(mensagemPosQuadrinhos,6000);

  }
  
  function mensagemPosTexto() {
  	client.messages
      .create({
      to: 'whatsapp:+5521986089533',
      from: 'whatsapp:+14155238886',
      body: "Boa! Agora, para ser um hardcore no jogo de verdade, é preciso saber parar.😴\n Te vejo amanhã com a próxima etapa. 😉\n Se quiser falar comigo, pode entrar no app da Arvore. Estou sempre por ali caçando novidades. 🌳",
    })
      .then((message) => console.log(message.sid));
  }
  
  function mensagemDia2() {
  	client.messages
      .create({
      to: 'whatsapp:+5521986089533',
      from: 'whatsapp:+14155238886',
      body: "Bora dar um load da última sessão de leitura? 📖\n E hoje, como você prefere ver sobre a relação do Pequeno Príncipe com o autor do livro?\n *1* - Áudio meu, to correndo. 🎧\n *2* - Agora já posso ler, \"bro\", manda o texto. 📕\n*3* - Tô cansadão, hoje vou de quadrinhos! 🖼️",
    })
      .then((message) => console.log(message.sid));
  }
  
  function texto(agent) {
  	client.messages
      .create({
      to: 'whatsapp:+5521986089533',
      from: 'whatsapp:+14155238886',
      body: "Certa vez, quando tinha seis anos, vi num livro sobre a Floresta Virgem, \"Histórias Vividas\", uma imponente gravura. Representava ela uma jiboia que engolia uma fera. 🐍\n\nDizia o livro: \"As jiboias engolem, sem mastigar, a presa inteira. Em seguida, não podem mover-se e dormem os seis meses da digestão.\" 💤\n\nRefleti muito então sobre as aventuras da selva, e fiz, com lápis de cor, o meu primeiro desenho. ✏️\n\nMostrei minha obra prima às pessoas grandes e perguntei se o meu desenho lhes fazia medo. 😨 \n\nRespondera-me: \"Por que é que um chapéu faria medo?\" 🎩 \n\nMeu desenho não representava um chapéu. Representava uma jiboia digerindo um elefante. Desenhei então o interior da jiboia, a fim de que as pessoas grandes pudessem compreender. Elas têm sempre necessidade de explicações. 🐘\n\nAs pessoas grandes aconselharam-me deixar de lado os desenhos de jiboias abertas ou fechadas, e dedicar-me de preferência à geografia, à história, ao cálculo, à gramática. Foi assim que abandonei, aos seis anos, uma esplêndida carreira de pintor. Eu fora desencorajado pelo insucesso do meu desenho número 1 e do meu desenho número 2. As pessoas grandes não compreendem nada sozinhas, e é cansativo, para as crianças, estar toda hora explicando. 😩",
    })
      .then((message) => console.log(message.sid));
    setTimeout(mensagemPosTexto,1000);
    setTimeout(mensagemDia2,5000);
    

  }
  
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Livro3', livro3);
  intentMap.set('audio', audio);
  intentMap.set('quadrinhos', quadrinhos);
  intentMap.set('texto',texto);
  intentMap.set('lerMais - texto',texto);
  intentMap.set('lerMais - imagem',quadrinhos);
  
  
  
  
 
  
  agent.handleRequest(intentMap);
});
