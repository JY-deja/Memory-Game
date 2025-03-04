<title>
  <link href="css/styleTranslate.css"  rel="stylesheet" />
</title>
<x-app-layout>
    <div class="title">
        <h1 class="titleDataTable text-2xl font-semibold subpixel-antialiased tracking-wide m-6 text-center tracking-wider font-extrabold subpixel-antialiased text-4xl	">Translate</h1>
    </div>
    <section class="tableWords mx-5 px-5">
        <div class="container">
            <div class="card input-wrapper">
              <div class="from">
                <span class="heading">From :</span>
                <div class="dropdown-container" id="input-language">
                  <div class="dropdown-toggle">
                    <ion-icon name="globe-outline"></ion-icon>
                    <span class="selected" data-value="auto">Auto Detect</span>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                  </div>
                  <ul class="dropdown-menu">
                    <li class="option active">DropDown Menu Item 1</li>
                    <li class="option">DropDown Menu Item 2</li>
                  </ul>
                </div>
              </div>
              <div class="text-area">
                <textarea
                  id="input-text"
                  cols="30"
                  rows="10"
                  placeholder="Enter your text here"
                ></textarea>
                <div class="chars"><span id="input-chars">0</span> / 5000</div>
              </div>
              <div class="card-bottom">
                <p>Or choose your document!</p>
                <label for="upload-document">
                  <span id="upload-title">Choose File</span>
                  <ion-icon name="cloud-upload-outline"></ion-icon>
                  <input type="file" id="upload-document" hidden />
                </label>
              </div>
            </div>
      
            <div class="center">
              <div class="swap-position">
                <ion-icon name="swap-horizontal-outline"></ion-icon>
              </div>
            </div>
      
            <div class="card output-wrapper">
              <div class="to">
                <span class="heading">To :</span>
                <div class="dropdown-container" id="output-language">
                  <div class="dropdown-toggle">
                    <ion-icon name="globe-outline"></ion-icon>
                    <span class="selected" data-value="en">Englsih</span>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                  </div>
                  <ul class="dropdown-menu">
                    <li class="option active">DropDown Menu Item 1</li>
                    <li class="option">DropDown Menu Item 2</li>
                  </ul>
                </div>
              </div>
              <textarea
                id="output-text"
                cols="30"
                rows="10"
                placeholder="Translated text will appear here"
                disabled
              ></textarea>
              <div class="card-bottom">
                <p>Download as a document!</p>
                <button id="download-btn">
                  <span>Download</span>
                  <ion-icon name="cloud-download-outline"></ion-icon>
                </button>
              </div>
            </div>
          </div>
    </section>
    <script src="js/languages.js"></script>
    <script src="js/scriptTranslate.js"></script>
</x-app-layout>
    
    