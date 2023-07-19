import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";
const App = () => {
    return (
        <div className="bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <header className="container mx-auto px-4">
                <div className="flex justify-between">
                    <h1 className="- text-3xl font-semibold  uppercase tracking-[0.3em] text-white">
                        todo
                    </h1>
                    <button>
                        <MoonIcon className="fill-red-400" />
                    </button>
                </div>
                <form className="mt-8 flex items-center  gap-4 overflow-hidden rounded-md bg-white px-4 py-4">
                    <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                    <input
                        type="text"
                        placeholder="Create New  Todo..."
                        className="w-full text-gray-400 outline-none"
                    />
                </form>
            </header>
            <main className="container mx-auto mt-8 px-4">
                <div className="rounded-md bg-white [&>article]:p-4 ">
                    <article className="flex gap-4 border-b border-b-gray-400 ">
                        <button className="inline-block h-5 w-5 rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            complete online in javascript curse in bluuweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className="inline-block h-5 w-5 rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            complete online in javascript curse in bluuweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className="inline-block h-5 w-5 rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            complete online in javascript curse in bluuweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>

                    <section className="flex justify-between px-4 py-4">
                        <span className="text-gray-400">5 items lets</span>
                        <button className="text-gray-400">
                            clear completed
                        </button>
                    </section>
                </div>
            </main>
            <section className="container mx-auto mt-8 px-4">
                <div className="flex justify-center gap-4 rounded-md bg-white p-4">
                    <button className="text-blue-600">all</button>
                    <button className="hover:text-blue-600">active</button>
                    <button className="hover:text-blue-600">completed</button>
                </div>
            </section>
            <p className="text-center">drap and dop to reorder list</p>
        </div>
    );
};
export default App;
