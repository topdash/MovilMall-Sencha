﻿/*Ext.define('BrandAdmin.view.events.EventsPhotoForm', {
   extend: 'Ext.form.Panel',
   xtype: 'eventsphotoform',
   //title: 'Event Photo',
   locales: {
      title: 'form.eventsphoto.title'
   },
   store:'EventsStore',
   border: true,
   layout: {
      type: 'vbox',
      align: 'center'
   },
   items: [{
         xtype: 'dataview',
         trackOver: true,
         margin: '30 0 10 0',
         itemId: 'eventsImageDataView',
         tpl: Ext.create('Ext.XTemplate',
            '<div class="moviePhoto">',
               '<tpl for=".">',
               '<div>',
                  '<img id="eventsInfoImageBox" style="height:150px;width:200px;" src={photo} alt="Imagen de su local o negocio">' +
               '</div>',
               '</tpl>'+
            '</div>'),

      itemSelector: 'div.main',
      store: {
         fields: ['photo'],
          data: [
          { photo: 'resources/images/NtAvailEvent.png', type: 'auto' }
         ]
      }
   },
      {
         xtype: 'button',
         //text: 'Upload',
         action: 'upload',
         id:'eventsUpload',
         cls: 'upload-button-flat',
         locales: {
            text: 'buttons.upload'
         }
      },
      {
         xtype: 'label',
         //html: 'Agregue su logo o </br>imágen de su local',
         locales: {
            html: 'form.profilephotoinfo.logo.html'
         },
         margin: '20 0 0 7',
         style: {
            position: "absolute",
            marginTop: "200px"
         },
         cls: 'main-info-BusType'
      }
   ]

});*/

