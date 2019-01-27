﻿Ext.define('MobileApp.model.EventsListModel', {
   extend: 'Ext.data.Model',

   config: {
      fields: [
         { name: 'key', type: 'string' },
         { name: 'name', type: 'string' },
         { name: 'location', type: 'string' },
         { name: 'details', type: 'string' },
         { name: 'photo', type: 'auto' },
         { name: 'date', type: 'string' },
         { name: 'time', type: 'string' },
         { name: 'createdAt', type: 'string' },
         { name: 'attendeeCount', type: 'int' },
         { name: 'likeCount', type: 'int' },
          { name: 'lang', type: 'string', defaultValue: 'fr' },
         { name: 'fromEventsTime', type: 'string' },
         { name: 'toEventsTime', type: 'string' }
      ]
   }
});