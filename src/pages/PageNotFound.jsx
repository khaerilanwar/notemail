import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <section className="">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 h-screen flex items-center">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-gray-200">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-gray-200">Something's missing.</p>
                    <Link className="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " to="/">
                        Back to Homepage
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default PageNotFound;