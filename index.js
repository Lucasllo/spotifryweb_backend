const express = require('express'); //import do express
const server = express(); //iniciando express
server.use(express.json()); //faz com que o express entenda JSON

var musicas = [
  {
    musica: "/audio/ukulele.mp3",
    musicaNome: "Aquarela",
    id: 1
  },
  {
    musica: "/audio/littleidea.mp3",
    musicaNome: "Tempos",
    id: 2
  },
  {
    musica: "/audio/jazzyfrenchy.mp3",
    musicaNome: "Hey",
    id: 3
  },
  {
    musica: "/audio/hey.mp3",
    musicaNome: "Happy Rock",
    id: 4
  },
  {
    musica: "/audio/happyrock.mp3",
    musicaNome: "Little",
    id: 5
  },
  {
    musica: "/audio/ukulele.mp3",
    musicaNome: "Pretty",
    id: 6
  },
  {
    musica: "/audio/littleidea.mp3",
    musicaNome: "Don't Lie",
    id: 7
  },
  {
    musica: "/audio/jazzyfrenchy.mp3",
    musicaNome: "WTF",
    id: 8
  },
  {
    musica: "/audio/hey.mp3",
    musicaNome: "Ghostbusters",
    id: 9
  },
  {
    musica: "/audio/happyrock.mp3",
    musicaNome: "Cute",
    id: 10
  },
  {
    musica: "/audio/ukulele.mp3",
    musicaNome: "Creative",
    id: 11
  },
  {
    musica: "/audio/littleidea.mp3",
    musicaNome: "Beginning",
    id: 12
  },
  {
    musica: "/audio/jazzyfrenchy.mp3",
    musicaNome: "Minds",
    id: 13
  },
  {
    musica: "/audio/hey.mp3",
    musicaNome: "Jazzfrenchy",
    id: 14
  },
  {
    musica: "/audio/happyrock.mp3",
    musicaNome: "A new idea",
    id: 15
  }
]

var playlists = [
  {
    "id": 1,
    "imagem": "/img/playlist1.png",
    "musicas": [
      {
        "musica": "/audio/ukulele.mp3",
        "musicaNome": "Aquarela"
      },
      {
        "musica": "/audio/littleidea.mp3",
        "musicaNome": "Tempos"
      },
      {
        "musica": "/audio/jazzyfrenchy.mp3",
        "musicaNome": "Hey"
      },
      {
        "musica": "/audio/hey.mp3",
        "musicaNome": "Happy Rock"
      },
      {
        "musica": "/audio/happyrock.mp3",
        "musicaNome": "Little"
      }
    ]
  },
  {
    "id": 2,
    "imagem": "/img/playlist2.png",
    "musicas": [
      {
        "musica": "/audio/ukulele.mp3",
        "musicaNome": "Aquarela"
      },
      {
        "musica": "/audio/littleidea.mp3",
        "musicaNome": "Tempos"
      },
      {
        "musica": "/audio/jazzyfrenchy.mp3",
        "musicaNome": "Hey"
      },
      {
        "musica": "/audio/hey.mp3",
        "musicaNome": "Happy Rock"
      },
      {
        "musica": "/audio/happyrock.mp3",
        "musicaNome": "Little"
      }
    ]
  },
  {
    "id": 3,
    "imagem": "/img/playlist3.png",
    "musicas": [
      {
        "musica": "/audio/ukulele.mp3",
        "musicaNome": "Aquarela"
      },
      {
        "musica": "/audio/littleidea.mp3",
        "musicaNome": "Tempos"
      },
      {
        "musica": "/audio/jazzyfrenchy.mp3",
        "musicaNome": "Hey"
      },
      {
        "musica": "/audio/hey.mp3",
        "musicaNome": "Happy Rock"
      },
      {
        "musica": "/audio/happyrock.mp3",
        "musicaNome": "Little"
      }
    ]
  },
  {
    "id": 4,
    "imagem": "/img/playlist4.png",
    "musicas": [
      {
        "musica": "/audio/ukulele.mp3",
        "musicaNome": "Aquarela"
      },
      {
        "musica": "/audio/littleidea.mp3",
        "musicaNome": "Tempos"
      },
      {
        "musica": "/audio/jazzyfrenchy.mp3",
        "musicaNome": "Hey"
      },
      {
        "musica": "/audio/hey.mp3",
        "musicaNome": "Happy Rock"
      },
      {
        "musica": "/audio/happyrock.mp3",
        "musicaNome": "Little"
      }
    ]
  },
  {
    "id": 5,
    "imagem": "/img/playlist5.png",
    "musicas": [
      {
        "musica": "/audio/ukulele.mp3",
        "musicaNome": "Aquarela"
      },
      {
        "musica": "/audio/littleidea.mp3",
        "musicaNome": "Tempos"
      },
      {
        "musica": "/audio/jazzyfrenchy.mp3",
        "musicaNome": "Hey"
      },
      {
        "musica": "/audio/hey.mp3",
        "musicaNome": "Happy Rock"
      },
      {
        "musica": "/audio/happyrock.mp3",
        "musicaNome": "Little"
      }
    ]
  },
  {
    "id": 6,
    "imagem": "/img/playlist6.png",
    "musicas": [
      {
        "musica": "/audio/ukulele.mp3",
        "musicaNome": "Aquarela"
      },
      {
        "musica": "/audio/littleidea.mp3",
        "musicaNome": "Tempos"
      },
      {
        "musica": "/audio/jazzyfrenchy.mp3",
        "musicaNome": "Hey"
      },
      {
        "musica": "/audio/hey.mp3",
        "musicaNome": "Happy Rock"
      },
      {
        "musica": "/audio/happyrock.mp3",
        "musicaNome": "Little"
      }
    ]
  },
  {
    "id": 7,
    "imagem": "/img/playlist7.png",
    "musicas": [
      {
        "musica": "/audio/ukulele.mp3",
        "musicaNome": "Aquarela"
      },
      {
        "musica": "/audio/littleidea.mp3",
        "musicaNome": "Tempos"
      },
      {
        "musica": "/audio/jazzyfrenchy.mp3",
        "musicaNome": "Hey"
      },
      {
        "musica": "/audio/hey.mp3",
        "musicaNome": "Happy Rock"
      },
      {
        "musica": "/audio/happyrock.mp3",
        "musicaNome": "Little"
      }
    ]
  },
  {
    "id": 8,
    "imagem": "/img/playlist8.png",
    "musicas": [
      {
        "musica": "/audio/ukulele.mp3",
        "musicaNome": "Aquarela"
      },
      {
        "musica": "/audio/littleidea.mp3",
        "musicaNome": "Tempos"
      },
      {
        "musica": "/audio/jazzyfrenchy.mp3",
        "musicaNome": "Hey"
      },
      {
        "musica": "/audio/hey.mp3",
        "musicaNome": "Happy Rock"
      },
      {
        "musica": "/audio/happyrock.mp3",
        "musicaNome": "Little"
      }
    ]
  }
]

