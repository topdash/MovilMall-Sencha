﻿Ext.define('BrandAdmin.store.MoviesShowTimesStore', {
   extend: 'Ext.data.Store',
   fields: ['value', 'name', 'id'],
   sorters: [{
      property: 'name',
      direction: 'ASC'
   }],
   data: [
        { "name": "10:00 AM", value: 1 },
        { "name": "10:15 AM", value: 2 },
        { "name": "10:30 AM", value: 3 },
        { "name": "10:45 AM", value: 4 },
        { "name": "11:00 AM", value: 5 },
        { "name": "11:15 AM", value: 6 },
        { "name": "11:30 AM", value: 7 },
        { "name": "11:45 AM", value: 8 },
        { "name": "12:00 PM", value: 9 },
        { "name": "12:15 PM", value: 10 },
        { "name": "12:30 PM", value: 11 },
        { "name": "12:45 PM", value: 12 },
        { "name": "01:00 PM", value: 13 },
        { "name": "01:15 PM", value: 14 },
        { "name": "01:30 PM", value: 15 },
        { "name": "01:45 PM", value: 16 },
        { "name": "02:00 PM", value: 17 },
        { "name": "02:15 PM", value: 18 },
        { "name": "02:30 PM", value: 19 },
        { "name": "02:45 PM", value: 20 },
        { "name": "03:00 PM", value: 21 },
        { "name": "03:15 PM", value: 22 },
        { "name": "03:30 PM", value: 23 },
        { "name": "03:45 PM", value: 24 },
        { "name": "04:00 PM", value: 25 },
        { "name": "04:15 PM", value: 26},
        { "name": "04:30 PM", value: 27 },
        { "name": "04:45 PM", value: 28 },
        { "name": "05:00 PM", value: 29 },
        { "name": "05:15 PM", value: 30 },
        { "name": "05:30 PM", value: 31 },
        { "name": "05:45 PM", value: 32 },
        { "name": "06:00 PM", value: 33 },
        { "name": "06:15 PM", value: 34 },
        { "name": "06:30 PM", value: 35 },
        { "name": "06:45 PM", value: 36 },
        { "name": "07:00 PM", value: 37 },
        { "name": "07:15 PM", value: 38 },
        { "name": "07:30 PM", value: 39 },
        { "name": "07:45 PM", value: 40 },
        { "name": "08:00 PM", value: 41 },
        { "name": "08:15 PM", value: 42 },
        { "name": "08:30 PM", value: 43 },
        { "name": "08:45 PM", value: 44 },
        { "name": "09:00 PM", value: 45 },
        { "name": "09:15 PM", value: 46 },
        { "name": "09:30 PM", value: 47 },
        { "name": "09:45 PM", value: 48 },
        { "name": "10:00 PM", value: 49 },
        { "name": "10:15 PM", value: 50 },
        { "name": "10:30 PM", value: 51 },
        { "name": "10:45 PM", value: 52 },
        { "name": "11:00 PM", value: 53 },
        { "name": "11:15 PM", value: 54 },
        { "name": "11:30 PM", value: 55 },
        { "name": "11:45 PM", value: 56 },
        { "name": "12:00 AM", value: 57 }
     
     
   ]
});