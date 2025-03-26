import TasksListContext from "@/contexts/TasksListContext";
import { Button, Icon, Text } from "@rneui/themed";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

export default function EditTasksButton() {
  const { isInEditMode, toggleEditMode } = useContext(TasksListContext);
  const { t } = useTranslation();
  return (
    <Button onPress={() => toggleEditMode()} containerStyle={{ marginTop: 8 }}>
      {" "}
      <Icon name="edit" color="white" />
      <Text style={{ marginLeft: 8, fontWeight: "bold" }}>
        {!isInEditMode
          ? t`edit-mode.enable-button`
          : t`edit-mode.disable-button`}
      </Text>
    </Button>
  );
}
