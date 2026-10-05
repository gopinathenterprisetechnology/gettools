/**
 * GET Tools - Centralized Monetization & Ad Manager
 * Manages Adsterra banners (300x250), Adsterra native container, and Cuelinks integration.
 * Pure client-side, zero backend dependencies, 100% GitHub Pages compatible.
 */
(function(window, document) {
  'use strict';

  var AD_CONFIG = {
    smartlink: 'https://sordidcopper.com/kewpkm1ua?key=a77b601373b692ebee713b38d44ad2e1',
    socialBar: {
      scriptUrl: 'https://sordidcopper.com/88/94/ae/8894aeebfcda72fe593964c29971cc1c.js'
    },
    banner300x250: {
      key: '84d92560ee6aee4bc88b08b8a08cf64e',
      width: 300,
      height: 250,
      format: 'iframe',
      scriptUrl: 'https://sordidcopper.com/84d92560ee6aee4bc88b08b8a08cf64e/invoke.js'
    },
    banner728x90: {
      key: 'ac09edcf0c927283b26069fc4f8b0dd6',
      width: 728,
      height: 90,
      format: 'iframe',
      scriptUrl: 'https://sordidcopper.com/ac09edcf0c927283b26069fc4f8b0dd6/invoke.js'
    },
    native: {
      containerId: 'container-726b7da223dd01facb179be0a51c21a6',
      scriptUrl: 'https://pl29577099.effectivecpmnetwork.com/726b7da223dd01facb179be0a51c21a6/invoke.js'
    },
    cuelinks: {
      clientId: '292060',
      scriptUrl: 'https://cdn0.cuelinks.com/js/cuelinksv2.js'
    }
  };

  var loadedScripts = {};

  function loadExternalScript(url, isAsync, isCfAsync) {
    if (loadedScripts[url]) {
      return Promise.resolve(true);
    }
    var existing = document.querySelector('script[src="' + url + '"]');
    if (existing) {
      loadedScripts[url] = true;
      return Promise.resolve(true);
    }

    return new Promise(function(resolve) {
      try {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        if (isAsync) {
          s.async = true;
        }
        if (isCfAsync) {
          s.setAttribute('data-cfasync', 'false');
        }
        s.src = url;
        s.onload = function() {
          loadedScripts[url] = true;
          resolve(true);
        };
        s.onerror = function() {
          loadedScripts[url] = false;
          resolve(false);
        };
        (document.head || document.body || document.documentElement).appendChild(s);
      } catch (e) {
        resolve(false);
      }
    });
  }

  function renderAdInIframe(container, config) {
    if (!container || container.getAttribute('data-ad-rendered') === 'true') {
      return;
    }
    container.setAttribute('data-ad-rendered', 'true');
    container.style.width = config.width + 'px';
    container.style.height = config.height + 'px';
    container.style.maxWidth = '100%';
    container.style.margin = '0 auto';
    container.style.overflow = 'hidden';

    var iframe = document.createElement('iframe');
    iframe.width = config.width;
    iframe.height = config.height;
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.style.maxWidth = '100%';
    iframe.scrolling = 'no';

    container.appendChild(iframe);

    try {
      var doc = iframe.contentWindow || iframe.contentDocument;
      if (doc.document) doc = doc.document;

      doc.open();
      doc.write('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="margin:0;padding:0;overflow:hidden;text-align:center;">' +
        '<script type="text/javascript">' +
        'atOptions = {' +
        "'key': '" + config.key + "'," +
        "'format': 'iframe'," +
        "'height': " + config.height + "," +
        "'width': " + config.width + "," +
        "'params': {}" +
        '};' +
        '<\/script>' +
        '<script type="text/javascript" src="' + config.scriptUrl + '"><\/script>' +
        '</body></html>');
      doc.close();
    } catch (err) {
      console.warn('Ad iframe rendering issue:', err);
    }
  }

  function initBanners() {
    // 300x250 Banner Slots
    var slots300 = document.querySelectorAll('.adsterra-banner-slot, .adsterra-banner-300x250, [data-ad-type="banner-300x250"]');
    for (var i = 0; i < slots300.length; i++) {
      renderAdInIframe(slots300[i], AD_CONFIG.banner300x250);
    }

    // 728x90 Leaderboard Slots
    var slots728 = document.querySelectorAll('.adsterra-banner-728x90, [data-ad-type="banner-728x90"]');
    for (var j = 0; j < slots728.length; j++) {
      renderAdInIframe(slots728[j], AD_CONFIG.banner728x90);
    }
  }

  function initSocialBar() {
    if (AD_CONFIG.socialBar && AD_CONFIG.socialBar.scriptUrl) {
      loadExternalScript(AD_CONFIG.socialBar.scriptUrl, true, false);
    }
  }

  function initNative() {
    var nativeContainer = document.getElementById(AD_CONFIG.native.containerId);
    if (nativeContainer) {
      loadExternalScript(AD_CONFIG.native.scriptUrl, true, true);
    }
  }

  function initCuelinks() {
    if (!window.cId) {
      window.cId = AD_CONFIG.cuelinks.clientId;
    }
    loadExternalScript(AD_CONFIG.cuelinks.scriptUrl, true, false);
  }

  function checkAutoCuelinks() {
    var hasCommercialLinks = document.querySelector('a[href*="flipkart.com"], a[href*="dl.flipkart.com"]');
    var isHome = window.location.pathname.indexOf('index') !== -1 || window.location.pathname.endsWith('/') || window.location.pathname === '';
    if (hasCommercialLinks || isHome) {
      initCuelinks();
    }
  }

  var AdManager = {
    config: AD_CONFIG,
    init: function() {
      initSocialBar();
      initBanners();
      initNative();
      checkAutoCuelinks();
    },
    loadBanner: function(container, type) {
      if (type === '728x90') {
        renderAdInIframe(container, AD_CONFIG.banner728x90);
      } else {
        renderAdInIframe(container, AD_CONFIG.banner300x250);
      }
    },
    loadSocialBar: initSocialBar,
    loadNative: initNative,
    loadCuelinks: initCuelinks,
    getSmartLink: function() {
      return AD_CONFIG.smartlink;
    }
  };

  window.AdManager = AdManager;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      AdManager.init();
    });
  } else {
    AdManager.init();
  }

})(window, document);
