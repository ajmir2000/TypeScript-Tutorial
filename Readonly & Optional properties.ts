interface User {
  readonly id: number;
  name: string;
  email?: string; // Optional property
}
const user1: User = {
  id: 1,
  name: "Alice",
};
// user1.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
user1.name = "Bob"; // Allowed
user1.email = "bob@example.com"; // Allowed

// note: Readonly and  optinal properties can be used on Types and interfaces.

interface Game {
  readonly id: number;
  title: string;
  genre: string;
  rating?: number; // Optional property
  releaseDate: Date; // Readonly property
  multiplayer?: boolean; // Optional property
}
const games: Game[] = [
  {
    id: 1,
    title: "Game 1",
    genre: "Action",
    releaseDate: new Date("2022-01-01"),
  },
  {
    id: 2,
    title: "Game 2",
    genre: "Adventure",
    releaseDate: new Date("2022-02-01"),
    rating: 4.5,
    multiplayer: true,
  },
  {
    id: 3,
    title: "Game 3",
    genre: "RPG",
    releaseDate: new Date("2022-03-01"),
    multiplayer: false,
  },
  {
    id: 4,
    title: "Game 4",
    genre: "Strategy",
    releaseDate: new Date("2022-04-01"),
    rating: 4.0,
  },
];

function filterGamesByGenre(games: Game[], genre: string): Game[] {
  return games.filter((game) => game.genre === genre);
}

console.log(filterGamesByGenre(games, "RPG"));
// Output: [{ id: 3, title: "Game 3", genre: "RPG", releaseDate: 2022-03-01T00:00:00.000Z, multiplayer: false }]

function getMultiplayerGames(games: Game[]): Game[] {
  return games.filter((game) => game.multiplayer === true);
}

console.log(getMultiplayerGames(games));
// Output: [{ id: 2, title: "Game 2", genre: "Adventure", releaseDate: 2022-02-01T00:00:00.000Z, rating: 4.5, multiplayer: true }] 