import { useEffect, useState } from "react";
import './panel.scss'

interface PanelProps {
    height: string;
    width: string;
}

export function Panel(props: PanelProps) {
    const [height, setHeight] = useState(props.height);
    const [width, setWidth] = useState(props.width);

    useEffect(() => {
        setHeight(props.height);
        setWidth(props.width);
    })

    return (
        <div className="panel" style={{ height: height, width: width }}>
            
        </div>
    );  
}

