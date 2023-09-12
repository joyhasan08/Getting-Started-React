

const EachWatchDiv = ({ singleWatch }) => {
    console.log(singleWatch);
    const { image_url, name, price, details } = singleWatch
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl space-y-4">
                <figure className="px-10 pt-10">
                    <img src={image_url
                    } className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center space-y-4">
                    <h2 className="card-title text-2xl ">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">{price}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachWatchDiv;