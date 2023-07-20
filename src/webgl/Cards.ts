import * as THREE from "three";
import { Card, ICardConfig } from "./Card";
import { Universe } from "./Universe";

interface ICard {
  config: ICardConfig;
  position: THREE.Vector3;
}

const cards: ICard[] = [
  {
    config: {
      width: 3,
      height: 1,
      text: "p\nr\no\nj\ne\nc\nt\ns",
      // text: "projects",
    },
    position: new THREE.Vector3(0, 0, 0),
  },
];
export class Cards {
  context: Universe;
  cards: Card[];
  group: THREE.Group;
  constructor(context: Universe) {
    this.context = context;
    this.cards = cards.map((card) => new Card(card.config));
    this.group = new THREE.Group();
    this.cards.forEach((card) => this.group.add(card.group));
  }
}
