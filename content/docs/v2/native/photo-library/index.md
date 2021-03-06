---
layout: "v2_fluid/docs_base"
version: "3.2.2"
versionHref: "/docs/v2/native"
path: ""
category: native
id: "photo-library"
title: "Photo Library"
header_sub_title: "Class in module "
doc: "Photo Library"
docType: "class"
---







<h1 class="api-title">
  
  Photo Library
  

  

  </h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic-native/edit/master/src/@ionic-native/plugins/photo-library/index.ts#L2">
  Improve this doc
</a>



<!-- decorators -->





<pre><code class="nohighlight">$ ionic plugin add cordova-plugin-photo-library --variable PHOTO_LIBRARY_USAGE_DESCRIPTION="To choose photos"
$ npm install --save @ionic-native/photo-library
</code></pre>
<p>Repo:
  <a href="https://github.com/terikon/cordova-plugin-photo-library">
    https://github.com/terikon/cordova-plugin-photo-library
  </a>
</p>

<!-- description -->

<p>The PhotoLibrary plugin allows access to photos from device by url. So you can use plain img tag to display photos and their thumbnails, and different 3rd party libraries as well.
Saving photos and videos to the library is also supported.
cdvphotolibrary urls should be trusted by Angular. See plugin homepage to learn how.</p>



<!-- if doc.decorators -->

<!-- @usage tag -->

<h2>Usage</h2>

<pre><code>import { PhotoLibrary } from &#39;@ionic-native/photo-library&#39;;

constructor(private photoLibrary: PhotoLibrary) { }

this.photoLibrary.requestAuthorization().then(() =&gt; {
  this.photoLibrary.getLibrary().subscribe({
    next: library =&gt; {
      library.forEach(function(libraryItem) {
        console.log(libraryItem.id);          // ID of the photo
        console.log(libraryItem.photoURL);    // Cross-platform access to photo
        console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
        console.log(libraryItem.fileName);
        console.log(libraryItem.width);
        console.log(libraryItem.height);
        console.log(libraryItem.creationDate);
        console.log(libraryItem.latitude);
        console.log(libraryItem.longitude);
        console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
      });
    },
    error: err =&gt; {},
    complete: () =&gt; { console.log(&quot;could not get photos&quot;); }
  });
})
.catch(err =&gt; console.log(&quot;permissions weren&#39;t granted&quot;));
</code></pre>




<!-- @property tags -->




<!-- methods on the class -->

<h2>Instance Members</h2>
<div id="getLibrary"></div>
<h3>
  <code>getLibrary(options)</code>
  

</h3>
Retrieves library items. Library item contains photo metadata like width and height, as well as photoURL and thumbnailURL.
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      options
      
    </td>
    <td>
      
<code>GetLibraryOptions</code>
    </td>
    <td>
      <p>Optional, like thumbnail size and chunks settings.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Observable&lt;LibraryItem[]&gt;</code> Returns library items. If appropriate option was set, will be returned by chunks.
</div><div id="requestAuthorization"></div>
<h3>
  <code>requestAuthorization(options)</code>
  

</h3>
Asks user permission to access photo library.
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      options
      
    </td>
    <td>
      
<code>RequestAuthorizationOptions</code>
    </td>
    <td>
      <p>Optional, like whether only read access needed or read/write.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Returns a promise that resolves when permissions are granted, and fails when not.
</div><div id="getAlbums"></div>
<h3>
  <code>getAlbums()</code>
  

</h3>
Returns list of photo albums on device.


<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;AlbumItem[]&gt;</code> Resolves to list of albums.
</div><div id="getThumbnailURL"></div>
<h3>
  <code>getThumbnailURL(photo,&nbsp;options)</code>
  

</h3>
Provides means to request URL of thumbnail, with specified size or quality.
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      photo
      
    </td>
    <td>
      
<code>string</code>|<code>LibraryItem</code>
    </td>
    <td>
      <p>Id of photo, or LibraryItem.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
    </td>
    <td>
      
<code>GetThumbnailOptions</code>
    </td>
    <td>
      <p>Options, like thumbnail size or quality.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;string&gt;</code> Resolves to URL of cdvphotolibrary schema.
</div><div id="getPhotoURL"></div>
<h3>
  <code>getPhotoURL(photo,&nbsp;options)</code>
  

</h3>
Provides means to request photo URL by id.
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      photo
      
    </td>
    <td>
      
<code>string</code>|<code>LibraryItem</code>
    </td>
    <td>
      <p>Id or LibraryItem.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
    </td>
    <td>
      
<code>GetPhotoOptions</code>
    </td>
    <td>
      <p>Optional options.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;string&gt;</code> Resolves to URL of cdvphotolibrary schema.
</div><div id="getThumbnail"></div>
<h3>
  <code>getThumbnail(photo,&nbsp;options)</code>
  

</h3>
Returns thumbnail as Blob.
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      photo
      
    </td>
    <td>
      
<code>string</code>|<code>LibraryItem</code>
    </td>
    <td>
      <p>Id or LibraryItem.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
    </td>
    <td>
      
<code>GetThumbnailOptions</code>
    </td>
    <td>
      <p>Options, like thumbnail size or quality.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;Blob&gt;</code> Resolves requested thumbnail as blob.
</div><div id="getPhoto"></div>
<h3>
  <code>getPhoto(photo,&nbsp;options)</code>
  

</h3>
Returns photo as Blob.
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      photo
      
    </td>
    <td>
      
<code>string</code>|<code>LibraryItem</code>
    </td>
    <td>
      <p>Id or LibraryItem.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
    </td>
    <td>
      
<code>GetPhotoOptions</code>
    </td>
    <td>
      <p>Optional options.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;Blob&gt;</code> Resolves requested photo as blob.
</div><div id="saveImage"></div>
<h3>
  <code>saveImage(url,&nbsp;album,&nbsp;options)</code>
  

</h3>
Saves image to specified album. Album will be created if not exists.
LibraryItem that represents saved image is returned.
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      url
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>URL of a file, or DataURL.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      album
      
    </td>
    <td>
      
<code>AlbumItem</code>|<code>string</code>
    </td>
    <td>
      <p>Name of an album or AlbumItem object.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      options
      
    </td>
    <td>
      
<code>GetThumbnailOptions</code>
    </td>
    <td>
      <p>Options, like thumbnail size for resulting LibraryItem.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;LibraryItem&gt;</code> Resolves to LibraryItem that represents saved image.
</div><div id="saveVideo"></div>
<h3>
  <code>saveVideo(url,&nbsp;album)</code>
  

</h3>
Saves video to specified album. Album will be created if not exists.
<table class="table param-table" style="margin:0;">
  <thead>
  <tr>
    <th>Param</th>
    <th>Type</th>
    <th>Details</th>
  </tr>
  </thead>
  <tbody>
  
  <tr>
    <td>
      url
      
    </td>
    <td>
      
<code>string</code>
    </td>
    <td>
      <p>URL of a file, or DataURL.</p>

      
    </td>
  </tr>
  
  <tr>
    <td>
      album
      
    </td>
    <td>
      
<code>AlbumItem</code>|<code>string</code>
    </td>
    <td>
      <p>Name of an album or AlbumItem object.</p>

      
    </td>
  </tr>
  
  </tbody>
</table>

<div class="return-value" markdown="1">
  <i class="icon ion-arrow-return-left"></i>
  <b>Returns:</b> 
<code>Promise&lt;void&gt;</code> Resolves when save operation completes.
</div>



<!-- other classes -->

<!-- end other classes -->

<!-- interfaces -->

<!-- end interfaces -->

<!-- related link --><!-- end content block -->


<!-- end body block -->

