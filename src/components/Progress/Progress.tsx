
interface ProgressProps{
    level: number;
}

export default function Progress({ level }: ProgressProps){

    const style = {
        pBar: {
            height: "25px",
            width: "200px",
            backgroundColor: "white",
            borderRadius: "25px",
            display: "flex",
            alignItems: "center",
            padding: "2px 5px"
        },
        pValue: {
            backgroundColor: "red",
            height: "80%",
            width: `${level}%`,
            borderRadius: "25px",
            color: "white",
            transition: ".6s",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }
    }

    return (
        <div className="p-bar" style={style.pBar}>
            <div className="p-value" style={style.pValue}>{level}%</div>
        </div>
    )
}