## Catatan untuk Hugo  

Dokumentasi lengkap Hugo ada disini:
- [Halaman Dokumentasi Hugo](https://gohugo.io/documentation)


## Frontmatter
yang dinamakan frontmatter adalah baris paling atas dari sebuah konten markdown, seperti ini:
```
---
title: "Postingan satu"
date: "27 Maret 2020 +07:00"
images:
    - "/img/gambar-satu.png"
    - "/img/gambar-dua.png"
---
```

## Membuat parameter baru untuk author dan gambar thumbnail postingan
- di file `content/posts/postingan.md`, parameter berada di antara tanda `---`  
misalnya:  
```
---
title: "Postingan Pertamaku"
date: 2020-04-18T09:36:15+07:00
author: "Sofyan"
images: 
    - "img/desk.jpg"
---
```

## Menambahkan komentar di template html
- gunakan `{{/* tuliskan komentarmu disini */}}`

## Fungsi if else dalam file html
kita coba pasang image ketika diatur di frontmatter postingan. 
Kalau tidak ada kita gunakan gambar default 'img/blog-post.png'
```
{{ if .Params.images }}
    {{ range first 1 .Params.images }}
    <img src="{{ . | absURL }}" />
    {{ end }}
{{ else }}
    <img src="{{ "/img/blog-post.png" | absURL }}" />
{{ end }}
```

## Mendapatkan url postingan dari tiap postingan
- gunakan `{{ .Permalink }}`

## Menampilkan konten postingan di html
- gunakan `{{ .Content }}` di _default/single.html

## Menampilkan summary postingan di html
- gunakan `{{ .Summary }}`



## Cara build di netlify
`hugo --gc --minify`  
keterangan:
- `--gc` untuk garbage clean, jadi nanti akan membersihkan resource yang digenerate oleh netlify sebelum
menjalankan perintah hugo
- `--minify` akan menjadikan html kita jadi single line seperti di javascript yang single line

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
