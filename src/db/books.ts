/** biome-ignore-all lint/nursery/useConsistentTypeDefinitions: only in dev */
export interface Book {
  id: string
  title: string
  categories: string[]
  authors: string[]
  publicationYear: number
  imageUrl: string
  description: string
  synopsis?: string
  pages?: number
  isbn?: string
  soldCount: number
}

// Cria um array de livros, tipado com a interface Book
export const bookData: Book[] = [
  {
    id: '1',
    title: 'O Hobbit',
    categories: ['Fantasia', 'Aventura'],
    authors: ['J.R.R. Tolkien'],
    publicationYear: 1937,
    imageUrl:
      'https://m.media-amazon.com/images/I/91M9xPIf10L._AC_UY327_FMwebp_QL65_.jpg',
    description:
      'A jornada de Bilbo Bolseiro em busca de um tesouro guardado por um dragão.',
    synopsis:
      'Bilbo é um hobbit que gosta de sua vida pacata. Mas tudo muda quando ele é arrastado para uma aventura inesperada por um mago e um grupo de anões.',
    pages: 310,
    isbn: '978-85-359-0277-4',
    soldCount: 1500.0,
  },
  {
    id: '2',
    title: '1984',
    categories: ['Ficção Científica', 'Distopia'],
    authors: ['George Orwell'],
    publicationYear: 1949,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOdc2ZLwPJjifHsSTze98v6-CHDyPLiMcybg&s',
    description:
      'Um romance distópico que se passa em um futuro totalitário, onde a liberdade e a individualidade são suprimidas.',
    synopsis:
      'Winston Smith vive em um mundo governado pelo Grande Irmão, onde a verdade é manipulada e a privacidade não existe. Ele começa a questionar o sistema.',
    pages: 328,
    isbn: '978-0-452-28423-4',
    soldCount: 1800.0,
  },
  {
    id: '3',
    title: 'Cem Anos de Solidão',
    categories: ['Realismo Mágico', 'Ficção'],
    authors: ['Gabriel García Márquez'],
    publicationYear: 1967,
    imageUrl:
      'https://m.media-amazon.com/images/I/817esPahlrL._AC_UY327_FMwebp_QL65_.jpg',
    description:
      'A história épica da família Buendía na cidade fictícia de Macondo.',
    synopsis:
      'A saga de sete gerações da família Buendía, marcada por um ciclo de amores impossíveis e eventos extraordinários.',
    pages: 417,
    isbn: '978-85-359-0277-4',
    soldCount: 1200.0,
  },
  {
    id: '4',
    title: 'A Menina que Roubava Livros',
    categories: ['Ficção Histórica'],
    authors: ['Markus Zusak'],
    publicationYear: 2005,
    imageUrl:
      'https://m.media-amazon.com/images/I/41pVlY-bbaL._SY445_SX342_ControlCacheEqualizer_.jpg',
    description:
      'A história de uma garota na Alemanha Nazista, narrada pela Morte.',
    pages: 480,
    isbn: '978-85-325-2318-0',
    soldCount: 1000.0,
  },
  {
    id: '5',
    title: 'Sapiens: Uma Breve História da Humanidade',
    categories: ['Não-Ficção', 'História'],
    authors: ['Yuval Noah Harari'],
    publicationYear: 2011,
    imageUrl:
      'https://m.media-amazon.com/images/I/71-ghLb8qML._AC_UY327_FMwebp_QL65_.jpg',
    description:
      'Uma visão abrangente da história da humanidade, desde a Idade da Pedra até os dias atuais.',
    pages: 498,
    isbn: '978-85-359-0277-4',
    soldCount: 2000.0,
  },
  {
    id: '6',
    title: 'Orgulho e Preconceito',
    categories: ['Romance', 'Clássico'],
    authors: ['Jane Austen'],
    publicationYear: 1813,
    imageUrl:
      'https://m.media-amazon.com/images/I/719esIW3D7L._AC_UY327_FMwebp_QL65_.jpg',
    description:
      'O romance de Elizabeth Bennet e Mr. Darcy, explorando temas como moralidade, educação e casamento.',
    pages: 432,
    isbn: '978-85-359-0277-4',
    soldCount: 950.0,
  },
  {
    id: '7',
    title: 'O Alquimista',
    categories: ['Ficção', 'Autoajuda'],
    authors: ['Paulo Coelho'],
    publicationYear: 1988,
    imageUrl:
      'https://m.media-amazon.com/images/I/81slUinjTlS._AC_UY327_FMwebp_QL65_.jpg',
    description:
      'A jornada espiritual de um pastor em busca de um tesouro no Egito.',
    synopsis:
      'Um pastor andaluz viaja pelo deserto em busca de um tesouro lendário, aprendendo sobre a "Lenda Pessoal" e o "Coração do Mundo".',
    pages: 208,
    isbn: '978-85-359-0277-4',
    soldCount: 3000.0,
  },
  {
    id: '8',
    title: 'O Senhor dos Anéis: A Sociedade do Anel',
    categories: ['Fantasia', 'Aventura'],
    authors: ['J.R.R. Tolkien'],
    publicationYear: 1954,
    imageUrl:
      'https://m.media-amazon.com/images/I/81hCVEC0ExL._AC_UY327_FMwebp_QL65_.jpg',
    description:
      'O início da jornada de Frodo Bolseiro para destruir o Um Anel.',
    synopsis:
      'Frodo, um hobbit, herda um anel mágico e perigoso. Ele deve embarcar em uma jornada para destruir o anel e salvar a Terra Média da escuridão.',
    pages: 423,
    isbn: '978-85-359-0277-4',
    soldCount: 1700.0,
  },
  {
    id: '9',
    title: 'Harry Potter e a Pedra Filosofal',
    categories: ['Fantasia', 'Infantil'],
    authors: ['J.K. Rowling'],
    publicationYear: 1997,
    imageUrl:
      'https://m.media-amazon.com/images/I/81pB+joKL4L._AC_UY327_FMwebp_QL65_.jpg',
    description:
      'A história do jovem bruxo Harry Potter e sua primeira aventura em Hogwarts.',
    pages: 223,
    isbn: '978-85-359-0277-4',
    soldCount: 5000.0,
  },
  {
    id: '10',
    title: 'Crime e Castigo',
    categories: ['Ficção', 'Romance'],
    authors: ['Fiódor Dostoiévski'],
    publicationYear: 1866,
    imageUrl:
      'https://m.media-amazon.com/images/I/916WkSH4cGL._AC_UY327_FMwebp_QL65_.jpg',
    description:
      'O drama psicológico de um estudante que comete um crime e lida com o peso de sua consciência.',
    synopsis:
      'Raskólnikov, um ex-estudante, comete um assassinato. Ele é atormentado pela culpa e pela paranoia, enquanto um inspetor de polícia o persegue.',
    pages: 671,
    isbn: '978-85-359-0277-4',
    soldCount: 700.0,
  },
  {
    id: '11',
    title: 'O Pequeno Príncipe',
    categories: ['Fábula', 'Infantil'],
    authors: ['Antoine de Saint-Exupéry'],
    publicationYear: 1943,
    imageUrl:
      'https://m.media-amazon.com/images/I/41eeVxzSMKL._SY445_SX342_ControlCacheEqualizer_.jpg',
    description:
      'Uma história atemporal sobre a importância da amizade e do amor.',
    pages: 96,
    isbn: '978-85-359-0277-4',
    soldCount: 4000.0,
  },
  {
    id: '12',
    title: 'A Revolução dos Bichos',
    categories: ['Alegoria', 'Distopia'],
    authors: ['George Orwell'],
    publicationYear: 1945,
    imageUrl:
      'https://m.media-amazon.com/images/I/81t8d7LHciL._AC_UY327_FMwebp_QL65_.jpg',
    description:
      'Uma fábula sobre a ascensão de um regime totalitário em uma fazenda.',
    synopsis:
      'Os animais de uma fazenda se rebelam contra os humanos. No entanto, o poder corrompe, e os porcos assumem o controle, tornando-se tão opressores quanto os humanos.',
    pages: 144,
    isbn: '978-85-359-0277-4',
    soldCount: 1300.0,
  },
  {
    id: '13',
    title: 'O Grande Gatsby',
    categories: ['Clássico', 'Ficção'],
    authors: ['F. Scott Fitzgerald'],
    publicationYear: 1925,
    imageUrl:
      'https://m.media-amazon.com/images/I/91BsZhxCRjL._AC_UY327_FMwebp_QL65_.jpg',
    description:
      'A história do misterioso milionário Jay Gatsby e sua obsessão por Daisy Buchanan.',
    pages: 180,
    isbn: '978-85-359-0277-4',
    soldCount: 800.0,
  },
  {
    id: '14',
    title: 'Dom Quixote de La Mancha',
    categories: ['Aventura', 'Clássico'],
    authors: ['Miguel de Cervantes'],
    publicationYear: 1605,
    imageUrl: 'https://exemplo.com/dom-quixote.jpg',
    description:
      'A saga de um fidalgo que enlouquece e se torna um cavaleiro andante.',
    pages: 863,
    isbn: '978-85-359-0277-4',
    soldCount: 600.0,
  },
  {
    id: '15',
    title: 'Frankenstein',
    categories: ['Gótico', 'Ficção Científica'],
    authors: ['Mary Shelley'],
    publicationYear: 1818,
    imageUrl: 'https://exemplo.com/frankenstein.jpg',
    description:
      'A história de um cientista que cria uma criatura inteligente a partir de partes de corpos mortos.',
    pages: 280,
    isbn: '978-85-359-0277-4',
    soldCount: 450.0,
  },
  {
    id: '16',
    title: 'Moby Dick',
    categories: ['Aventura', 'Ficção'],
    authors: ['Herman Melville'],
    publicationYear: 1851,
    imageUrl: 'https://exemplo.com/moby-dick.jpg',
    description:
      'A obsessiva caça do Capitão Ahab por uma baleia branca lendária.',
    pages: 624,
    isbn: '978-85-359-0277-4',
    soldCount: 350.0,
  },
  {
    id: '17',
    title: 'O Sol é para Todos',
    categories: ['Ficção', 'Drama'],
    authors: ['Harper Lee'],
    publicationYear: 1960,
    imageUrl: 'https://exemplo.com/o-sol-e-para-todos.jpg',
    description:
      'A história de uma criança que observa seu pai, um advogado, defender um homem negro inocente no sul dos Estados Unidos.',
    pages: 281,
    isbn: '978-85-359-0277-4',
    soldCount: 900.0,
  },
  {
    id: '18',
    title: 'O Retrato de Dorian Gray',
    categories: ['Gótico', 'Filosofia'],
    authors: ['Oscar Wilde'],
    publicationYear: 1890,
    imageUrl: 'https://exemplo.com/retrato-dorian-gray.jpg',
    description:
      'Um jovem belo vende sua alma para que seu retrato envelheça em seu lugar.',
    pages: 254,
    isbn: '978-85-359-0277-4',
    soldCount: 550.0,
  },
  {
    id: '19',
    title: 'O Estrangeiro',
    categories: ['Filosofia', 'Ficção'],
    authors: ['Albert Camus'],
    publicationYear: 1942,
    imageUrl: 'https://exemplo.com/o-estrangeiro.jpg',
    description:
      'Um homem é julgado por um crime que cometeu em um dia quente, e sua indiferença se torna o foco do julgamento.',
    pages: 123,
    isbn: '978-85-359-0277-4',
    soldCount: 750.0,
  },
  {
    id: '20',
    title: 'O Nome da Rosa',
    categories: ['Mistério', 'História'],
    authors: ['Umberto Eco'],
    publicationYear: 1980,
    imageUrl: 'https://exemplo.com/o-nome-da-rosa.jpg',
    description: 'Uma série de assassinatos em um mosteiro medieval na Itália.',
    pages: 502,
    isbn: '978-85-359-0277-4',
    soldCount: 850.0,
  },
  {
    id: '21',
    title: 'O Príncipe',
    categories: ['Política', 'Não-Ficção'],
    authors: ['Nicolau Maquiavel'],
    publicationYear: 1532,
    imageUrl: 'https://exemplo.com/o-principe.jpg',
    description: 'Um tratado sobre como os governantes devem manter o poder.',
    pages: 154,
    isbn: '978-85-359-0277-4',
    soldCount: 400.0,
  },
  {
    id: '22',
    title: 'Alice no País das Maravilhas',
    categories: ['Fantasia', 'Infantil'],
    authors: ['Lewis Carroll'],
    publicationYear: 1865,
    imageUrl: 'https://exemplo.com/alice-no-pais-das-maravilhas.jpg',
    description: 'As aventuras de uma menina em um mundo surreal e mágico.',
    pages: 200,
    isbn: '978-85-359-0277-4',
    soldCount: 650.0,
  },
  {
    id: '23',
    title: 'O Morro dos Ventos Uivantes',
    categories: ['Romance', 'Gótico'],
    authors: ['Emily Brontë'],
    publicationYear: 1847,
    imageUrl: 'https://exemplo.com/o-morro-dos-ventos-uivantes.jpg',
    description: 'Uma história de amor e vingança na charneca inglesa.',
    pages: 352,
    isbn: '978-85-359-0277-4',
    soldCount: 500.0,
  },
  {
    id: '24',
    title: 'O Código Da Vinci',
    categories: ['Mistério', 'Thriller'],
    authors: ['Dan Brown'],
    publicationYear: 2003,
    imageUrl: 'https://exemplo.com/o-codigo-da-vinci.jpg',
    description:
      'Um simbologista e uma criptógrafa investigam um assassinato em Paris, revelando segredos históricos.',
    pages: 454,
    isbn: '978-85-359-0277-4',
    soldCount: 250.0,
  },
  {
    id: '25',
    title: 'O Apanhador no Campo de Centeio',
    categories: ['Ficção', 'Romance'],
    authors: ['J.D. Salinger'],
    publicationYear: 1951,
    imageUrl: 'https://exemplo.com/o-apanhador.jpg',
    description:
      'Um romance sobre o adolescente Holden Caulfield e sua visão cínica do mundo.',
    pages: 277,
    isbn: '978-85-359-0277-4',
    soldCount: 1100.0,
  },
  {
    id: '26',
    title: 'As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa',
    categories: ['Fantasia', 'Infantil'],
    authors: ['C.S. Lewis'],
    publicationYear: 1950,
    imageUrl: 'https://exemplo.com/narnia.jpg',
    description:
      'Quatro irmãos descobrem um mundo mágico dentro de um guarda-roupa.',
    pages: 208,
    isbn: '978-85-359-0277-4',
    soldCount: 1600.0,
  },
  {
    id: '27',
    title: 'O Senhor das Moscas',
    categories: ['Alegoria', 'Ficção'],
    authors: ['William Golding'],
    publicationYear: 1954,
    imageUrl: 'https://exemplo.com/o-senhor-das-moscas.jpg',
    description:
      'Um grupo de meninos britânicos, presos em uma ilha deserta, tenta se autogovernar, com resultados desastrosos.',
    pages: 224,
    isbn: '978-85-359-0277-4',
    soldCount: 880.0,
  },
  {
    id: '28',
    title: 'O Conde de Monte Cristo',
    categories: ['Aventura', 'Romance'],
    authors: ['Alexandre Dumas'],
    publicationYear: 1844,
    imageUrl: 'https://exemplo.com/o-conde-de-monte-cristo.jpg',
    description:
      'Um jovem marinheiro é traído e preso injustamente, e anos depois retorna para se vingar.',
    pages: 1276,
    isbn: '978-85-359-0277-4',
    soldCount: 720.0,
  },
  {
    id: '29',
    title: 'Drácula',
    categories: ['Gótico', 'Terror'],
    authors: ['Bram Stoker'],
    publicationYear: 1897,
    imageUrl: 'https://exemplo.com/dracula.jpg',
    description:
      'A história do conde vampiro que se muda para a Inglaterra e a tentativa de combatê-lo.',
    pages: 418,
    isbn: '978-85-359-0277-4',
    soldCount: 680.0,
  },
  {
    id: '30',
    title: 'As Aventuras de Sherlock Holmes',
    categories: ['Mistério', 'Detetive'],
    authors: ['Arthur Conan Doyle'],
    publicationYear: 1892,
    imageUrl: 'https://exemplo.com/sherlock-holmes.jpg',
    description:
      'Uma coletânea de contos sobre o famoso detetive Sherlock Holmes e seu parceiro Dr. Watson.',
    pages: 307,
    isbn: '978-85-359-0277-4',
    soldCount: 920.0,
  },
]
