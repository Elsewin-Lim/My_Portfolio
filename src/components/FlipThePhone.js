
function FlipThePhone ({ Lang }) {
    console.log("FlipThePhone() is inialized")

    return (
        <div className="phoneFlip">
            <img src = {`${process.env.PUBLIC_URL}/images/Phone_Rotating_gif/Rotate_phone_${Lang}.gif`} alt = "Please Rotate your phone"/>
        </div>
    )
}

export default FlipThePhone