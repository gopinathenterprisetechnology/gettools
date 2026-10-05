/**
 * GET Tools - Related & Similar Tools Recommendation Engine (Screenshot 51)
 * Automatically displays same-category and complementary tools inside every tool page.
 * 100% client-side, responsive, light/dark mode compliant, zero backend dependencies.
 */
(function() {
  'use strict';

  var ALL_TOOLS = [
    // --- Image & Cyber Cafe Tools ---
    {
      id: 'image-compressor',
      url: 'image-compressor.html',
      name: 'Image Compressor Pro',
      category: 'Image Tools',
      group: 'image',
      icon: '🗜️',
      badge: 'Popular',
      desc: 'Compress JPG, PNG & WebP images to exact target KB size without losing visible quality.'
    },
    {
      id: 'imageincreaser',
      url: 'imageincreaser.html',
      name: 'Image Size Increaser',
      category: 'Image Tools',
      group: 'image',
      icon: '📈',
      badge: 'Portal Tool',
      desc: 'Increase photo and signature file size to required KB for online exam application portals.'
    },
    {
      id: 'resize',
      url: 'resize.html',
      name: 'Image Resizer Tool',
      category: 'Image Tools',
      group: 'image',
      icon: '📐',
      badge: 'Dimensions',
      desc: 'Resize image dimensions in pixels with custom width, height, and aspect ratio controls.'
    },
    {
      id: 'png-to-jpg',
      url: 'png-to-jpg.html',
      name: 'PNG to JPG Converter',
      category: 'Image Tools',
      group: 'image',
      icon: '🔄',
      badge: 'Converter',
      desc: 'Convert transparent PNG images to clean, high-resolution JPG format with single click.'
    },
    {
      id: 'passport-photo-maker',
      url: 'passport-photo-maker.html',
      name: 'Passport Size Photo Maker',
      category: 'Cyber Cafe Tools',
      group: 'image',
      icon: '📸',
      badge: 'Cyber Cafe',
      desc: 'Create standard 3.5x4.5 cm passport photos with candidate name, DOP stamp & 4x6 / A4 print sheets.'
    },
    {
      id: 'combine-photo-signature',
      url: 'combine-photo-signature.html',
      name: 'Combine Photo & Signature',
      category: 'Cyber Cafe Tools',
      group: 'image',
      icon: '🪪',
      badge: 'Joint Form',
      desc: 'Merge candidate photo and signature into a single file with custom labels and target KB compression.'
    },
    {
      id: 'signature-crop',
      url: 'signature-crop.html',
      name: 'Signature & Image Crop',
      category: 'Image Tools',
      group: 'image',
      icon: '✍️',
      badge: 'Cyber Cafe',
      desc: 'Clean, crop, brighten, and resize signature and photo files to portal compliance standards.'
    },
    {
      id: 'black-and-white',
      url: 'black-and-white.html',
      name: 'Black & White Image Converter',
      category: 'Image Tools',
      group: 'image',
      icon: '🎞️',
      badge: 'Filter',
      desc: 'Convert color photographs into black & white, grayscale, and high-contrast monochrome images.'
    },
    {
      id: 'watermark-image',
      url: 'watermark-image.html',
      name: 'Watermark Image Tool',
      category: 'Image Tools',
      group: 'image',
      icon: '🛡️',
      badge: 'Security',
      desc: 'Stamp text or logo watermarks across photographs and certificates directly in your web browser.'
    },

    // --- PDF Tools ---
    {
      id: 'pdf-compress',
      url: 'pdf-compress.html',
      name: 'PDF Compressor',
      category: 'PDF Tools',
      group: 'pdf',
      icon: '🗜️',
      badge: 'Target KB',
      desc: 'Compress multiple PDF documents to target KB size directly in your browser with zero uploads.'
    },
    {
      id: 'pdf-merge',
      url: 'pdf-merge.html',
      name: 'Merge PDF Online',
      category: 'PDF Tools',
      group: 'pdf',
      icon: '📑',
      badge: 'Combine',
      desc: 'Combine multiple PDF documents into one single file with drag-and-drop page ordering.'
    },
    {
      id: 'pdf-split',
      url: 'pdf-split.html',
      name: 'Split & Extract PDF Pages',
      category: 'PDF Tools',
      group: 'pdf',
      icon: '✂️',
      badge: 'Extract',
      desc: 'Extract individual pages or custom page ranges from any PDF document with 100% privacy.'
    },
    {
      id: 'jpg-to-pdf',
      url: 'jpg-to-pdf.html',
      name: 'JPG to PDF Converter',
      category: 'PDF Tools',
      group: 'pdf',
      icon: '🖼️',
      badge: 'Convert',
      desc: 'Convert single or multiple JPG and PNG images into a clean PDF document in your browser.'
    },
    {
      id: 'pdf-to-jpg',
      url: 'pdf-to-jpg.html',
      name: 'PDF to JPG Converter',
      category: 'PDF Tools',
      group: 'pdf',
      icon: '📄',
      badge: 'High Res',
      desc: 'Convert all pages of any PDF document into crisp JPG image files directly in browser.'
    },
    {
      id: 'pdf-lock',
      url: 'pdf-lock.html',
      name: 'Lock PDF (Password Protect)',
      category: 'PDF Tools',
      group: 'pdf',
      icon: '🔒',
      badge: 'Encrypt',
      desc: 'Encrypt and password protect any PDF document directly inside your web browser.'
    },
    {
      id: 'pdf-unlock',
      url: 'pdf-unlock.html',
      name: 'Unlock PDF',
      category: 'PDF Tools',
      group: 'pdf',
      icon: '🔓',
      badge: 'Decrypt',
      desc: 'Remove password protection from encrypted PDF files directly inside your browser.'
    },

    // --- Typing & Language Tools ---
    {
      id: 'indic-typing',
      url: 'indic-typing.html',
      name: 'Indic Language Typing Tool',
      category: 'Typing Tools',
      group: 'typing',
      icon: '⌨️',
      badge: '12+ Languages',
      desc: 'Phonetic typing converter for Hindi, Bengali, Tamil, Telugu, Marathi, and all Indian languages.'
    },
    {
      id: 'typing-test',
      url: 'typing-test.html',
      name: 'Typing Speed Test (WPM)',
      category: 'Typing Tools',
      group: 'typing',
      icon: '⏱️',
      badge: 'Exam Prep',
      desc: 'Calculate words per minute (WPM), typing accuracy, and speed for court and govt exams.'
    },
    {
      id: 'font-converter',
      url: 'font-converter.html',
      name: 'Krutidev to Unicode Converter',
      category: 'Converter Tools',
      group: 'typing',
      icon: '🔤',
      badge: 'Hindi Font',
      desc: 'Convert Krutidev 010 Hindi font text into Unicode Mangal and vice versa directly in browser.'
    },

    // --- Text & Developer Tools ---
    {
      id: 'word',
      url: 'word.html',
      name: 'Online Word Counter',
      category: 'Text & Developer Tools',
      group: 'text',
      icon: '📝',
      badge: 'Analytics',
      desc: 'Analyze text statistics with instant word counts, character counts, reading time, and paragraphs.'
    },
    {
      id: 'case-converter',
      url: 'case-converter.html',
      name: 'Text Case Converter',
      category: 'Text & Developer Tools',
      group: 'text',
      icon: '🔠',
      badge: 'Formatting',
      desc: 'Convert text into UPPERCASE, lowercase, Title Case, and Sentence case with live word counters.'
    },
    {
      id: 'minifier',
      url: 'Professional-HTML-CSS-JS-Minifier.html',
      name: 'HTML / CSS / JS Minifier',
      category: 'Text & Developer Tools',
      group: 'text',
      icon: '⚡',
      badge: 'Dev Tool',
      desc: 'Minify and compress HTML, CSS, and JavaScript source code to optimize page loading speeds.'
    },
    {
      id: 'tts',
      url: 'Text-to-Speech-Converter.html',
      name: 'Text to Speech Converter',
      category: 'Text & Developer Tools',
      group: 'text',
      icon: '🔊',
      badge: 'Speech Synth',
      desc: 'Convert written text into natural human speech voice with customizable pitch, speed, and accents.'
    },

    // --- Generators & Utilities ---
    {
      id: 'qr',
      url: 'qr.html',
      name: 'QR Code Generator',
      category: 'Generators',
      group: 'utility',
      icon: '📱',
      badge: 'Instant QR',
      desc: 'Create high-resolution QR codes for website URLs, contact details, WiFi access, and plain text.'
    },
    {
      id: 'palette-generator',
      url: 'Advance-Color-Palette-Generator.html',
      name: 'Color Palette Generator',
      category: 'Generators',
      group: 'utility',
      icon: '🎨',
      badge: 'Design',
      desc: 'Generate harmonious color schemes and copy hex codes instantly for web and graphic designs.'
    },
    {
      id: 'password-generator',
      url: 'Strong-Password-Generator.html',
      name: 'Strong Password Generator',
      category: 'Generators',
      group: 'utility',
      icon: '🛡️',
      badge: 'Security',
      desc: 'Create cryptographically strong random passwords with custom symbols, numbers, and length.'
    },
    {
      id: 'age',
      url: 'age.html',
      name: 'Advanced Age Calculator',
      category: 'Utilities',
      group: 'utility',
      icon: '🎂',
      badge: 'Live Timer',
      desc: 'Calculate exact chronological age in years, months, days, minutes, plus birthday countdown.'
    },
    {
      id: 'resume-maker',
      url: 'resume-maker.html',
      name: 'Resume / CV Maker',
      category: 'Utilities',
      group: 'utility',
      icon: '📋',
      badge: 'Job Ready',
      desc: 'Create, customize, and print clean job resumes and curriculum vitae directly inside your browser.'
    },
    {
      id: 'marriage-biodata',
      url: 'marriage-biodata.html',
      name: 'Marriage Biodata Maker',
      category: 'Utilities',
      group: 'utility',
      icon: '💍',
      badge: 'Biodata',
      desc: 'Create customizable matrimonial biodata documents for marriage proposals in your web browser.'
    }
  ];

  function getCurrentFilename() {
    var path = window.location.pathname || '';
    var filename = path.substring(path.lastIndexOf('/') + 1);
    if (!filename || filename === '') {
      return 'index.html';
    }
    return filename;
  }

  function getRelatedTools(currentFile) {
    var current = null;
    for (var i = 0; i < ALL_TOOLS.length; i++) {
      if (ALL_TOOLS[i].url.toLowerCase() === currentFile.toLowerCase()) {
        current = ALL_TOOLS[i];
        break;
      }
    }

    if (!current) {
      // Fallback: pick popular 6
      return {
        title: 'Popular Related Tools',
        category: 'All-in-One Tools',
        tools: ALL_TOOLS.slice(0, 6)
      };
    }

    // Filter tools in same group, excluding current
    var sameGroup = ALL_TOOLS.filter(function(t) {
      return t.group === current.group && t.url.toLowerCase() !== currentFile.toLowerCase();
    });

    // If fewer than 4, add cross-category tools
    if (sameGroup.length < 4) {
      var others = ALL_TOOLS.filter(function(t) {
        return t.group !== current.group && t.url.toLowerCase() !== currentFile.toLowerCase();
      });
      while (sameGroup.length < 6 && others.length > 0) {
        sameGroup.push(others.shift());
      }
    }

    var groupTitles = {
      'pdf': 'Related PDF Tools (Merge, Split, Convert & Protect)',
      'image': 'Related Image & Cyber Cafe Tools',
      'typing': 'Related Typing & Language Tools',
      'text': 'Related Text & Developer Utilities',
      'utility': 'Related Smart Utilities & Generators'
    };

    return {
      title: groupTitles[current.group] || ('Related ' + current.category),
      category: current.category,
      tools: sameGroup
    };
  }

  function renderRelatedTools() {
    // Do not run on index, about, contact, privacy, terms
    var currentFile = getCurrentFilename();
    if (/^(index|about|contact|privacy-policy|terms)\.html$/i.test(currentFile)) {
      return;
    }

    // Check if already injected
    if (document.getElementById('related-tools-section')) {
      return;
    }

    var data = getRelatedTools(currentFile);
    if (!data.tools || data.tools.length === 0) return;

    // Create container
    var section = document.createElement('section');
    section.id = 'related-tools-section';
    section.className = 'container';
    section.style.maxWidth = '1120px';
    section.style.margin = '45px auto 35px auto';
    section.style.padding = '0 20px';

    var headerHtml = '' +
      '<div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:14px; margin-bottom:24px; border-bottom:2px solid var(--border); padding-bottom:14px;">' +
        '<div>' +
          '<div style="font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:var(--primary); margin-bottom:4px;">' +
            '⚡ Same Type & Recommended' +
          '</div>' +
          '<h3 style="font-size:1.35rem; font-weight:700; color:var(--text); margin:0;">' +
            data.title +
          '</h3>' +
        '</div>' +
        '<a href="index.html#tools" style="display:inline-flex; align-items:center; gap:6px; font-weight:600; font-size:0.9rem; color:var(--primary); text-decoration:none; padding:6px 12px; background:var(--primary-light); border-radius:var(--radius-sm); transition:background 0.2s ease;">' +
          'View All 29+ Tools →' +
        '</a>' +
      '</div>';

    var cardsHtml = '<div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:18px;">';

    for (var i = 0; i < data.tools.length; i++) {
      var tool = data.tools[i];
      cardsHtml += '' +
        '<div class="related-tool-card" style="background:var(--surface); border:1px solid var(--border); border-radius:var(--radius-md); padding:20px; display:flex; flex-direction:column; justify-content:space-between; box-shadow:var(--shadow-sm); transition:transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;">' +
          '<div>' +
            '<div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">' +
              '<span style="font-size:1.6rem;" aria-hidden="true">' + tool.icon + '</span>' +
              '<span style="font-size:0.75rem; font-weight:600; background:var(--primary-light); color:var(--primary); padding:3px 9px; border-radius:12px;">' + tool.badge + '</span>' +
            '</div>' +
            '<h4 style="font-size:1.05rem; font-weight:600; color:var(--text); margin-bottom:8px; line-height:1.4;">' +
              tool.name +
            '</h4>' +
            '<p style="font-size:0.85rem; color:var(--text-muted); line-height:1.5; margin-bottom:16px;">' +
              tool.desc +
            '</p>' +
          '</div>' +
          '<a href="' + tool.url + '" class="btn btn-primary" style="width:100%; text-align:center; justify-content:center; text-decoration:none; font-size:0.875rem; font-weight:600; padding:10px 14px; border-radius:var(--radius-sm);">' +
            'Open Tool →' +
          '</a>' +
        '</div>';
    }
    cardsHtml += '</div>';

    // Add styles for hover effects
    var styleSheet = document.createElement('style');
    styleSheet.textContent = '' +
      '.related-tool-card:hover { transform: translateY(-3px); border-color: var(--primary) !important; box-shadow: var(--shadow-md) !important; }' +
      '@media (max-width: 600px) { #related-tools-section { margin-top: 30px !important; } }';
    document.head.appendChild(styleSheet);

    section.innerHTML = headerHtml + cardsHtml;

    // Place before footer
    var footer = document.querySelector('footer.site-footer');
    if (footer && footer.parentNode) {
      footer.parentNode.insertBefore(section, footer);
    } else {
      document.body.appendChild(section);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderRelatedTools);
  } else {
    renderRelatedTools();
  }
})();
