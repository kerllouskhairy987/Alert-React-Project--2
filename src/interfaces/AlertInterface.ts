import { ReactNode } from "react";
import { AlertType } from "../Types/Type";

export interface AlertInterface {
    type: AlertType;
    icon: ReactNode;
    title: string;
    desc?: string;
    children?: ReactNode;
}