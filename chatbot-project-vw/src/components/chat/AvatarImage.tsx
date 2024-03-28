import { Avatar } from "@mui/material"
import React from "react"

interface IAvatar {
    name: string,
    url: string
}

export const AvatarImage: React.FC<IAvatar> = ({name, url}) => {
    return (<>
    <Avatar alt={name} src={url} sx={{width: 35, height: 35}} className="animate-squeeze"/>
    </>)
}