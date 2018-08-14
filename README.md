# docuLoad
DocuLoad is a simple jQuery plugin to help bring web loading to websites, website loading screens and animations have become more popular in recent years as we push the web, UI and UX forward. The idea behind this plugin is to allow developers to quickly add/ remove loading screens without having to worry about HTTP requests or moving across to AJAX. All you need to do is write some CSS and add docuLoad to the bottom of your page.

## Setup 

Add 'loading' class to your document body, this class will be removed on page load, and added when the defined element is click/ touched

## Usage 

Set all anchor elements to trigger the loading screen, give the loading animation 240ms to appear on screen and only remove the loading screen once the whole document has loaded $(window).load() (please note that $(window).load() can be extremely slow!! as it waits for all scripts and images to load before firing. YOu can set this to FALSE to use $(document).ready() which fires much earlier on, reducing the loading screen time but my result in a partially loaded page. Use best practices here to speed up your websites!! Just because you have a fancy loading screen doesn't mean you can make people wait half an hour to see your content!).


```HTML 
    <script src="path/to/docuLoad.js" defer></script>
```

```javascript
    $('a').docuLoad({
        bodyLoadClass: 'loading',
        timeOut: 240,
        windowLoad: true
    });
 ```

Set some CSS

 ```CSS
     body.loading {
        overflow: hidden; //prevent scrolling 
    }

    .loading-screen {
        position: fixed;
        width: 100%;
        height: 100vh;
        background: white;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -9998;
        visibility: hidden;
        transform: translateY(5%);
        transition: all ease 1.2s;
        opacity: 0;
    }

    .loading .loading-screen {
        transform: translateX(0%);
        z-index: 9998;
        visibility: visible;
        opacity: 1;
        transition: all ease 200ms;
    }
 ```

 And thats all there is to it.

 ## Best practices 

 1. Just because you can doesn't mean you should!
 2. Less is more 
 3. If a site is too heavy and takes forever to load, a loading screen will not help you! 
 4. Use only to progress users through your website, don't make them dizzy