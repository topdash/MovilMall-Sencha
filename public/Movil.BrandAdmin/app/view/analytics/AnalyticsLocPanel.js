﻿Ext.define('BrandAdmin.view.analytics.AnalyticsLocPanel', {
   extend: 'Ext.panel.Panel',
   xtype: 'analyticslocpanel',
   border:true,
   layout: {
      type: 'border',
      align: 'stretch'
   },
   width: 1000,


   items: [{
      xtype: 'analyticslocgrid',
      split: true,
      region: 'west',
      flex: 1
   }, {
      xtype: 'analyticsfavlocgrid',
      split: true,
      region: 'center',
      flex: 1.2
   }]
});