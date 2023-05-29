<x-app-layout>
    <div class="title">
        <h1 class="titleDataTable text-2xl font-semibold subpixel-antialiased tracking-wide m-6 text-center tracking-wider font-extrabold subpixel-antialiased text-4xl	">The Table Of The Words</h1>
    </div>
<section class="tableWords mx-5 px-5">
    
<div class=""">
    <table id="datatable" class="relative overflow-x-auto shadow-md sm:rounded-lg w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 text-color text-center text-base">
                    <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="px-6 py-3 text-color text-center text-base">
                    Word
                </th>
                <th scope="col" class="px-6 py-3 text-color text-center text-base">
                    Meaning
                </th>
                <th scope="col" class="px-6 py-3 text-color text-center text-base">
                    Edit
                </th>
                <th scope="col" class="px-6 py-3 text-color text-center text-lg">
                    Delete
                </th>
            </tr>
        </thead>
        <tbody class="dataTableBody">
        </tbody>
    </table>
</div>
</section>
</x-app-layout>