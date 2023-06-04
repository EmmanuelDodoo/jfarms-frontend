import { ReactNode } from "react"

type titleProps = {
    children?: ReactNode
}

export default function AlertTitle(props:titleProps){
    return (
        <h3 className=" text-lg font-semibold">
            {props.children}
        </h3>
    )
}