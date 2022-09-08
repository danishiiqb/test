export interface TeamMemberItemInterface {
  _id?: string | undefined;
  id: number;
  username: string;
  role: string;
  picture: string;
}

export const createUniqueIds = (): string => {
  return "id" + Math.random().toString(16).slice(2);
};
