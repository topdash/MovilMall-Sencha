﻿Ext.define('BrandAdmin.view.offers.OffersDetailsPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'offersdetailspanel',
   layout: {
      type: 'border'
   },

  
   border: true,/*
   deferredRender: true,

   animCollapse: true,
   bodyBorder: false,*/
   items: [{
      xtype: 'offersbreadcrumb',
     region: 'north'
   }, {
      xtype: 'offersbreadcrumbpanel',
      region: 'center'
   }]
});