var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
Ext.define('BrandAdmin.view.events.EventsPhotoForm', {
   extend: 'Ext.form.Panel',
   xtype: 'eventsphotoform',
   //title: 'Event Photo',
   locales: {
      title: 'form.eventsphoto.title'
   },
   store: 'EventsStore',
   border: true,
   autoScroll: true,
   requires: [
      'Ext.form.FieldSet',
      'Ext.form.FieldContainer',
      'Ext.tip.QuickTip',
      'Ext.form.field.Date'
   ],
   cls: 'at-form-large',
   items: [{
      xtype: 'fieldset',
      border: false,
      cls: 'at-fieldset-large',
      defaults: {
         fieldCls: 'at-textfield-large',
         //cls: 'at-textfield-large',
         labelCls: 'at-fieldlabel-large',
         anchor: '100%',
         labelAlign: 'top',
         msgTarget: 'side'
      },
      defaultType: 'textfield',
      items: [{
         xtype: 'container',
         margin: '10 0 0 0',
         layout: {
            type: 'hbox'
         },
         anchor: '100%',
         items: [
            //main profile image code (600*450 px)
            {
               xtype: 'container',
               margin: '10 0 0 0',
               /*layout: {
                  type: 'vbox'/*,
                  align: 'center'#1#
               },*/
               flex: 1,
               items: [{
                     xtype: 'container',
                     margin: '10 0 0 0',
                     layout: {
                        type: 'hbox'/*,
                     align: 'center'*/
                     },
                     //flex: 1,
                     items: [
                        {
                           xtype: 'container',
                           layout: 'vbox',
                           margin: '10 0 0 0',
                           flex: 1,
                           items: [{
                                 xtype: 'dataview',
                                 trackOver: true,
                                 // margin: '30 0 10 0',
                                 itemId: 'eventsImageDataView',
                                 tpl: Ext.create('Ext.XTemplate',
                                    //'<div class="moviePhoto">',
                                    '<tpl for=".">',
                                    '<div>',
                                    '<img id="eventsInfoImageBox" style="height:120px;width:160px;" src={photo} alt="Imagen de su local o negocio">' +
                                       //'</div>',
                                       '</tpl>' +
                                       '</div>'),

                                 itemSelector: 'div.main',
                                 store: {
                                    fields: ['photo'],
                                    data: [
                                       { photo: 'resources/images/NtAvailEvent.png', type: 'auto' }
                                    ]
                                 }
                              },
                              {
                                 xtype: 'button',
                                 //text: 'Upload',
                                 margin: '5 0 0 45',
                                 action: 'upload',
                                 id: 'eventsUpload',
                                 cls: 'upload-button-flat',
                                 height: 40,
                                 locales: {
                                    text: 'buttons.upload'
                                 }
                              }, {
                                 xtype: 'label',
                                 // height:'200px',
                                 margin: '45 0 0 47',
                                 style: 'font-size:16px',
                                 locales: {
                                    html: 'form.offersinfo.step1.html'
                                 }
                                 // html: '<b>Paso 1</b>'
                              }
                           ]
                        }, {
                           xtype: 'container',
                           style: 'border-right: 2px solid rgb(255, 102, 0)',
                           layout: {
                              type: 'vbox',
                              align: 'center'
                           },
                           width: '100%',
                           //  margin: '10 0 0 0',
                           defaults: {
                              anchor: '100%'
                           },
                           flex: 1.2,
                           items: [{
                                 xtype: 'label',
                                 locales: {
                                    html: 'form.eventsphoto.detail1.html'
                                 },
                                 // html: 'Detalles de la oferta',
                                 style: 'color:red;font-size:16px',
                                 display: 'block'
                              }, {
                                 xtype: 'label',
                                 locales: {
                                    html: 'form.offersinfo.detail2.html'
                                 },
                                 // html: 'Ejemplo de como',
                                 style: 'color:red;font-size:16px',
                                 display: 'block'
                              }, {
                                 xtype: 'label',
                                 locales: {
                                    html: 'form.offersinfo.detail3.html'
                                 },
                                 // html: 'se va a ver',
                                 style: 'color:red;font-size:16px',
                                 display: 'block'
                              }, {
                                 xtype: 'image',
                                 height: '200px',
                                 margin: '10 0 15 0',
                                 src: 'resources/images/eventPreview.jpg'
                              }]
                        }
                     ]
                  },
                  {
                     xtype: 'label',
                     width: '100%',
                     style: {
                        fontStyle: '11px',
                        color: '#f00',
                        display: 'block'
                     },
                     locales: {
                        html: 'form.profilephotoinfo.logo.html'
                     }
                  }]
            },
            //smaller image that is to be displayed in list (opens the cropping window)
            {
               xtype: 'container',
               margin: '10 0 0 25',
               /* layout: {
                   type: 'vbox',
                   align: 'center'
                },*/
               itemId: 'offersCropImageContainer',
               flex: 1,
               items: [{
                     xtype: 'container',
                     margin: '10 0 0 0',
                     layout: 'hbox',
                     items: [
                        {
                           xtype: 'container',
                           layout: 'vbox',
                           margin: '10 0 0 0',
                           flex: 1,
                           items: [{
                                 xtype: 'dataview',
                                 trackOver: true,
                                 itemId: 'eventsCropImageDataView',
                                 tpl: Ext.create('Ext.XTemplate',
                                    '<tpl for=".">',
                                    '<div>',
                                    '<img style="height:150px;width:150px;" src={photo} id="eventsCropImageBox">' +
                                       '</div>',
                                    '</tpl>'),

                                 itemSelector: 'div.main',
                                 store: {
                                    fields: ['photo'],
                                    data: [
                                       { photo: 'resources/images/NtAvailEvent.png' }
                                    ]
                                 }
                              }, {
                                 xtype: 'button',
                                 //flex: 1,
                                 id: "openEveCropWindowButton",    //id used for window animateTarget config
                                 action: 'openCropWindow',
                                 cls: 'upload-button-flat',
                                 height: 40,
                                 margin: '0 0 0 45',
                                 locales: {
                                    text: 'buttons.upload'
                                 }
                              }, {
                                 xtype: 'label',
                                 // height:'200px',
                                 margin: '45 0 0 47',
                                 style: 'font-size:16px',
                                 locales: {
                                    html: 'form.offersinfo.step2.html'
                                 }
                                 //  html: '<b>Paso 2</b>'
                              }
                           ]
                        }, {
                           xtype: 'container',
                           layout: {
                              type: 'vbox',
                              align: 'center'
                           },
                           width: '100%',
                           //  margin: '10 0 0 0',
                           defaults: {
                              anchor: '100%'
                           },
                           flex: 1,
                           items: [{
                                 xtype: 'label',
                                 locales: {
                                    html: 'form.eventsphoto.detail1.html'
                                 },
                                 // html: 'Detalles de la oferta',
                                 style: 'color:red;font-size:16px',
                                 display: 'block'
                              }, {
                                 xtype: 'label',
                                 locales: {
                                    html: 'form.offersinfo.detail2.html'
                                 },
                                 // html: 'Ejemplo de como',
                                 style: 'color:red;font-size:16px',
                                 display: 'block'
                              }, {
                                 xtype: 'label',
                                 locales: {
                                    html: 'form.offersinfo.detail3.html'
                                 },
                                 // html: 'se va a ver',
                                 style: 'color:red;font-size:16px',
                                 display: 'block'
                              }, {
                                 xtype: 'image',
                                 height: '200px',
                                 margin: '10 0 15 0',
                                 src: 'resources/images/event.png'
                              }]
                        }
                     ]
                  }, {
                     xtype: 'label',
                     width: '100%',
                     style: {
                        fontStyle: '11px',
                        color: '#f00',
                        display: 'block'
                     },
                     locales: {
                        html: 'form.profilephotoinfo.logo.html'
                     }
                  }
               ]
            }]
      }]
   }]
});