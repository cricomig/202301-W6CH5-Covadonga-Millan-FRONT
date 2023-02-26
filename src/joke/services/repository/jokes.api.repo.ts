import { JokeStructure, ProtoJokeStructure } from "../../models/jokes";

export interface JokeApiRepoStructure {
  loadJokes(): Promise<JokeStructure[]>;
  getJoke(id: JokeStructure["id"]): Promise<JokeStructure>;
  createJoke(joke: ProtoJokeStructure): Promise<JokeStructure>;
  updateJoke(joke: Partial<ProtoJokeStructure>): Promise<JokeStructure>;
  deleteJoke(id: JokeStructure["id"]): Promise<void>;
}

export class JokeApiRepo {
  url: string;
  constructor() {
    this.url = "http://localhost:4200/jokes";
  }

  async loadJokes(): Promise<JokeStructure[]> {
    const resp = await fetch(this.url);
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as JokeStructure[];
    return data;
  }

  async loadByIdJoke(id: JokeStructure["id"]): Promise<JokeStructure> {
    const url = this.url + "/" + id;
    const resp = await fetch(url);
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as JokeStructure;
    return data;
  }

  async createJoke(joke: ProtoJokeStructure): Promise<JokeStructure> {
    const resp = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(joke),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as JokeStructure;
    return data;
  }

  async updateJoke(joke: Partial<JokeStructure>): Promise<JokeStructure> {
    const url = this.url + "/" + joke.id;
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(joke),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as JokeStructure;
    return data;
  }

  async deleteJoke(id: JokeStructure["id"]): Promise<void> {
    const url = this.url + "/" + id;
    const resp = await fetch(url, {
      method: "DELETE",
    });
    if (!resp.ok) throw new Error("Delete not possible");
  }
}
