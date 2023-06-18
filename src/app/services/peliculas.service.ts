import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private peliculas: Pelicula[] = [
    {
      nombre: 'All About Lily Chou-Chou',
      sinopsis:
        'Traza los años problemáticos de la adolescencia de los estudiantes Yūichi Hasumi y Shūsuke Hoshino, explorando las cambiantes y complejas dinámicas de poder de su relación en el contexto del amor de Yūichi por la música soñadora y abstracta de la estrella pop ficticia Lily Chou-Chou.',
      img: 'assets/img/movie1.jpg',
      year: 2001,
      duracion: 146,
      director: 'Shunji Iwai',
      collapse: 1,
      trailer: 'Kwlh-z2R8QE',
      generos: ['Drama', 'Crimen'],
    },
    {
      nombre: 'Oldboy',
      sinopsis:
        'Sin idea de cómo llegó a ser encarcelado, drogado y torturado durante 15 años, un hombre de negocios desesperado busca vengarse de sus captores.',
      img: 'assets/img/movie2.jpg',
      year: 2003,
      duracion: 120,
      director: 'Park Chan-wook',
      collapse: 2,
      trailer: '2HkjrJ6IK5E',
      generos: ['Drama', 'Acción', 'Misterio', 'Suspenso'],
    },
    {
      nombre: 'Everything Everywhere All at Once',
      sinopsis:
        'Una inmigrante china se ve envuelta en una loca aventura, donde ella sola puede salvar lo que es importante para ella al conectarse con las vidas que podría haber llevado en otros universos.',
      img: 'assets/img/movie3.jpg',
      year: 2022,
      duracion: 140,
      director: 'Daniel Scheinert, Daniel Kwan',
      collapse: 3,
      trailer: 'wxN1T1uxQ2g',
      generos: ['Aventura', 'Acción', 'Drama', 'Ciencia ficción'],
    },
    {
      nombre: 'Shrek',
      sinopsis:
        'No es fácil ser verde, especialmente si eres un ogro simpático (aunque maloliente) llamado Shrek. En una misión para recuperar a una hermosa princesa de las garras de un dragón que escupe fuego, Shrek se une a un compatriota poco probable: un burro bromista.',
      img: 'assets/img/movie4.jpg',
      year: 2001,
      duracion: 90,
      director: 'Andrew Adamson, Vicky Jenson',
      collapse: 4,
      trailer: 'CwXOrWvPBPk',
      generos: ['Animación', 'Comedia', 'Fantasía', 'Aventura'],
    },
    {
      nombre: "At Eternity's Gate",
      sinopsis:
        'El famoso pero atormentado artista Vincent van Gogh pasa sus últimos años en Arles, Francia, pintando obras maestras del mundo natural que lo rodea.',
      img: 'assets/img/movie5.jpg',
      year: 2018,
      duracion: 111,
      director: 'Julian Schnabel',
      collapse: 5,
      trailer: '14fW4mhFkfg',
      generos: ['Drama'],
    },
    {
      nombre: 'Before Sunrise',
      sinopsis:
        'De camino a Viena, el estadounidense Jesse conoce a Céline, una estudiante que regresa a París. Después de que largas conversaciones forjaran una conexión sorprendente entre ellos, Jesse convence a Celine para que se baje del tren con él en Viena. Como su vuelo a los EE. UU. sale a la mañana siguiente y no tiene dinero para el alojamiento, vagan juntos por la ciudad, disfrutando de las experiencias de Viena y de cada uno.',
      img: 'assets/img/movie6.jpg',
      year: 1995,
      duracion: 101,
      director: 'Richard Linklater',
      collapse: 6,
      trailer: '6MUcuqbGTxc',
      generos: ['Romance', 'Drama'],
    },
    {
      nombre: 'Irreversible',
      sinopsis:
        'Los eventos en el transcurso de una noche traumática en París se desarrollan en orden cronológico inverso cuando la bella Alex es brutalmente violada y golpeada por un extraño en el paso subterráneo, y posteriormente busca vengarse de su agresor. Un examen a la vez hermoso y terrible de la naturaleza destructiva de la causa y el efecto, y cómo el tiempo lo destruye todo.',
      img: 'assets/img/movie7.jpg',
      year: 2002,
      duracion: 98,
      director: 'Gaspar Noé',
      collapse: 7,
      trailer: 'ZoDtJjqkfxU',
      generos: ['Misterio', 'Crimen', 'Drama', 'Suspenso'],
    },
    {
      nombre: 'Reservoir Dogs',
      sinopsis:
        'Un robo fallido indica un informante de la policía, y la presión aumenta después en un almacén. El crimen engendra violencia a medida que los sobrevivientes (el veterano Sr. White, el recién llegado Sr. Orange, el psicópata en libertad condicional Sr. Blonde, la comadreja en disputa Sr. Pink y el buen chico Eddie) se deshacen.',
      img: 'assets/img/movie8.jpg',
      year: 1992,
      duracion: 99,
      director: 'Quentin Tarantino',
      collapse: 8,
      trailer: '7GUQGvoDlHw',
      generos: ['Crimen', 'Suspenso'],
    },
    {
      nombre: 'Fantastic Mr. Fox',
      sinopsis:
        'El Fantástico Sr. Zorro, aburrido de su vida actual, planea un atraco contra los tres granjeros locales. Los granjeros, cansados ​​de compartir sus pollos con el zorro astuto, buscan venganza contra él y su familia.',
      img: 'assets/img/movie9.jpg',
      year: 2009,
      duracion: 87,
      director: 'Wes Anderson',
      collapse: 9,
      trailer: 'n2igjYFojUo',
      generos: ['Comedia', 'Animación', 'Aventura'],
    },
    {
      nombre: 'La montaña sagrada',
      sinopsis:
        'El Alquimista (Jodorowsky) reúne a un grupo de personas de todos los ámbitos de la vida para representar los planetas del sistema solar. La intención del adepto oculto es someter a sus reclutas a extraños ritos místicos y despojarlos de su equipaje mundano antes de embarcarse en un viaje a la Isla del Loto. Allí ascienden a la Montaña Sagrada para desplazar a los dioses inmortales que gobiernan en secreto el universo.',
      img: 'assets/img/movie10.jpg',
      year: 1973,
      duracion: 114,
      director: 'Alejandro Jodorowsky',
      collapse: 10,
      trailer: 'avTOLTUqf1w',
      generos: ['Drama'],
    },
    {
      nombre: 'Monsters, Inc.',
      sinopsis:
        'James Sullivan y Mike Wazowski son monstruos, se ganan la vida asustando a los niños y son los mejores en el negocio... aunque les tienen más miedo a los niños que a ellos. Cuando un niño entra accidentalmente en su mundo, James y Mike de repente descubren que los niños no deben temerles y descubren una conspiración que podría amenazar a todos los niños del mundo.',
      img: 'assets/img/movie11.jpg',
      year: 2001,
      duracion: 92,
      director: 'Pete Docter',
      collapse: 11,
      trailer: 'uzkkh-1A_kY',
      generos: ['Animación', 'Comedia'],
    },
    {
      nombre: 'Vertigo',
      sinopsis:
        'Un detective retirado de San Francisco que sufre de acrofobia investiga las extrañas actividades de la esposa de un viejo amigo, mientras se obsesiona peligrosamente con ella.',
      img: 'assets/img/movie12.jpg',
      year: 1958,
      duracion: 128,
      director: 'Alfred Hitchcock',
      collapse: 12,
      trailer: '95o-QM-lz8g',
      generos: ['Misterio', 'Romance', 'Suspenso'],
    },
  ];

  getMovies(): Pelicula[] {
    return this.peliculas;
  }

  constructor() {}
}

export interface Pelicula {
  nombre: string;
  sinopsis: string;
  img: string;
  year: number;
  duracion: number;
  director: string;
  collapse: number;
  trailer: string;
  generos: string[];
}
