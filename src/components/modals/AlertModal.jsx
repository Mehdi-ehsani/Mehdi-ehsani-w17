import checkImg from "../../assets/image/check.png"
import failedImg from "../../assets/image/failed.png"

const AlertModal = ({alertMode , text}) => {
  return (
    <div>
        <div>
           <img src={alertMode === "succes" ? checkImg : failedImg} alt="icon" />
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
  )
}

export default AlertModal