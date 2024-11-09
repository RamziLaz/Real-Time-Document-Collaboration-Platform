import create from "zustand";

type User = { id: string; name: string };
type DocState = {
  users: User[];
  document: string;
  setUsers: (users: User[]) => void;
  setDocument: (doc: string) => void;
};

export const useDocStore = create<DocState>((set) => ({
  users: [],
  document: "",
  setUsers: (users) => set({ users }),
  setDocument: (doc) => set({ document: doc }),
}));
