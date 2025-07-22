import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div>
            <h1> This page is not found</h1>
            <Link to={"/"}>
                <button> Take me home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;