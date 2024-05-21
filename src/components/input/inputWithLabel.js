import { Stack } from "@mui/material"

export const InputWithLabel = ({label, placeholder}) => {
    return (
        <Stack direction={'column'} spacing={1}>
            <p style={{color:'black', fontWeight:'bold'}}>{label}</p>
            <input type="text" style={{
                padding : '8px',
                boder:'1px solid gray'
            }} placeholder={placeholder}/>
        </Stack>
    )
}