﻿Ext.define('SuperAdmin.model.AnalyticsEventsCommentsModel', {
   extend: 'Ext.data.Model',
   fields: [
      { name: 'key', type: 'string' },
     { name: 'type', type: 'string' },
      { name: 'userId', type: 'string' },
      { name: 'userName', type: 'string' },
      { name: 'value', type: 'string' },
      { name: 'updatedAt', type: 'date' },
      { name: 'eventId', type: 'int' },
      { name: 'dateTime', type: 'date' },
      { name: 'createdAt', type: 'date' }
   ]
});