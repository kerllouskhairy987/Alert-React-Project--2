
import { IoClose } from "react-icons/io5";
import "./_index.scss";
import { AlertInterface } from "../../../interfaces/AlertInterface";

function Alert({ type, icon, title, desc, children}: AlertInterface) {
    return (
        <div className={type}>
            <div className="alert-header">
                <div className="title">
                    {icon}
                    <h4>{title}</h4>
                </div>

                <IoClose className="close" size={20} />
            </div>
            {children? children : <p>{desc}</p>}
        </div>
    )
}

export default Alert;