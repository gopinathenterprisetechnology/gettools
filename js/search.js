/**
 * GET Tools - Client-Side Tool Search & Category Manager
 * Indexes all tools from actual repository files.
 * Pure client-side, zero backend dependencies, 100% GitHub Pages compatible.
 */
(function() {
  'use strict';

  var TOOLS_DATA = [
    {
      id: 'image-compressor',
      name: 'Image Compressor Pro',
      category: 'Image Tools',
      url: 'image-compressor.html',
      badge: 'Popular',
      desc: 'Compress JPG, PNG, and WebP images to exact target KB size without losing visible quality.',
      keywords: ['compress', 'image', 'photo', 'reduce size', 'kb', 'mb', 'jpg', 'png', 'webp', 'optimizer']
    },
    {
      id: 'imageincreaser',
      name: 'Image Size Increaser',
      category: 'Image Tools',
      url: 'imageincreaser.html',
      badge: 'Utility',
      desc: 'Increase photo and signature image file size to required KB for online exam application portals.',
      keywords: ['increase', 'image size', 'kb', 'target kb', 'upsize', 'exam form', 'signature', 'photo']
    },
    {
      id: 'resize',
      name: 'Image Resizer Tool',
      category: 'Image Tools',
      url: 'resize.html',
      badge: 'Editing',
      desc: 'Resize image dimensions in pixels with custom width, height, and aspect ratio controls.',
      keywords: ['resize', 'dimensions', 'width', 'height', 'pixels', 'scale', 'crop', 'aspect ratio']
    },
    {
      id: 'png-to-jpg',
      name: 'PNG to JPG Converter',
      category: 'Image Tools',
      url: 'png-to-jpg.html',
      badge: 'Converter',
      desc: 'Convert transparent PNG images to clean, high-resolution JPG format with a single click.',
      keywords: ['png', 'jpg', 'convert', 'jpeg', 'converter', 'transparent', 'background']
    },
    {
      id: 'pdf-compress',
      name: 'PDF Compressor',
      category: 'PDF Tools',
      url: 'pdf-compress.html',
      badge: 'Fast',
      desc: 'Compress multiple PDF files directly in your web browser with 100% privacy and zero uploads.',
      keywords: ['pdf', 'compress pdf', 'reduce pdf', 'pdf size', 'document', 'batch']
    },
    {
      id: 'image-adjust',
      name: 'Image Adjust With Perspective Crop',
      category: 'Image Tools',
      url: 'image-adjust.html',
      badge: 'Popular',
      desc: 'Straighten skewed, tilted, or keystoned photos of documents, Aadhaar cards, PAN cards, notes, and receipts using 4-point perspective crop.',
      keywords: ['image adjust', 'perspective crop', 'straighten', 'deskew', 'document scanner', 'keystone', 'crop and straighten', 'cyber cafe adjust']
    },
    {
      id: 'passport-photo-maker',
      name: 'Passport Size Photo Maker',
      category: 'Cyber Cafe Tools',
      url: 'passport-photo-maker.html',
      badge: 'Cyber Cafe',
      desc: 'Create standard 3.5x4.5 cm passport photos with candidate name, DOP stamp, and 4x6 / A4 print sheets.',
      keywords: ['passport photo', 'photo maker', '4x6', 'a4', 'print sheet', 'dop', 'date of photo', 'name on photo', 'exam photo', 'cyber cafe']
    },
    {
      id: 'combine-photo-signature',
      name: 'Combine Photo & Signature',
      category: 'Cyber Cafe Tools',
      url: 'combine-photo-signature.html',
      badge: 'Cyber Cafe',
      desc: 'Merge candidate photograph and signature into a single file with custom labels and target KB compression.',
      keywords: ['combine photo and signature', 'joint photo signature', 'ssc', 'upsc', 'joint image', 'exam form', 'merge photo signature', 'cyber cafe']
    },
    {
      id: 'pdf-merge',
      name: 'Merge PDF Online',
      category: 'PDF Tools',
      url: 'pdf-merge.html',
      badge: 'PDF',
      desc: 'Combine multiple PDF documents into one single file with drag-and-drop page ordering.',
      keywords: ['merge pdf', 'combine pdf', 'join pdf', 'pdf merger', 'multiple pdf', 'document']
    },
    {
      id: 'pdf-split',
      name: 'Split & Extract PDF Pages',
      category: 'PDF Tools',
      url: 'pdf-split.html',
      badge: 'PDF',
      desc: 'Extract individual pages or custom page ranges from any PDF document with 100% browser privacy.',
      keywords: ['split pdf', 'extract pages', 'separate pdf', 'cut pdf', 'page range', 'pdf split']
    },
    {
      id: 'jpg-to-pdf',
      name: 'JPG to PDF Converter',
      category: 'PDF Tools',
      url: 'jpg-to-pdf.html',
      badge: 'PDF',
      desc: 'Convert single or multiple JPG and PNG images into a clean PDF document directly inside your browser.',
      keywords: ['jpg to pdf', 'image to pdf', 'convert jpg', 'photo to pdf', 'combine to pdf', 'pdf']
    },
    {
      id: 'pdf-to-jpg',
      name: 'PDF to JPG Converter',
      category: 'PDF Tools',
      url: 'pdf-to-jpg.html',
      badge: 'PDF',
      desc: 'Convert all pages of any PDF document into crisp JPG image files directly inside your browser.',
      keywords: ['pdf to jpg', 'pdf to image', 'extract pdf pages', 'pdf image', 'convert pdf']
    },
    {
      id: 'pdf-lock',
      name: 'Lock PDF (Password Protect)',
      category: 'PDF Tools',
      url: 'pdf-lock.html',
      badge: 'Security',
      desc: 'Encrypt and password protect any PDF document directly inside your web browser.',
      keywords: ['lock pdf', 'password protect pdf', 'encrypt pdf', 'pdf password', 'secure pdf']
    },
    {
      id: 'pdf-unlock',
      name: 'Unlock PDF',
      category: 'PDF Tools',
      url: 'pdf-unlock.html',
      badge: 'Security',
      desc: 'Remove password protection from encrypted PDF files directly inside your browser.',
      keywords: ['unlock pdf', 'remove pdf password', 'decrypt pdf', 'pdf unlocker']
    },
    {
      id: 'signature-crop',
      name: 'Signature & Image Crop',
      category: 'Image Tools',
      url: 'signature-crop.html',
      badge: 'Cyber Cafe',
      desc: 'Clean, crop, brighten, and resize signature and photo files to portal compliance standards.',
      keywords: ['signature crop', 'crop signature', 'clean signature', 'photo crop', 'white background', 'cyber cafe']
    },
    {
      id: 'indic-typing',
      name: 'Indic Language Typing Tool',
      category: 'Typing Tools',
      url: 'indic-typing.html',
      badge: 'Typing',
      desc: 'Phonetic typing converter for Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, and 12+ Indian languages.',
      keywords: ['typing', 'hindi typing', 'bengali typing', 'indic', 'tamil', 'marathi', 'transliteration', 'english to hindi', 'english to bengali']
    },
    {
      id: 'document-typing',
      name: 'Document Type & Print (MS Word)',
      category: 'Typing Tools',
      url: 'document-typing.html',
      badge: 'MS Word',
      desc: 'Online A4 Word Processor with direct print, table layout, photo insert, and export to Word (.doc / .docx).',
      keywords: ['word', 'ms word', 'document type', 'document typing', 'word processor', 'letter', 'affidavit', 'a4 print', 'cyber cafe']
    },
    {
      id: 'case-converter',
      name: 'Text Case Converter',
      category: 'Text & Developer Tools',
      url: 'case-converter.html',
      badge: 'Text',
      desc: 'Convert text into UPPERCASE, lowercase, Title Case, and Sentence case with live word and character counters.',
      keywords: ['case converter', 'uppercase', 'lowercase', 'title case', 'sentence case', 'text']
    },
    {
      id: 'black-and-white',
      name: 'Black & White Image Converter',
      category: 'Image Tools',
      url: 'black-and-white.html',
      badge: 'Image',
      desc: 'Convert color photographs into black and white, grayscale, and high-contrast monochrome images.',
      keywords: ['black and white', 'grayscale', 'monochrome', 'bw image', 'document scan']
    },
    {
      id: 'watermark-image',
      name: 'Watermark Image Tool',
      category: 'Image Tools',
      url: 'watermark-image.html',
      badge: 'Image',
      desc: 'Stamp text or logo watermarks across photographs and certificates directly in your web browser.',
      keywords: ['watermark', 'stamp photo', 'protect document', 'add watermark', 'confidential']
    },
    {
      id: 'font-converter',
      name: 'Krutidev to Unicode Converter',
      category: 'Converter Tools',
      url: 'font-converter.html',
      badge: 'Converter',
      desc: 'Convert Krutidev 010 Hindi font text into standard Unicode Mangal and vice versa directly in browser.',
      keywords: ['krutidev', 'unicode', 'mangal', 'devlys', 'hindi font converter', 'krutidev to unicode']
    },
    {
      id: 'resume-maker',
      name: 'Resume / CV Maker',
      category: 'Important Link',
      url: 'resume-maker.html',
      badge: 'Maker',
      desc: 'Create, customize, and print clean job resumes and curriculum vitae directly inside your browser.',
      keywords: ['resume maker', 'cv maker', 'biodata', 'job resume', 'curriculum vitae', 'print resume']
    },
    {
      id: 'marriage-biodata',
      name: 'Marriage Biodata Maker (शादी बायोडाटा)',
      category: 'Important Link',
      url: 'marriage-biodata.html',
      badge: 'Maker',
      desc: 'Create customizable matrimonial biodata documents for marriage proposals in your web browser.',
      keywords: ['sadi biodata', 'marriage biodata', 'shadi biodata', 'matrimonial', 'marriage form']
    },
    {
      id: 'typing-test',
      name: 'Typing Speed Test (WPM)',
      category: 'Important Link',
      url: 'typing-test.html',
      badge: 'Test',
      desc: 'Calculate words per minute (WPM), typing accuracy, and speed for court and government typing exam preparation.',
      keywords: ['typing test', 'wpm', 'speed test', 'typing speed', 'typing exam']
    },
    {
      id: 'shilpa-sathi',
      name: 'Shilpa Sathi Portal (শিল্পসাথী - WB Single Window)',
      category: 'Important Link',
      url: 'https://silpasathi.wb.gov.in/',
      badge: 'Official',
      desc: 'West Bengal Government Single Window Services Portal for Trade License, business registration, NOCs, and entrepreneurship.',
      keywords: ['shilpa sathi', 'silpa sathi', 'shilpasathi', 'silpasathi', 'trade license', 'wb trade license', 'single window', 'business portal']
    },
    {
      id: 'abc-id',
      name: 'ABC ID (Academic Bank of Credits)',
      category: 'Important Link',
      url: 'https://www.abc.gov.in/',
      badge: 'Govt ID',
      desc: 'Official Government portal for Academic Bank of Credits (ABC ID / APAAR ID) for college and university students.',
      keywords: ['abc id', 'academic bank of credits', 'abc card', 'apaar', 'student id', 'digilocker abc']
    },
    {
      id: 'qr',
      name: 'QR Code Generator',
      category: 'Generators',
      url: 'qr.html',
      badge: 'Popular',
      desc: 'Create high-resolution QR codes for website URLs, contact details, WiFi access, and plain text.',
      keywords: ['qr', 'qr code', 'generator', 'barcode', 'scan', 'link', 'wifi']
    },
    {
      id: 'word',
      name: 'Online Word Counter',
      category: 'Text & Developer Tools',
      url: 'word.html',
      badge: 'Editor',
      desc: 'Analyze text statistics with instant word counts, character counts, reading time, and paragraphs.',
      keywords: ['word counter', 'character count', 'text', 'words', 'reading time', 'writing']
    },
    {
      id: 'age',
      name: 'Advanced Age Calculator',
      category: 'Utilities',
      url: 'age.html',
      badge: 'Live',
      desc: 'Calculate exact chronological age in years, months, days, minutes, plus birthday countdown.',
      keywords: ['age', 'calculator', 'birthday', 'dob', 'date of birth', 'zodiac', 'time lived']
    },
    {
      id: 'palette-generator',
      name: 'Advance Color Palette Generator',
      category: 'Generators',
      url: 'Advance-Color-Palette-Generator.html',
      badge: 'Design',
      desc: 'Generate harmonious color schemes and copy hex codes instantly for web and graphic designs.',
      keywords: ['color', 'palette', 'hex', 'colors', 'generator', 'design', 'css', 'rgb']
    },
    {
      id: 'minifier',
      name: 'HTML / CSS / JS Minifier',
      category: 'Text & Developer Tools',
      url: 'Professional-HTML-CSS-JS-Minifier.html',
      badge: 'Developer',
      desc: 'Minify and compress HTML, CSS, and JavaScript source code to optimize page loading speeds.',
      keywords: ['minify', 'minifier', 'html', 'css', 'javascript', 'code', 'compress code', 'developer']
    },
    {
      id: 'password-generator',
      name: 'Strong Password Generator',
      category: 'Generators',
      url: 'Strong-Password-Generator.html',
      badge: 'Security',
      desc: 'Create cryptographically strong random passwords with custom symbols, numbers, and length.',
      keywords: ['password', 'generator', 'security', 'strong password', 'random', 'credentials']
    },
    {
      id: 'tts',
      name: 'Text to Speech Converter',
      category: 'Text & Developer Tools',
      url: 'Text-to-Speech-Converter.html',
      badge: 'Audio',
      desc: 'Convert written text into natural human speech voice with customizable pitch, speed, and accents.',
      keywords: ['tts', 'text to speech', 'voice', 'audio', 'speech synthesis', 'speaker', 'listen']
    }
  ];

  window.GET_TOOLS = TOOLS_DATA;

  function initSearch() {
    var searchInput = document.getElementById('tool-search-input');
    var searchBtn = document.getElementById('tool-search-btn');
    var clearBtn = document.getElementById('tool-search-clear');
    var quickDropdown = document.getElementById('search-quick-results');
    var toolsContainer = document.getElementById('tools-grid');
    var emptyMessage = document.getElementById('no-tools-found');
    var categoryTabs = document.querySelectorAll('.category-tab');

    var currentCategory = 'all';
    var currentQuery = '';

    function filterTools(shouldScroll) {
      if (!toolsContainer) return;
      var cards = toolsContainer.querySelectorAll('.tool-card');
      var visibleCount = 0;
      var q = currentQuery.trim().toLowerCase();

      // If user typed a search query, reset category filter to 'all' so no tool is hidden
      if (q && currentCategory !== 'all') {
        currentCategory = 'all';
        if (categoryTabs && categoryTabs.length > 0) {
          categoryTabs.forEach(function(tab) {
            tab.classList.toggle('active', tab.getAttribute('data-category') === 'all');
          });
        }
      }

      for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var category = card.getAttribute('data-category') || '';
        var name = (card.getAttribute('data-name') || '').toLowerCase();
        var desc = (card.getAttribute('data-desc') || '').toLowerCase();
        var keywords = (card.getAttribute('data-keywords') || '').toLowerCase();

        var matchesCategory = (currentCategory === 'all' || category.toLowerCase() === currentCategory.toLowerCase());
        var matchesQuery = !q || name.indexOf(q) !== -1 || desc.indexOf(q) !== -1 || keywords.indexOf(q) !== -1;

        if (matchesCategory && matchesQuery) {
          card.style.display = '';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      }

      if (emptyMessage) {
        if (visibleCount === 0) {
          emptyMessage.style.display = 'block';
          var querySpan = emptyMessage.querySelector('.search-query-display');
          if (querySpan) querySpan.textContent = q ? '"' + q + '"' : 'selected category';
        } else {
          emptyMessage.style.display = 'none';
        }
      }

      // Update clear button visibility
      if (clearBtn) {
        clearBtn.style.display = q ? 'flex' : 'none';
      }

      // Populate Quick Live Dropdown
      if (quickDropdown) {
        if (q.length >= 1) {
          var matched = TOOLS_DATA.filter(function(tool) {
            var n = tool.name.toLowerCase();
            var d = tool.desc.toLowerCase();
            var k = tool.keywords.join(' ').toLowerCase();
            return n.indexOf(q) !== -1 || d.indexOf(q) !== -1 || k.indexOf(q) !== -1;
          }).slice(0, 6);

          if (matched.length > 0) {
            var html = '';
            matched.forEach(function(item) {
              html += '<a href="' + item.url + '" class="search-dropdown-item">' +
                '<span class="search-dropdown-title">⚡ ' + item.name + '</span>' +
                '<span class="search-dropdown-cat">' + item.category + '</span>' +
                '</a>';
            });
            quickDropdown.innerHTML = html;
            quickDropdown.style.display = 'block';
          } else {
            quickDropdown.innerHTML = '<div style="padding:10px 16px; font-size:0.85rem; color:var(--text-muted);">No quick suggestions. Click search to view all results.</div>';
            quickDropdown.style.display = 'block';
          }
        } else {
          quickDropdown.style.display = 'none';
        }
      }

      // Scroll to tools grid if requested (e.g. on clicking search button or Enter)
      if (shouldScroll) {
        if (quickDropdown) quickDropdown.style.display = 'none';
        var toolsSec = document.getElementById('tools');
        if (toolsSec) {
          toolsSec.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }

    // Input typing listener
    if (searchInput) {
      searchInput.addEventListener('input', function(e) {
        currentQuery = e.target.value;
        filterTools(false);
      });

      searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          filterTools(true);
        }
      });
    }

    // Round Search Button click listener
    if (searchBtn) {
      searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        filterTools(true);
      });
    }

    // Clear Button listener
    if (clearBtn) {
      clearBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (searchInput) searchInput.value = '';
        currentQuery = '';
        if (quickDropdown) quickDropdown.style.display = 'none';
        clearBtn.style.display = 'none';
        filterTools(false);
        if (searchInput) searchInput.focus();
      });
    }

    // Close quick dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (quickDropdown && !e.target.closest('.search-wrapper')) {
        quickDropdown.style.display = 'none';
      }
    });

    // Category Tabs listeners
    if (categoryTabs && categoryTabs.length > 0) {
      for (var j = 0; j < categoryTabs.length; j++) {
        (function(tab) {
          tab.addEventListener('click', function(e) {
            e.preventDefault();
            for (var k = 0; k < categoryTabs.length; k++) {
              categoryTabs[k].classList.remove('active');
            }
            tab.classList.add('active');
            currentCategory = tab.getAttribute('data-category') || 'all';
            filterTools(false);
          });
        })(categoryTabs[j]);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSearch);
  } else {
    initSearch();
  }
})();
