export const SearchBar = () => {
    return (
        <form className="flex items-center min-w-[280px] mx-auto">
            <label className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18.2476 10.1238C18.2476 11.9165 17.6657 13.5725 16.6853 14.9161L21.6299 19.8646C22.1181 20.3528 22.1181 21.1456 21.6299 21.6338C21.1417 22.1221 20.3489 22.1221 19.8607 21.6338L14.9161 16.6853C13.5725 17.6696 11.9165 18.2476 10.1238 18.2476C5.63619 18.2476 2 14.6114 2 10.1238C2 5.63619 5.63619 2 10.1238 2C14.6114 2 18.2476 5.63619 18.2476 10.1238ZM10.1238 15.748C13.2288 15.748 15.748 13.2288 15.748 10.1238C15.748 7.0188 13.2288 4.49963 10.1238 4.49963C7.0188 4.49963 4.49963 7.0188 4.49963 10.1238C4.49963 13.2288 7.0188 15.748 10.1238 15.748Z"
                            fill="#919EAB"
                        />
                    </svg>
                </div>
                <input
                    type="text"
                    id="voice-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    required
                />
                <button
                    type="button"
                    className="absolute inset-y-0 end-0 flex items-center pe-3"
                ></button>
            </div>
        </form>
    );
};
