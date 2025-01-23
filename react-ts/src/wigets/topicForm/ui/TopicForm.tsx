import {TopicDto} from "@/shared/api/interfaces.ts";
import {Input} from "antd";

interface TopicFormProps {
    setNewTopic:  React.Dispatch<React.SetStateAction<TopicDto | null>>
}

export const TopicForm = ({setNewTopic}: TopicFormProps) => {


    return (<div>
        <Input  placeholder="Логин" onChange={
            (e) => {
                setNewTopic((prevState) =>
            {
                if (prevState !== null)
                    return {...prevState, name: String(e.currentTarget.value) || ""}
                else return {name: String(e.currentTarget.value) || "", description: ""}
            }
            }
            />
    </div>)
}