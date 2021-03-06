﻿Ext.define('BrandAdmin.view.offers.OffersImageCropWindow', {
   extend: 'Ext.window.Window',
   xtype: 'offersimagecropwindow',
   itemId: 'offersimagecropwindow',
   autoCreate: true,
   animateTarget: 'openCropWindowButton',
   cls: 'popupwin',
   layout: 'fit',
   /*locales: {
      title: 'window.offer.upload.title'
   },*/
   autoShow: true,
   height: 600,
   padding: '10 0 0 10',
   modal: true,
   width:900,

   html: '<img src="demo_files/sago.jpg" id="imageToBeCropped" class="imageToBeCropped" alt="[Jcrop Example]" />' +
         '<div id="preview-pane">' +
            '<div class="preview-container">' +
               '<img id="previewImage" class="jcrop-preview" alt="Preview" />' +
            '</div>' +
         '</div>' +
         '<div class="cropSidebar">' +
            '<p>Image Preview</p>' +
            '<input type="button" value="Crop Image" id="imageCropButton">'+
         '</div>'
});