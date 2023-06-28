<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Game Words</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])

        <!-- Link Added For Me -->

                {{-- Include swiperjs via CDN  --}}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"/>
                <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js" defer></script>
               
                {{-- <script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E=" crossorigin="anonymous" defer></script> --}}

                {{-- Include fileWordCss via CSS File  --}}
                <link rel="stylesheet" href="css/word.css">

                {{-- Include fileWord via Js File  --}}
                <script src="js/word.js" defer></script>

                {{-- Include Jquery via CDN  --}}
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" defer></script>

                {{-- Include DataTable via CDN  --}}
                <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.25/css/jquery.dataTables.css">
                <script type="text/javascript" charset="utf8"
                src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.js" defer></script>

                {{-- Include fileTableWordJs via Js File  --}}
                <script src="js/tableWord.js" defer></script>

                {{-- Include Flowbite via CDN  --}}
                <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"  rel="stylesheet" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js" defer></script>

                {{-- Include sweetalert via CDN  --}}
                <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" defer></script>

        <!-- End Of The Link added For Me -->
        
    </head>
    <body class="font-sans antialiased">
        <div class="min-h-screen bg-inherit dark:bg-gray-900 backColor">
            @include('layouts.navigation')

            <!-- Page Heading -->
            @if (isset($header))
                <header class="bg-inherit dark:bg-gray-800 shadow">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {{ $header }}
                    </div>
                </header>
            @endif

            <!-- Page Content -->
            <main class="body">
                {{ $slot }}
            </main>
        </div>
    </body>
</html>
