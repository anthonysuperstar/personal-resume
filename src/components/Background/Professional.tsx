import { useDispatch } from "react-redux"
import { FcPrevious } from "react-icons/fc"
import { switchDefault } from "../../redux/features/backgroundSlice"

export default function Professional(){
    const dispatch = useDispatch()

    const backToDefault = () => {
        dispatch(switchDefault())
    }
    return (
        <section id="professional">
            <div className="ss-prev" onClick={backToDefault}>
                <FcPrevious />
            </div>
            <h1>PROFESSIONAL</h1>
        </section>
    )
}