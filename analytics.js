!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags reloadFeatureFlags getFeatureFlag getFeatureFlagPayload group onSessionId get_session_id".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

posthog.init('phc_kLYFuRxu9dWYB6KuZoBidnYMMafJzwBZ3FB2zWDHDjJX', {
  api_host: 'https://us.i.posthog.com',
  capture_pageview: false,
  autocapture: false,
  capture_pageleave: true,
  defaults: '2025-05-24'
});

(function () {
  const utmParams = {};
  const searchParams = new URLSearchParams(window.location.search);
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(key => {
    const value = searchParams.get(key);
    if (value) utmParams[key] = value;
  });

  function baseProperties() {
    return {
      page_path: window.location.pathname,
      page_url: window.location.href,
      referrer: document.referrer || null,
      ...utmParams
    };
  }

  posthog.capture('$pageview', baseProperties());

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href*="apps.apple.com"]').forEach(link => {
      link.addEventListener('click', () => {
        posthog.capture('app_store_click', {
          ...baseProperties(),
          destination_url: link.href,
          link_text: link.textContent.trim()
        });
      });
    });
  });
})();
