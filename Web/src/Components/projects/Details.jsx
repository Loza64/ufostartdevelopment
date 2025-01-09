import { IoCloseSharp } from "react-icons/io5";
import { ContextConsumer } from "../../Context/ContextConsumer"
import { DetailsProject } from "../Style/style";
import { useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

export default function Details() {

    const { open, setOpen, Details, setDetails } = ContextConsumer()
    const [item, setItem] = useState(0);

    const next = () => {
        if (item < Details.length - 1) {
            setItem((prev) => prev + 1)
        }
    }

    const prev = () => {
        if (item > 0) {
            setItem((prev) => prev - 1)
        }
    }

    const viewImage = () => {
        window.open(Details[item].image.url, '_blank');
    }

    const close = () => {
        setOpen(false);
        setTimeout(() => {
            setItem(0);
            setDetails([])
        }, 1000)
    }

    return Details.length > 0 ? (
        <DetailsProject open={open}>
            <IoCloseSharp className='btn-close-details' onClick={() => { close() }} />
            <div className='details'>
                <label>{Details[item].name}</label>
                <div className="item">
                    <button className="btn-item" style={{ opacity: item > 0 ? 1 : 0 }} onClick={prev} ><CiCircleChevLeft /></button>
                    <img src={Details[item].image.url} alt={Details[item].name} onClick={viewImage} />
                    <button className="btn-item" style={{ opacity: item < Details.length - 1 ? 1 : 0 }} onClick={next} ><CiCircleChevRight /></button>
                </div>
            </div>
        </DetailsProject>
    ) : null

}