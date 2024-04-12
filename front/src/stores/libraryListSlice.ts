import { defineStore } from "pinia";
import { type Game } from "@/hooks/queries/useSearchGameById";

type State = {
    libraryList: Game[];
}

const initialState = (): State => ({
    libraryList: []
});

export const useLibraryListStore = defineStore({
    id: "libraryListGame",
    state: initialState,
    actions: {
        addGame(game: Game) {
            if (this.libraryList.find((g) => g.id === game.id)) return;
            this.libraryList.push(game);
        },
        removeGame(gameId: number) {
            this.libraryList = this.libraryList.filter(
                (game) => game.id !== gameId
            );
        },
    },
});