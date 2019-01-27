﻿Ext.define('BrandAdmin.view.locations.LocationsMapPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'locationsmappanel',
   layout:'fit',
   items: [  {
      xtype: 'gmappanel',
      itemId: 'mapPanel',
      mapOptions: {
        zoom:2 
      },
      zoom:1,
      
      listeners: {
         'mapready': {
            fn: function (comp, eOpts)
            {
               

               /*comp.on(
               'click',
               function (event, node, options, eOpts) {
                  alert('sdf');
                  Ext.Msg.alert('swipe', 'direction: ' + event.direction, Ext.emptyFn); this.fireEvent('swipe');

               },
               comp
               );*/
            }
         }
      },
      center: {
         geoCodeAddr: '4 Yawkey Way, Boston, MA, 02215-3409, USA',
         marker: {title: 'Fenway Park'}
      }

   }
   ],
   tbar: ['->',{
      xtype: 'button',
      text: 'Clear Pin',
      action: 'clearpin'
   }]
});