//Convención .d.ts -> Type definitions
export interface IAvenger {
  readonly name: string;
  powerScore: number;
  wonBattles: number;
  age: number;
  battle: (enemY: IAvenger, win: boolean) => void;
}
