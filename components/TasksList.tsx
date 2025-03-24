import { Button, CheckBox, Icon, ListItem } from "@rneui/themed";
import { useState } from "react";
import { ScrollView } from "react-native";

export interface TaskItemProps {
  _title?: string;
  _subtitle?: string;
  _completed?: boolean;
  _iconName?: string;
  _expired?: boolean;
  _weight?: number;
  _fromTime?: string;
  _toTime?: string;
}

export function TaskItem({
  _title = "Eat breakfast",
  _subtitle = "Reward: 10 points, from 9:00am to 9:30am",
  _expired = false,
  _weight = 10,
  _completed = false,
  _iconName = "food",
  _fromTime = "9:00",
  _toTime = "10:30",
}: TaskItemProps) {
  const [iconName, setIconName] = useState(_iconName);
  const [title, setTitle] = useState(_title);
  const [weight, setWeight] = useState(_weight);
  const [expired, setExpired] = useState(_expired);
  const [completed, setCompleted] = useState(_completed);
  const [fromTime, setFromTime] = useState(_fromTime);
  const [toTime, setToTime] = useState(_toTime);

  return (
    <ListItem style={{ marginBottom: 8 }}>
      <Icon name={iconName} type="material-community" color="grey" />
      <ListItem.Content>
        <ListItem.Title>{title}</ListItem.Title>

        <ListItem.Subtitle>
          Reward: {weight} points, from {fromTime} to {toTime}{" "}
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.CheckBox
        onPress={() => setCompleted((val) => !val)}
        checked={completed}
      />
    </ListItem>
  );
}

export default function TasksList() {
  return (
    <ScrollView>
      <TaskItem />

      <TaskItem expired={true} />
    </ScrollView>
  );
}
