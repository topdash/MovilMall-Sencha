﻿Ext.define('BrandAdmin.view.analytics.AnalyticsEventsCommentsDataView', {
   extend: 'Ext.view.View',
   xtype: 'AnalyticsEventsCommentsDataView',
   trackOver: true,
    store: 'AnalyticsEventsCommentsStore',
   tpl: Ext.create('Ext.XTemplate',

       '<div class="main">',
      '<table>',
      //'<tpl for=".">',
      '<div class="comments"></b>' +

         '<span><div id="commentsdiv" title="Edit" class="deleteicon"></div></span>' +

           '<font size="2px" style="text-decoration:underline;" >Name</font>',
      '</br><font size="2px">details</font>',

      '</div>',
      //'</tpl>',
      '</div>'
   ),
   itemSelector: 'comments'
});