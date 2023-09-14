

const EachWatch = ({ EachWatch }) => {
    const { price, image_url } = EachWatch;
    console.log(EachWatch);
    console.log(price);
    return (
        <div>
            <div className="">
                <img className="" src={image_url} />
            </div>
        </div>
    );
};
// EachWatch.propTypes ={
//     EachWatch: PropTypes.object
// }
export default EachWatch;