type HasId = {
  id: number;
};

export type ProtoJokeStructure = {
  joke: string;
  isFunny: boolean;
  alreadyKnewIt: boolean;
};

export type JokeStructure = HasId & ProtoJokeStructure;