var usuarios = [
  {
    "nome": "Lucas Lopes",
    "email": "lucaslopesoliveira@gmail.com",
    "senha": "1234",
    "dataNascimento": "2022-04-12",
    "cpf": "123",
    "cep": "60312-060",
    "logradouro": "123",
    "cidade": "Fortaleza",
    "estado": "Ceará",
    "playlists": [],
    "id": 1
  },
  {
    "nome": "asd",
    "email": "asd@asdad",
    "senha": "asd",
    "dataNascimento": "2022-04-14",
    "cpf": "123456789-5",
    "cep": "asd",
    "logradouro": "asd",
    "cidade": "asd",
    "estado": "asd",
    "playlists": [
      {
        "id": 2,
        "musicaNome": "Tempos",
        "musica": "/audio/littleidea.mp3"
      },
      {
        "id": 1,
        "musicaNome": "Aquarela",
        "musica": "/audio/ukulele.mp3"
      },
      {
        "id": 15,
        "musicaNome": "A new idea",
        "musica": "/audio/happyrock.mp3"
      }
    ],
    "id": 2
  }
]


server.get('/musicas', (req, res) => {

  return res.json(musicas);
})

server.get('/musicas/:nome', (req, res) => {
  const { nome } = req.params;
  const musicaSelecionada = musicas.find(p => p.musicaNome == nome);
  return res.json(musicaSelecionada);
})

server.post('/musicas', (req, res) => {
  const { musica } = req.body;
  musicas.push(musica);
  return res.json(musica);
})

server.put('/musicas/:id', (req, res) => {
  const { id } = req.params;
  const { nome } = req.body
  musicas[id].musicaNome = nome;
  return res.json(nome);
})

server.delete('/musicas/:id', (req, res) => {
  const { id } = req.params;
  musicas.slice(id, 1);
  return res.send("deletado");
})

server.get('/playlists', (req, res) => {
  return res.json(playlists);
})

server.get('/playlists/:id', (req, res) => {
  const { id } = req.params;
  const playlistSelecioanda = playlists.find(p => p.id == id);
  return res.json(playlistSelecioanda);
})

server.get('/usuario', (req, res) => {
  let email = req.query.email;
  let usuario = usuarios.find(p => p.email == email);

  return res.send(usuario)
})

server.post('/usuario', (req, res) => {
  const usuario = req.body;
  const usuarioExistente = usuarios.find(p => p.email == usuario.email)

  if (usuarioExistente) {
    for (let index = 0; index < usuarios.length; index++) {
      if (usuarios[index].email == usuarioExistente.email) {
        usuarios[index] = usuario;  //edição
        return res.json(usuarios);
       }
    }
  }
  usuarios.push(usuario);
  return res.json(usuarios)
})

<<<<<<< HEAD
server.post('/playlist', (req, res) => {
  const playlist = req.body;
  playlists.push(playlist);
  return res.json(playlists)
})



=======
server.post('/usuario', (req, res) =>{
    const usuario = req.body;
    usuarios.push(usuario);
    return res.json(usuarios)
})


>>>>>>> dbec984525a144b028af4762b7d1acf6cd942b17

server.listen(3001);