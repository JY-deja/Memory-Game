<x-app-layout>
    <div class="title">
        <h1 class="titleDataTable text-2xl font-semibold subpixel-antialiased tracking-wide m-6 text-center tracking-wider font-extrabold subpixel-antialiased text-4xl	">The Table Of The Words</h1>
    </div>
<section class="tableWords mx-5 px-5">
    
<div class=" mx-6 ">
    <div class="mx-6">
        <table id="datatable" class="mx-6 relative overflow-x-auto shadow-md sm:rounded-lg w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
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
</div>
<div class="grid place-items-center mt-0 ">
    <button data-modal-target="Create-modal" data-modal-toggle="Create-modal" type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 p-4" id="createButton">
        Create New Word
    </button>
</div>
</section>
</x-app-layout>