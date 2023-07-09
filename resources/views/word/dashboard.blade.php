<x-app-layout class="body">
    {{-- <x-slot name="header">
        <h2 class="font-semibold  text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot> --}}

    <div class="my-3">
        <h2 class="font-semibold titleDataTable text-5xl text-center dark:text-gray-200 leading-tight" >
            {{ __('The Words') }}
        </h2>
    </div>

    {{-- <div class="p-12"> --}}
    <div class="flex justify-center">
        <div class="max-w-7xl mx-auto m-6 sm:px-6 lg:px-8 flx">
            <div class="dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                {{-- <div class="p-6 text-gray-900 dark:text-gray-100"> --}}
                <div class="text-gray-900 dark:text-gray-100 ">
                    <section class="swiper mySwiper w-100">
                        <div class="swiper-wrapper jsSwip">
                            <div class="card swiper-slide">
                            </div>  
                        </div> 
                    </section>
                </div>
            </div>
            <div class="grid place-items-center mt-5 ">
                <button data-modal-target="Create-modal" data-modal-toggle="Create-modal" type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 p-4" id="createButton">
                    Create New Word
                </button>
            </div>
        </div>
        
    </div> 
</x-app-layout>