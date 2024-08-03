function Search() {
    return (
        <form class="max-w-md md:max-w-2xl mx-auto">
            <label for="email-search" class="mb-2 text-sm font-medium text-white sr-only ">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" id="email-search" class="block w-full p-4 ps-10 text-sm placeholder:text-white text-white border border-theme-light rounded-lg bg-[#40A578] focus:ring-theme-light focus:border-theme-light " placeholder="Cari email ..." required />
                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 ">Cari</button>
            </div>
        </form>
    )
}

export default Search;