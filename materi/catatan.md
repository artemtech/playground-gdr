# Catatan untuk Hugo  



## Cara build di netlify
`hugo --gc --minify`

## Google Analytics  
- bikin dulu di https://support.google.com/analytics/answer/1008080?hl=en  
- taruh di footer  
`{{ template "_internal/google_analytics_async.html" . }}`
- taruh di config.toml (tidak menjorok)  
`googleAnalytics = "UA-123-45"`

## Disqus  

- taruh di partials/disqus.html  
```
<div id="disqus_thread"></div>
<script type="text/javascript">

(function() {
    // Don't ever inject Disqus on localhost--it creates unwanted
    // discussions from 'localhost:1313' on your Disqus account...
    if (window.location.hostname == "localhost")
        return;

    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    var disqus_shortname = '{{ .Site.DisqusShortname }}';
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
<a href="https://disqus.com/" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>
```
- taruh di single.html  
`{{ partial "disqus.html" . }}`
- taruh di config.toml (tidak menjorok)  
`disqusShortname = "yourdiscussshortname"`

## Opengraph dan Twitter Cards  

- taruh di config.toml  
```
[params]
  title = "judul site"                      # judul yg tampil saat salin link
  description = "Text about my cool site"   # deskripsi link saat salin link
  images = ["site-feature-image.jpg"]       # untuk gambar preview meta saat salin link ke telegram/whatsapp
```
- taruh di head.html  
```
{{ template "_internal/opengraph.html" . }}
{{ template "_internal/twitter_cards.html" . }}
```
