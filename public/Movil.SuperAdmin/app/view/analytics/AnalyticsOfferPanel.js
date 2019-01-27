﻿Ext.define('SuperAdmin.view.analytics.AnalyticsOfferPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'analyticsofferpanel',
   cls: 'flatgrid',
   layout: {
      type: 'border',
      align: 'stretch'
   },
   width: 1000,

   border: false,
   items: [{
      xtype: 'analyticsoffersgrid',
      split: true,
      region: 'west',
      flex: 1
   }, {
      xtype: 'analyticsfavofferpanel',
      split: true,
      region: 'center',
      flex: 1.2
   }]
});