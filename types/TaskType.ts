import { IconType } from "@rneui/base";

export type TaskType = {
  index: number;
  id: number;
  title: string;
  description: string;
  completed: boolean;
  weight: number;
  iconName: string;
  iconType: IconType;
  expired?: boolean | false | true | null;

  fromTime: string;
  toTime: string;
};
