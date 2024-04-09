import { defineStore } from "pinia";
import { type Game } from "@/hooks/queries/useSearchGameById";

type State = {
  wishListGames: Game[];
};

const initialState = (): State => ({
  wishListGames: [],
});

export const useWishListGameStore = defineStore({
  id: "wishListGame",
  state: initialState,
  actions: {
    addGame(game: Game) {
      this.wishListGames.push(game);
    },
    removeGame(gameId: number) {
      this.wishListGames = this.wishListGames.filter(
        (game) => game.id !== gameId
      );
    },
  },
});
